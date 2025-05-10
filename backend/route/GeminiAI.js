const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// HARDCODED API KEY as fallback
const HARDCODED_API_KEY = 'AIzaSyANU6Qo_OlBmbNS-TqMrQqSZuMA2wB7kC0';

// Just log that the module is loaded, without checking API keys
console.log('================ GEMINI ROUTE LOADED ================');

router.post('/chat', async(req, res) => {
    console.log('POST /api/gemini/chat received request with body:', JSON.stringify(req.body, null, 2));

    // Try all possible sources for the API key, with hardcoded fallback
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY || HARDCODED_API_KEY;

    console.log('====================================================');
    console.log(`[GEMINI REQUEST] Using API Key (first 5 chars): ${GEMINI_API_KEY.substring(0, 5)}`);
    console.log('====================================================');

    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ error: 'Invalid request format. Expected a messages array.' });
        }

        // Extract the content from the user message
        let userMessage = null;
        const userMessageObj = messages.find(msg => msg.role === 'user');
        if (userMessageObj) {
            userMessage = userMessageObj.content;
        }

        if (!userMessage) {
            return res.status(400).json({ error: 'No user message found in request' });
        }

        // Use the Gemini API with the correct endpoint and model name
        const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

        const requestBody = {
            contents: [{
                parts: [{
                    text: userMessage
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 1,
                topP: 1,
                maxOutputTokens: 2048,
            }
        };

        console.log('Sending request to Gemini API with URL:', url);
        console.log('Request body:', JSON.stringify(requestBody, null, 2));

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const responseStatus = `${response.status} ${response.statusText}`;
        console.log('Gemini API response status:', responseStatus);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API error response:', errorText);
            return res.status(response.status).json({
                error: `Error from Gemini API: ${response.statusText}`,
                details: errorText
            });
        }

        const responseText = await response.text();
        console.log('Gemini API response text (first 200 chars):', responseText.substring(0, 200));

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('Failed to parse Gemini API response as JSON:', parseError);
            return res.status(500).json({ error: 'Invalid JSON response from Gemini API' });
        }

        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            console.error('Invalid response structure from Gemini API:', JSON.stringify(data, null, 2));
            return res.status(500).json({ error: 'Invalid response structure from Gemini API' });
        }

        // Return the response in the format expected by the client
        const geminiContent = data.candidates[0].content.parts[0].text;
        console.log('Successfully extracted content from Gemini API response');
        return res.json({
            choices: [{
                message: { content: geminiContent }
            }]
        });
    } catch (error) {
        console.error('Error processing request:', error);
        return res.status(500).json({ error: 'Server error: ' + error.message });
    }
});

module.exports = router;