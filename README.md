# YatraMate - AI-Powered Travel Companion

<div align="center">
  <img src="frontend/images/yatramate-logo.png" alt="YatraMate Logo" width="200" height="auto" />
  <h3>Intelligent Travel Planning with AI Assistance</h3>
</div>

## 📋 Overview

YatraMate is a comprehensive travel planning platform that leverages AI technologies to provide personalized travel recommendations, itinerary planning, and destination insights. The application helps users discover new destinations, plan their trips efficiently, and manage their travel budget, all with the assistance of powerful AI models.

## ✨ Key Features

- **AI-Powered Recommendations**: Get personalized travel suggestions based on your preferences
- **Interactive Destination Explorer**: Browse through curated destinations with rich visual content
- **Intelligent Itinerary Planning**: Create detailed day-by-day travel plans
- **Budget Management**: Track and manage your travel expenses
- **Local Guide Booking**: Connect with experienced local guides at your destination
- **User Dashboard**: Manage all your travel plans in one place
- **Responsive Design**: Seamless experience across desktop and mobile devices

## 🛠 Technology Stack

### Frontend
- **React**: UI library for building interactive components
- **React Router**: For navigation and routing
- **CSS3**: Modern styling with flexbox and grid layouts
- **Vite**: Next-generation frontend build tool

### Backend
- **Node.js**: JavaScript runtime for the server
- **Express**: Web framework for building RESTful APIs
- **MongoDB**: NoSQL database for storing user and travel data

### AI Integration
- **Google's Gemini API**: Powers the intelligent chatbot assistant
- **OpenAI Integration**: Alternative AI model for text generation

## 📦 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- MongoDB (v4.0.0 or higher)
- API keys for Gemini AI

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/yatramate.git
   cd yatramate
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory and add your API keys:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   MONGODB_URI=your_mongodb_connection_string
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Install chatbot service dependencies**
   ```bash
   cd ../chatbot-service
   npm install
   ```

## 🚀 Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:3000
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

3. **Start the chatbot service**
   ```bash
   cd chatbot-service
   npm start
   # Chatbot service runs on http://localhost:5001
   ```

## 🧩 Project Structure

```
yatramate/
├── frontend/                  # React frontend application
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── contexts/          # React context providers
│   │   ├── services/          # API service functions
│   │   └── styles/            # CSS styles
│   ├── public/                # Static assets
│   └── package.json           # Frontend dependencies
├── backend/                   # Express.js backend
│   ├── models/                # MongoDB schema models
│   ├── routes/                # API route handlers
│   ├── server.js              # Main server file
│   └── package.json           # Backend dependencies
├── chatbot-service/           # Dedicated AI chatbot service
│   ├── index.js               # Service entry point
│   └── package.json           # Chatbot dependencies
└── .env                       # Environment variables
```

## 🖥️ Application Screenshots

<div align="center">
  <img src="screenshots/home-page.png" alt="Home Page" width="80%" />
  <p><em>YatraMate Home Page</em></p>
  
  <img src="screenshots/recommendations.png" alt="Recommendations Page" width="80%" />
  <p><em>AI-Powered Travel Recommendations</em></p>
  
  <img src="screenshots/itinerary-planner.png" alt="Itinerary Planner" width="80%" />
  <p><em>Interactive Itinerary Planning</em></p>
</div>

## 🔌 API Integrations

### Gemini AI Integration
YatraMate leverages Google's Gemini AI for intelligent travel recommendations and conversational assistance. The integration allows users to:

- Get personalized travel suggestions
- Ask questions about destinations
- Receive cultural and practical travel advice

### Maps Integration
The application uses the Google Maps API for:
- Destination visualization
- Points of interest discovery
- Distance and travel time estimation

## 👥 User Authentication

YatraMate provides a secure user authentication system with:
- Email/password registration and login
- User profile management
- Secure token-based authentication
- Password recovery functionality

## 🚧 Future Enhancements

- **Multi-language Support**: Translations for global users
- **Social Sharing**: Share travel plans with friends and family
- **AR Destination Preview**: Augmented reality destination previews
- **Travel Community**: User forums and community features
- **Mobile Applications**: Native apps for iOS and Android

## 👨‍💻 Contributing

We welcome contributions to YatraMate! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Google Generative AI](https://ai.google.dev/)
- [Unsplash](https://unsplash.com/) for the beautiful destination images

---

<div align="center">
  <p>Made with ❤️ by the YatraMate Team -  Binary Brains</p>
  <p>© 2025 YatraMate. All rights reserved.</p>
</div> 