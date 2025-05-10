// Test script for the /api/gemini/chat endpoint
const fetch = require('node-fetch');

async function testEndpoint() {
    console.log('Testing /api/gemini/chat endpoint...');

    try {
        const response = await fetch('http://localhost:3000/api/gemini/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [{ role: 'user', content: 'Test message' }]
            })
        });

        console.log('Response status:', response.status);

        const text = await response.text();
        console.log('Response text (first 100 chars):',
            text.substring(0, 100) + (text.length > 100 ? '...' : ''));

        try {
            const data = JSON.parse(text);
            console.log('Successfully parsed response as JSON');
            console.log('Has choices?', Boolean(data.choices));
            console.log('Has content?', Boolean(data.choices &&
                data.choices.length > 0 &&
                data.choices[0].message &&
                data.choices[0].message.content));

            if (data.choices && data.choices[0] && data.choices[0].message) {
                const content = data.choices[0].message.content;
                console.log('Content length:', content ? content.length : 0);
            }
        } catch (e) {
            console.error('Error parsing response as JSON:', e.message);
        }
    } catch (error) {
        console.error('Error making request:', error.message);
    }
}

// Run the test
testEndpoint();