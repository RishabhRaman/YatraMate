const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Load the OpenAI API key from environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not set in environment variables');
}

router.post('/chat', async(req, res) => {
    const { messages } = req.body;
    if (!messages) {
        return res.status(400).json({ error: 'Messages are required.' });
    }

    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: 'OpenAI API key is not configured.' });
    }

    try {
        console.log('Received request with messages:', JSON.stringify(messages, null, 2));

        const requestBody = {
            model: 'gpt-3.5-turbo',
            messages,
            temperature: 0.7,
            max_tokens: 2000,
            presence_penalty: 0.6,
            frequency_penalty: 0.3
        };

        console.log('Sending request to OpenAI API:', JSON.stringify(requestBody, null, 2));

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify(requestBody)
        });

        const responseData = await response.json();
        console.log('OpenAI API response:', JSON.stringify(responseData, null, 2));

        if (!response.ok) {
            console.error('OpenAI API error:', responseData);
            const errorMessage = responseData.error && responseData.error.message ?
                responseData.error.message :
                'Error from OpenAI API';
            return res.status(response.status).json({ error: errorMessage });
        }

        if (!responseData.choices || !Array.isArray(responseData.choices) || responseData.choices.length === 0) {
            console.error('Invalid response format from OpenAI:', responseData);
            return res.status(500).json({
                error: 'Invalid response format from OpenAI API: No choices array'
            });
        }

        const message = responseData.choices[0] && responseData.choices[0].message;
        if (!message || !message.content) {
            console.error('Invalid response format from OpenAI:', responseData);
            return res.status(500).json({
                error: 'Invalid response format from OpenAI API: No message content'
            });
        }

        res.json(responseData);
    } catch (err) {
        console.error('Error in ChatGPT route:', err);
        res.status(500).json({
            error: 'Error contacting OpenAI API. Please check server logs for details.'
        });
    }
});

module.exports = router;