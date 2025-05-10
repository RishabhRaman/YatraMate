import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import './ExploreMap.css';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 20, // Center of the world map
  lng: 0
};

// List of required libraries for Google Maps
const libraries = ['places'];

const ExploreMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [map, setMap] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [mapError, setMapError] = useState(null);
  
  // Using a proper Google Maps API key
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAKpOCwqHCzNRqD4kZUmFoMNHJc2uzshjQ",
    libraries,
    // More lenient error handling
    nonce: undefined,
    preventGoogleFontsLoading: false
  });

  useEffect(() => {
    if (loadError) {
      console.error("Google Maps loading error:", loadError);
      setMapError("Failed to load Google Maps. Please check your API key configuration.");
    }
  }, [loadError]);

  const onLoad = useCallback(function callback(map) {
    console.log("Google Maps loaded successfully");
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const featuredDestinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      position: { lat: -8.4095, lng: 115.1889 },
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Tropical paradise with beautiful beaches, lush rice terraces, and vibrant culture.',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Kyoto, Japan',
      position: { lat: 35.0116, lng: 135.7681 },
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Ancient temples, traditional gardens, and centuries of history and culture.',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Santorini, Greece',
      position: { lat: 36.3932, lng: 25.4615 },
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Stunning white-washed buildings with blue domes perched on dramatic cliffs.',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Machu Picchu, Peru',
      position: { lat: -13.1631, lng: -72.5450 },
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Ancient Incan citadel set high in the Andes Mountains, offering breathtaking views.',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Paris, France',
      position: { lat: 48.8566, lng: 2.3522 },
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'City of lights, romance, art, and gastronomy with iconic landmarks.',
      rating: 4.7
    }
  ];

  const onMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  const onMapClick = () => {
    setSelectedPlace(null);
  };

  const handleSearch = () => {
    if (!searchInput.trim() || !isLoaded || !map) return;
    
    const service = new window.google.maps.places.PlacesService(map);
    service.textSearch(
      {
        query: searchInput
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const formattedResults = results.slice(0, 5).map((result, index) => ({
            id: `search-${index}`,
            name: result.name,
            position: {
              lat: result.geometry.location.lat(),
              lng: result.geometry.location.lng()
            },
            image: result.photos && result.photos[0] 
              ? result.photos[0].getUrl({maxWidth: 400, maxHeight: 300}) 
              : 'https://via.placeholder.com/400x300?text=No+Image',
            description: result.formatted_address || 'No address available',
            rating: result.rating || 'N/A'
          }));
          
          setSearchResults(formattedResults);
          
          // If results found, center map on the first result
          if (formattedResults.length > 0) {
            map.setCenter(formattedResults[0].position);
            map.setZoom(12);
          }
        } else {
          console.error("Places search failed with status:", status);
          // Show a user-friendly error message or fallback
          setSearchResults([]);
        }
      }
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="explore-map-container">
      <h2>Explore Destinations</h2>
      <p className="map-description">Discover beautiful places around the world. Click on markers to learn more.</p>
      
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a destination..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          <span className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </button>
      </div>
      
      {loadError && (
        <div className="map-error">
          <h3>Error Loading Google Maps</h3>
          <p>{mapError || "There was an error loading Google Maps. Please try again later."}</p>
          <div className="error-details">
            <p>Please make sure your Google Maps API key is properly configured with:</p>
            <ul>
              <li>Maps JavaScript API enabled</li>
              <li>Places API enabled</li>
              <li>Billing set up in your Google Cloud account</li>
              <li>Proper domain restrictions (if any)</li>
            </ul>
          </div>
        </div>
      )}
      
      {!loadError && isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2}
          onClick={onMapClick}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Featured destinations markers */}
          {featuredDestinations.map(place => (
            <Marker
              key={place.id}
              position={place.position}
              onClick={() => onMarkerClick(place)}
              animation={window.google.maps.Animation.DROP}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
              }}
            />
          ))}
          
          {/* Search results markers */}
          {searchResults.map(place => (
            <Marker
              key={place.id}
              position={place.position}
              onClick={() => onMarkerClick(place)}
              animation={window.google.maps.Animation.DROP}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
              }}
            />
          ))}
          
          {selectedPlace && (
            <InfoWindow
              position={selectedPlace.position}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div className="info-window">
                <h3>{selectedPlace.name}</h3>
                <img src={selectedPlace.image} alt={selectedPlace.name} />
                <p>{selectedPlace.description}</p>
                <div className="place-rating">Rating: ★{selectedPlace.rating}</div>
                <button className="view-details-btn">View Details</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : !loadError ? (
        <div className="map-loading">Loading map...</div>
      ) : null}
      
      {/* Show search results cards if there are any */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          <div className="destination-cards">
            {searchResults.map(place => (
              <div 
                key={place.id} 
                className="destination-card"
                onClick={() => {
                  setSelectedPlace(place);
                  map.setCenter(place.position);
                }}
              >
                <img src={place.image} alt={place.name} />
                <h4>{place.name}</h4>
                <div className="rating">★ {place.rating}</div>
                <p>{place.description}</p>
                <button className="explore-btn">View on Map</button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="featured-destinations">
        <h3>Featured Destinations</h3>
        <div className="destination-cards">
          {featuredDestinations.map(place => (
            <div 
              key={place.id} 
              className="destination-card"
              onClick={() => {
                setSelectedPlace(place);
                if (map) {
                  map.setCenter(place.position);
                  map.setZoom(10);
                }
              }}
            >
              <img src={place.image} alt={place.name} />
              <h4>{place.name}</h4>
              <div className="rating">★ {place.rating}</div>
              <p>{place.description}</p>
              <button className="explore-btn">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMap; 