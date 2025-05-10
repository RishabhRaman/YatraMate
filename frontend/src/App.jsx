import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Recommendations from './components/Recommendations';
import Schedule from './components/Schedule';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import AdvancedSchedule from './components/AdvancedSchedule';
import TripDetail from './components/TripDetail';
import UserDashboard from './components/UserDashboard';
import ItineraryForm from './components/ItineraryForm';
import ExploreMap from './components/ExploreMap';
import GuideBooking from './components/GuideBooking';
import SavedPlaces from './components/SavedPlaces';
import TravelBudget from './components/TravelBudget';
import PastTravels from './components/PastTravels';
import './styles/App.css';
import './styles/notification.css';

function App() {
  const navigate = useNavigate();
  const [itineraryData, setItineraryData] = useState(null);

  const handleItinerarySubmit = (data) => {
    setItineraryData(data);
    console.log('Itinerary submitted:', data);
  };

  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <HowItWorks />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/schedule" element={<Schedule tripId={1} />} />
            <Route path="/trips" element={<TripList />} />
            <Route path="/trips/new" element={<TripForm />} />
            <Route path="/trips/:tripId" element={<TripDetail />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/advanced-schedule" element={<AdvancedSchedule />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/itineraryForm" element={<ItineraryForm onSubmit={handleItinerarySubmit} />} />
            <Route path="/explore" element={<ExploreMap />} />
            <Route path="/guide-booking" element={<GuideBooking />} />
            <Route path="/saved-places" element={<SavedPlaces />} />
            <Route path="/travel-budget" element={<TravelBudget />} />
            <Route path="/past-travels" element={<PastTravels />} />
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
