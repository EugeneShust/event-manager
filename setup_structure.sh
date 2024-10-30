#!/bin/bash

# Create directories
mkdir -p src/{api,assets/images,components/{common,events,auth,forms},contexts,hooks,layouts,pages,services,styles,utils}

# Create files with pattern comments
# API Module Files
echo "// Facade pattern: Provides a simplified interface to the complex logic for making HTTP requests." > src/api/fetchWithAuth.js
echo "// Facade pattern: Provides a simplified interface for HTTP requests that do not require authentication." > src/api/fetchWithoutAuth.js
echo "// Entry point for API functions, imports all functions for easy access." > src/api/index.js

# Asset directories
touch src/assets/images/.keep # Keeps image folder for static assets

# Components - Atomic Design
echo "// Atomic Design: Button component represents a basic UI atom, reusable across the application." > src/components/common/Button.js
echo "// Atomic Design: Header component for common header across pages." > src/components/common/Header.js
echo "// Atomic Design: Footer component for common footer across pages." > src/components/common/Footer.js
echo "// Atomic Design: Event component for displaying individual event details." > src/components/events/Event.js
echo "// Atomic Design: Auth form components for login and signup forms." > src/components/auth/SignInForm.js
echo "// Atomic Design: Auth form components for login and signup forms." > src/components/auth/SignUpForm.js
echo "// Atomic Design: Form component for creating new events." > src/components/forms/EventForm.js

# Contexts - Context API
echo "// Context API pattern: Provides global state and functions for authentication." > src/contexts/AuthContext.js
echo "// Context API pattern: Provides global state and functions for managing events." > src/contexts/EventContext.js

# Hooks - Custom Hooks
echo "// Custom Hook pattern: Simplifies authentication state management using the AuthContext." > src/hooks/useAuth.js
echo "// Custom Hook pattern: Provides shared logic for event state and API management." > src/hooks/useEvent.js
echo "// Custom Hook pattern: Provides a way to use and persist data in LocalStorage." > src/hooks/useLocalStorage.js

# Layouts - Layout Pattern
echo "// Layout pattern: Basic layout for all pages requiring authentication." > src/layouts/ProtectedLayout.js
echo "// Layout pattern: General layout for main content and navigation." > src/layouts/MainLayout.js
echo "// Layout pattern: Layout for authentication-related pages, such as login or signup." > src/layouts/AuthLayout.js

# Pages - Page Components
echo "// Page Component: Home page displays event listings and main content." > src/pages/HomePage.js
echo "// Page Component: Shows event details." > src/pages/EventDetailsPage.js
echo "// Page Component: Sign-up page for new users." > src/pages/SignUpPage.js
echo "// Page Component: Login page for returning users." > src/pages/SignInPage.js
echo "// Page Component: Page for creating new events." > src/pages/CreateEventPage.js
echo "// Page Component: Page shown when no route matches." > src/pages/NotFoundPage.js

# Services - Service Layer
echo "// Service Layer: AuthService manages authentication-related API requests." > src/services/authService.js
echo "// Service Layer: EventService manages API requests for events." > src/services/eventService.js
echo "// Service Layer entry point for exporting all service functions." > src/services/index.js

# Styles
echo "/* TailwindCSS configurations and global styles. */" > src/styles/tailwind.css
echo "/* Global CSS styling for the application. */" > src/styles/index.css

# Utils - Utility Functions
echo "// Utility Module: Provides helper function to format dates." > src/utils/formatDate.js
echo "// Utility Module: Helper function to get token from LocalStorage." > src/utils/getToken.js
echo "// Utility Module entry point for exporting all utility functions." > src/utils/index.js

# Root Files
echo "// Main application component. Initializes layout and routing." > src/App.js
echo "// Contains all application routes." > src/AppRoutes.js
echo "// Application entry point." > src/index.js
echo "// Configuration file for API URL and other settings." > src/config.js

echo "Project structure created successfully."
