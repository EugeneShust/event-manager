import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components';
import { Home } from './pages';

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
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
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
