const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Load the OpenAI API key from environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

router.post('/chat', async(req, res) => {
    const { messages } = req.body;
    if (!messages) {
        return res.status(400).json({ error: 'Messages are required.' });
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages
            })
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error contacting OpenAI.' });
    }
});

module.exports = router;