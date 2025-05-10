// Simple direct test of the Gemini API
const fetch = require('node-fetch');


const API_KEY = 'process.env.GEMINI_API_KEY.trim()';
const MODEL = 'gemini-pro';
const URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${API_KEY}`;

async function test() {
    console.log('Testing Gemini API...');
    console.log(`Using model: ${MODEL}`);
    console.log(`URL: ${URL}`);

    const data = {
        contents: [{
            parts: [
                { text: "Generate a short itinerary for Paris" }
            ]
        }]
    };

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        console.log(`Status: ${response.status} ${response.statusText}`);
        const text = await response.text();
        console.log('Raw response:', text.substring(0, 300) + '...');

        if (response.ok) {
            console.log('SUCCESS!');
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
}

test();