// A direct test script for the Gemini API
const fetch = require('node-fetch');
require('dotenv').config();

// HARDCODED API KEY as fallback
const HARDCODED_API_KEY = 'AIzaSyANU6Qo_OlBmbNS-TqMrQqSZuMA2wB7kC0';

async function testGeminiAPI() {
    console.log('============= DIRECT GEMINI API TEST =============');

    // Get API key from environment with hardcoded fallback
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY || HARDCODED_API_KEY;

    console.log(`API Key length: ${GEMINI_API_KEY.length}`);
    console.log(`API Key first 5 chars: ${GEMINI_API_KEY.substring(0, 5)}`);

    // Test message
    const testMessage = "Generate a short travel itinerary for Paris, France for 3 days.";
    console.log(`Test message: "${testMessage}"`);

    // Use correct model name and API version
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${GEMINI_API_KEY}`;
    console.log(`API URL: ${url}`);

    const requestBody = {
        contents: [{
            parts: [{
                text: testMessage
            }]
        }],
        generationConfig: {
            temperature: 0.7,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        }
    };

    try {
        console.log('Sending request to Gemini API...');
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        console.log(`Response status: ${response.status} ${response.statusText}`);

        const responseText = await response.text();
        console.log(`Response length: ${responseText.length} characters`);
        console.log(`Response preview: ${responseText.substring(0, 150)}...`);

        try {
            const data = JSON.parse(responseText);
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                console.log('SUCCESS! Parsed response structure correctly.');
                const content = data.candidates[0].content.parts[0].text;
                console.log(`Generated content (first 150 chars): ${content.substring(0, 150)}...`);
            } else {
                console.log('ERROR: Unexpected response structure:', JSON.stringify(data, null, 2));
            }
        } catch (parseError) {
            console.error('ERROR: Failed to parse response as JSON:', parseError);
            console.log('Raw response:', responseText);
        }
    } catch (error) {
        console.error('ERROR sending request:', error);
    }

    console.log('============= TEST COMPLETE =============');
}

// Run the test
testGeminiAPI();