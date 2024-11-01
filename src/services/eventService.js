// Service Layer: EventService manages API requests for events.

import { fetchWithAuth, fetchWithoutAuth } from '../api/index';

// Get all events

async function getAllEvents() {
    return await fetchWithoutAuth('/events', {
        method: 'GET',
    });
}

// Get event by id

async function getSingleEvent(eventId) {
    return await fetchWithoutAuth(`/events/${eventId}`, {
        method: 'GET',
    });
}

// Get upcoming events

async function getFutureEvents() {
    return await fetchWithoutAuth('/upcoming', {
        method: 'GET',
    });
}

// Create new event

async function createNewEvent(eventData) {
    return await fetchWithAuth('/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
    });
}
// Update existing event

async function updateEvent(eventData) {
    return await fetchWithAuth(`/events/${eventId}`, {
        method: 'PUT',
        body: JSON.stringify(eventData),
    });
}

// Delete event

async function deleteEvent(eventId) {
    return await fetchWithAuth(`/events/${eventId}`, { method: 'DELETE' });
}

export {
    getAllEvents,
    getSingleEvent,
    getFutureEvents,
    createNewEvent,
    updateEvent,
    deleteEvent,
};
