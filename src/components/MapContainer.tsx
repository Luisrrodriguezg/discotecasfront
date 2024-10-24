// src/components/MapContainer.tsx
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import InfoWindowComponent from './InfoWindow.tsx';

const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 255, 0, 0.3)', // Green subtle shadow for depth
    border: '2px solid #6a0dad', // Purple border for a night-life aesthetic
};

const center = {
    lat: 6.2088, // Center the map on El Poblado, Medellín
    lng: -75.5679,
};

const mapOptions = {
    mapId: 'ee53c635f9d0620a', // Your custom map ID
    disableDefaultUI: true, // Hide default controls for a cleaner look
    zoomControl: true, // Keep zoom control
};

// Event Data for TodayEvents
const todayEvents = [
    {
        id: 1,
        name: 'Perreo West', //6.249404841877921, -75.58840043826548
        discoteca: 'Dulcinea',
        position: { lat: 6.249404841877921, lng: -75.58840043826548 }, // Lat/Long for Dulcinea
        flyer: 'src/assets/dulcinea.png', // Path to discoteca image used as marker
        description: 'An unforgettable night of dancing!',
        price: '$',
        cover: 10,
    },
    {
        id: 2,
        name: 'Rayo y Tobi HOY',
        discoteca: 'Miranda',
        position: { lat: 6.209470931345723, lng: -75.5687989888508 }, // Lat/Long for Miranda
        flyer: 'src/assets/miranda.jpeg', // Path to discoteca image used as marker
        description: 'Live music and good vibes!',
        price: '$$',
        cover: 15,
    },
    {
        id: 3,
        name: 'Bailando con el diablo',
        discoteca: 'La Logia',
        position: { lat: 6.249764163514027, lng: -75.58853336273613 }, // Lat/Long for La Logia
        flyer: 'src/assets/laLogia.jpeg', // Path to discoteca image used as marker
        description: 'Experience the wild side of the city!',
        price: '$$$',
        cover: 20,
    },
];

const MapContainer: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<any>(null); // Track selected marker
    const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);

    // Ensure Google Maps API is loaded before rendering
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (window.google && window.google.maps) {
                setIsGoogleMapsLoaded(true);
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-black p-4 rounded-lg border border-purple-600">
            <LoadScript googleMapsApiKey="AIzaSyDLzZMfEaVuDdL73BDqlleX9wFGQaEJ2EI">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={mapOptions}
                >
                    {isGoogleMapsLoaded &&
                        todayEvents.map((event) => (
                            <Marker
                                key={event.id}
                                position={event.position}
                                icon={{
                                    url: event.flyer, // Use the discoteca flyer as the marker icon
                                    scaledSize: new window.google.maps.Size(40, 40), // Marker size
                                }}
                                onClick={() => setSelectedEvent(event)} // Open InfoWindow on marker click
                            />
                        ))}

                    {selectedEvent && (
                        <InfoWindowComponent
                            discoteca={selectedEvent.discoteca}
                            name={selectedEvent.name}
                            description={selectedEvent.description}
                            price={selectedEvent.price}
                            cover={selectedEvent.cover}
                            flyer={selectedEvent.flyer} // Add event flyer
                            onClose={() => setSelectedEvent(null)}
                            position={selectedEvent.position}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MapContainer;
