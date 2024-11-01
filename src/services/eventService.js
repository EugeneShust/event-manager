// Service Layer: EventService manages API requests for events.

import { date } from '../utils';
import { fetchWithAuth, fetchWithoutAuth } from '../api/index';

// Get all events

async function getAllEvents() {
    return await fetchWithoutAuth('/events', {
        method: 'GET',
        body: JSON.stringify({}),
    });
}

// Get event by id

const eventId = integer;

async function getSingleEvent() {
    return await fetchWithoutAuth(`/events/${eventId}`, {
        method: 'GET',
        body: JSON.stringify({}),
    });
}

// Get upcoming events

async function getFutureEvents() {
    return await fetchWithoutAuth('/upcoming', {
        method: 'GET',
        body: JSON.stringify({}),
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

async function updateEvent() {
    return await fetchWithAuth(`/events/${eventId}`, {
        method: 'PUT',
        body: JSON.stringify(eventData),
    });
}

// Delete event

async function deleteEvent() {
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
