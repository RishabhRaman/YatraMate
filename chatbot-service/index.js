const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/chat', async(req, res) => {
    const { message } = req.body;

    try {
        const geminiRes = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
                contents: [{ parts: [{ text: message }] }]
            }
        );

        const reply = geminiRes.data.candidates[0].content.parts[0].text;
        res.json({ reply });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Gemini API failed' });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Chatbot service running on port ${PORT}`));