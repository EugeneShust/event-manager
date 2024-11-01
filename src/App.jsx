// Main application component. Initializes layout and routing.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './components';
import { HomePage, LoginPage, SignUpPage, ProfilePage } from './pages';
import { AuthProvider } from './contexts';
import { CreateEventPage } from './pages/CreateEventPage';

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
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/create-event',
        element: <CreateEventPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
