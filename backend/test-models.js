// Test script to find working Gemini model names
const fetch = require('node-fetch');

const API_KEY = 'AIzaSyANU6Qo_OlBmbNS-TqMrQqSZuMA2wB7kC0';

// Array of potential model names to try
const modelNames = [
    'gemini-pro',
    'gemini-1.0-pro',
    'gemini-pro-1.0',
    'chat-bison-001',
    'text-bison-001'
];

async function testModels() {
    console.log('Testing different Gemini model names...');

    for (const model of modelNames) {
        console.log(`\n----- Testing model: ${model} -----`);

        const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${API_KEY}`;

        const data = {
            contents: [{
                parts: [
                    { text: "Generate a simple hello world response" }
                ]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 100,
            }
        };

        try {
            console.log(`Sending request to ${url}...`);

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log(`Response status: ${response.status} ${response.statusText}`);

            const responseText = await response.text();
            console.log(`Response text (first 150 chars): ${responseText.substring(0, 150)}...`);

            if (response.ok) {
                console.log(`SUCCESS! Model ${model} works!`);
                console.log('---------------------------------');
            }
        } catch (error) {
            console.error(`Error testing model ${model}:`, error.message);
        }
    }

    console.log('\nTesting complete!');
}

testModels();