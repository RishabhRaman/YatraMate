// A simple script to test the Gemini API connection
const fetch = require('node-fetch');

// Use the same API key as in GeminiAI.js
const GEMINI_API_KEY = "AIzaSyANU6Qo_OlBmbNS-TqMrQqSZuMA2wB7kC0";

async function testGeminiConnection() {
    console.log("Testing Gemini API connection...");
    console.log(`API Key length: ${GEMINI_API_KEY.length}, first 5 chars: ${GEMINI_API_KEY.substring(0, 5)}`);

    try {
        // Use the simpler gemini-pro model
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

        const requestBody = {
            contents: [{
                parts: [{ text: "Hello! Generate a one paragraph travel itinerary for Paris." }]
            }]
        };

        console.log("Sending request to Gemini API...");

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        console.log(`Response status: ${response.status} ${response.statusText}`);

        const responseText = await response.text();
        console.log("Raw response:", responseText.substring(0, 300) + (responseText.length > 300 ? "..." : ""));

        try {
            const data = JSON.parse(responseText);
            console.log("Response parsed as JSON successfully");

            if (response.ok) {
                if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                    console.log("SUCCESS! Gemini API returned a valid response");
                    console.log("Content:", JSON.stringify(data.candidates[0].content, null, 2));
                } else {
                    console.log("Got a 200 OK but unexpected response structure:", JSON.stringify(data, null, 2));
                }
            } else {
                console.error("Gemini API returned an error:", JSON.stringify(data, null, 2));
            }
        } catch (parseError) {
            console.error("Failed to parse response as JSON:", parseError.message);
        }
    } catch (error) {
        console.error("Error connecting to Gemini API:", error);
    }
}

// Run the test
testGeminiConnection();