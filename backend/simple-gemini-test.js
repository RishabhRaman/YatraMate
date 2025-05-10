// Simple Gemini API test with hardcoded key
const fetch = require('node-fetch');

const API_KEY = 'AIzaSyANU6Qo_OlBmbNS-TqMrQqSZuMA2wB7kC0';

async function testGemini() {
    console.log('Testing Gemini API...');

    // Use URL and format directly from Google documentation
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${API_KEY}`;

    const data = {
        contents: [{
            parts: [{
                text: "Write me a 3-day itinerary for Paris, France."
            }]
        }],
        generationConfig: {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        }
    };

    console.log('Sending request...');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log('Response status:', response.status);

        const responseText = await response.text();
        console.log('Response text (first 100 chars):', responseText.substring(0, 100));

        if (response.ok) {
            try {
                const jsonResponse = JSON.parse(responseText);
                console.log('Successfully parsed response');

                if (jsonResponse.candidates && jsonResponse.candidates[0] && jsonResponse.candidates[0].content) {
                    console.log('Response has expected structure');
                    const text = jsonResponse.candidates[0].content.parts[0].text;
                    console.log('Generated text (first 100 chars):', text.substring(0, 100));
                } else {
                    console.log('Unexpected response structure:', JSON.stringify(jsonResponse, null, 2));
                }
            } catch (e) {
                console.error('Error parsing JSON:', e);
                console.log('Raw response:', responseText);
            }
        } else {
            console.error('Error response:', responseText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

testGemini();