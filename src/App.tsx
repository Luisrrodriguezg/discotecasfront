// src/App.tsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TodayEvents from './components/TodayEvents';
import FutureEvents from './components/FutureEvents';
import EventPopup from './components/EventPopup';
import MapContainer from './components/MapContainer';

const App: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [eventsForMap, setEventsForMap] = useState<any>([]); // Store events for MapContainer

    const handleEventClick = (event: any) => {
        setSelectedEvent(event);
        setShowPopup(true);
    };

    // Function to pass events from TodayEvents and FutureEvents to MapContainer
    const passEventsToMap = (events: any) => {
        setEventsForMap((prevEvents: any) => [...prevEvents, ...events]); // Merge future and today events
    };

    return (
        <div className="bg-black min-h-screen text-white">
            <NavBar />
            <main className="p-8 space-y-16">
                {/* Today Events */}
                <section id="today-events">
                    <TodayEvents onEventClick={handleEventClick} passEventsToMap={passEventsToMap} />
                </section>

                {/* Map Section */}
                <section id="map-section" className="border border-purple-600 p-6 rounded-lg shadow-lg">
                    <h2 className="text-green-400 text-3xl font-bold mb-6">Map</h2>
                    <MapContainer events={eventsForMap} />
                </section>

                {/* Future Events */}
                <section id="future-events">
                    <FutureEvents onEventClick={handleEventClick} passEventsToMap={passEventsToMap} />
                </section>

                {/* Event Popup */}
                {showPopup && selectedEvent && (
                    <EventPopup
                        flyer={selectedEvent.img}
                        name={selectedEvent.name}
                        description={`Event at ${selectedEvent.discoteca}`}
                        location={selectedEvent.discoteca}
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </main>
        </div>
    );
};

export default App;
