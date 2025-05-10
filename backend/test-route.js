// Test script to check if the /api/gemini/chat route is working
const fetch = require('node-fetch');

async function testRoute() {
    try {
        console.log('Testing /api/gemini/chat route...');

        const response = await fetch('http://localhost:3000/api/gemini/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    { role: 'user', content: 'Test message' }
                ]
            })
        });

        console.log('Response status:', response.status);

        const responseText = await response.text();
        console.log('Response text (first 200 chars):', responseText.substring(0, 200));

        try {
            const data = JSON.parse(responseText);
            console.log('Response parsed as JSON:', !!data);
            console.log('Has choices:', !!data.choices);
            console.log('Has content:', data.choices && data.choices[0] && !!data.choices[0].message.content);
            console.log('Content length:', data.choices ? .[0] ? .message ? .content ? .length || 0);
        } catch (e) {
            console.error('Error parsing response as JSON:', e.message);
        }
    } catch (error) {
        console.error('Error testing route:', error);
    }
}

testRoute();