// Main application component. Initializes layout and routing.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './components';
import { Home } from './pages';
import { AuthProvider } from './contexts';

const router = createBrowserRouter([
    {
        path: '',
        element: (
            <AuthProvider>
                <MainLayout />
            </AuthProvider>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            //errorElement: <ErrorPage />,
            /*,
            {
              path: '/events/:id', 
              element: <EventDetailsPage />,
            },
            {
              path: '/signup',
              element: <SignUpPage />,
            },
            {
              path: '/signin',
              element: <SignInPage />,
            },
            {
              path: '/create-event',
              element: <CreateEventPage />,
            },*/
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
