const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/chat', async(req, res) => {
    try {
        const response = await axios.post('http://localhost:5001/chat', {
            message: req.body.message,
        });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Chatbot service unreachable' });
    }
});

module.exports = router;