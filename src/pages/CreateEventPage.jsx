import React from 'react';
import EventForm from '../forms/EventForm';

const CreateEventPage = () => {
  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Create New Event</h1>
      <EventForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateEventPage;