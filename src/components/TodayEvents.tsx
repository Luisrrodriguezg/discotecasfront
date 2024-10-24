// src/components/TodayEvents.tsx
import React, { useEffect } from 'react';

interface TodayEventsProps {
    onEventClick: (event: any) => void;
    passEventsToMap: (events: any) => void; // New prop to pass event data to App
}

const TodayEvents: React.FC<TodayEventsProps> = ({ onEventClick, passEventsToMap }) => {
    const events = [
        { id: 1, name: 'Perreo West', discoteca: 'Dulcinea', img: 'src/assets/dulcinea.png', position: { lat: 6.2083, lng: -75.5679 } },
        { id: 2, name: 'Rayo y Tobi HOY', discoteca: 'Miranda', img: 'src/assets/miranda.jpeg', position: { lat: 6.2101, lng: -75.5701 } },
        { id: 3, name: 'Bailando con el diablo', discoteca: 'La Logia', img: 'src/assets/laLogia.jpeg', position: { lat: 6.2112, lng: -75.5689 } },
    ];

    // Pass events to MapContainer once when the component mounts
    useEffect(() => {
        passEventsToMap(events);
    }, []); // Empty dependency array to run only once

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            {events.map(event => (
                <div
                    key={event.id}
                    className="bg-purple-600 p-4 rounded-lg hover:bg-purple-700 transition cursor-pointer"
                    onClick={() => onEventClick(event)}
                >
                    <h3 className="text-white text-lg">{event.name}</h3>
                    <p className="text-gray-300">{event.discoteca}</p>
                    <img src={event.img} alt={event.discoteca} className="w-full h-32 object-cover mt-2 rounded-md" />
                </div>
            ))}
        </div>
    );
};

export default TodayEvents;
