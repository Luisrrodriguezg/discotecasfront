// src/components/EventBox.tsx
import React from 'react';

interface Event {
    id: number;
    name: string;
    discoteca: string;
    img: string;
}

const EventBox: React.FC<{ event: Event }> = ({ event }) => {
    return (
        <div className="bg-black border-2 border-purple-500 rounded-lg p-4 hover:bg-purple-500 transition duration-300">
            <h3 className="text-green-400 font-bold">{event.name}</h3>
            <img src={event.img} alt={event.discoteca} className="w-full h-40 object-cover mt-2 mb-2" />
            <p className="text-white">{event.discoteca}</p>
        </div>
    );
};

export default EventBox;
