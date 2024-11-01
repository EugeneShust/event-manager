import React from 'react';
import EventForm from '../components/forms/EventForm.jsx';
import { createNewEvent } from '../services';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async (formData) => {
        const data = await createNewEvent(formData);

        console.log('Form submitted:', formData);
        console.log('Created event:', data);
        navigate('/');
    };

    return (
        <div>
            <h1>Create New Event</h1>
            <EventForm onSubmit={handleFormSubmit} />
        </div>
    );
};

export { CreateEventPage };
