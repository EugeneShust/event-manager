// Service Layer: EventService manages API requests for events.

import { date } from '../utils';

// Get events from API

const allEventsUrl = 'https://events-api-on1o.onrender.com/api/events';

async function getAllEvents() {
    try {
        const response = fetch(allEventsUrl);
        if (!response) throw new Error('Could not fetch all events');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Get event by id

const eventId = integer;
const singleEventUrl = `https://events-api-on1o.onrender.com/api/events/api/events/${eventId}`;

async function getSingleEvent() {
    try {
        const response = fetch(singleEventUrl);
        if (!response) throw new Error('Could not fetch the requested event');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Get upcoming events

const futureEventsUrl =
    'https://events-api-on1o.onrender.com/api/events/upcoming';

async function getFutureEvents() {
    try {
        const response = fetch(futureEventsUrl);
        if (!response) throw new Error('Could not fetch upcoming events');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Create new event

async function createNewEvent() {
    try {
        const response = await fetch(allEventsUrl, {
            method: 'POST',
            body: JSON.stringify({
                title: '',
                description: '',
                date: date(),
                location: '',
            }),
        });
        if (!response) throw new Error('The event could not be created');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Update existing event

async function updateEvent() {
    try {
        const response = fetch(singleEventUrl, {
            method: 'PUT',
            body: JSON.stringify({
                title: '',
                description: '',
                date: date(),
                location: '',
            }),
        });
        if (!response) throw new Error('The event could not be updated');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Delete event

async function deleteEvent() {
    try {
        const response = fetch(singleEventUrl, {
            method: 'DELETE',
        });
        if (!response) throw new Error('The event could not be deleted');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllEvents,
    getSingleEvent,
    getFutureEvents,
    createNewEvent,
    updateEvent,
    deleteEvent,
};
