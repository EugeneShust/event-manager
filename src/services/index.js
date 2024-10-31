// Service Layer entry point for exporting all service functions.
export { registerUser, loginUser } from './authService';
export {
    getAllEvents,
    getSingleEvent,
    getFutureEvents,
    createNewEvent,
    updateEvent,
    deleteEvent,
} from './eventService';
