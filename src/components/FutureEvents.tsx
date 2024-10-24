// src/components/FutureEvents.tsx
import React, { useEffect } from 'react';

interface FutureEventsProps {
    onEventClick: (event: any) => void;
    passEventsToMap: (events: any) => void;
}

const FutureEvents: React.FC<FutureEventsProps> = ({ onEventClick, passEventsToMap }) => {
    const futureEvents = [
        { id: 1, name: 'Electro Fest', discoteca: 'Dulcinea', img: 'src/assets/dulcinea.png', position: { lat: 6.2083, lng: -75.5679 } },
        { id: 2, name: 'Techno Vibes', discoteca: 'Miranda', img: 'src/assets/miranda.jpeg', position: { lat: 6.2101, lng: -75.5701 } },
        { id: 3, name: 'Halloween Party', discoteca: 'La Logia', img: 'src/assets/laLogia.jpeg', position: { lat: 6.2112, lng: -75.5689 } },
    ];

    useEffect(() => {
        passEventsToMap(futureEvents);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            {futureEvents.map(event => (
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

export default FutureEvents;
