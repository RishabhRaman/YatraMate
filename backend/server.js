   // backend/server.js
   // Load environment variables FIRST, before any imports
   const dotenv = require('dotenv');
   const path = require('path');
   const fs = require('fs');

   // Try to load environment variables from multiple potential locations
   dotenv.config(); // Load from .env in current directory

   // Also try to load from .env in the root directory
   const rootEnvPath = path.join(__dirname, '../.env');
   if (fs.existsSync(rootEnvPath)) {
       const rootEnvConfig = dotenv.config({ path: rootEnvPath });
       console.log('Loaded env from root directory:', rootEnvConfig.parsed ? 'success' : 'failed');
   }

   // Hardcode the API key if it's not found in environment variables
   if (!process.env.GEMINI_API_KEY && process.env.REACT_APP_GEMINI_API_KEY) {
       console.log('Copying API key from REACT_APP_GEMINI_API_KEY to GEMINI_API_KEY');
       process.env.GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY.trim();
   } else if (!process.env.GEMINI_API_KEY && !process.env.REACT_APP_GEMINI_API_KEY) {
       console.log('API key not found in environment variables. Using hardcoded value.');
    //    
   } else if (process.env.GEMINI_API_KEY) {
       // Ensure the key doesn't have any whitespace
       process.env.GEMINI_API_KEY = process.env.GEMINI_API_KEY.trim();
       console.log('Using existing GEMINI_API_KEY (trimmed)');
   }

   // Now proceed with imports after environment variables are loaded
   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const authRoutes = require('./route/Auth');
   const chatgptRoutes = require('./route/ChatGPT');
   const geminiAIRoutes = require('./route/GeminiAI');
   const chatRoutes = require('./route/chat_v2');

   // Start with basic console log to ensure server is running
   console.log('======== STARTING SERVER ========');

   // Debug: Log all command line arguments
   console.log('Command line args:', process.argv);



   const app = express();
   const PORT = process.env.PORT || 3000;

   // Middleware
   app.use(cors()); // Enable CORS for all origins
   app.use(express.json()); // To parse JSON bodies

   // Add global error handler middleware
   app.use((err, req, res, next) => {
       console.error('Global error handler caught:', err);
       res.status(500).json({ error: 'Internal server error', message: err.message });
   });

   // Debug route that doesn't depend on any other code
   app.get('/api/debug', (req, res) => {
       console.log('Debug route hit');
       res.json({ message: 'Server is running', time: new Date().toISOString() });
   });

   // Connect to MongoDB
   mongoose.connect(process.env.MONGODB_URI)
       .then(() => {
           console.log('Connected to MongoDB');
       })
       .catch(err => {
           console.error('Error connecting to MongoDB:', err.message);
       });

   // Routes
   app.use('/api/auth', authRoutes);
   app.use('/api/chatgpt', chatgptRoutes);
   app.use('/api/gemini', geminiAIRoutes);
   app.use('/api/chat', chatRoutes);

   // Start the server
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });