import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminLayout from '../components/layout/AdminLayout';
import AddService from '../pages/AddService';
import Dashboard from '../pages/Dashboard';
import Services from '../pages/Services';
import PrivateRoute from '../routes/PrivateRoute'
import MyProfile from '../pages/MyProfile';
import Error from '../pages/Error';
import Booking from '../pages/Booking';
import MyOrder from '../pages/MyOrder';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <PrivateRoute><Services /></PrivateRoute>,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'booking/:id',
        element: <PrivateRoute><Booking /></PrivateRoute>,
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/user',
    element: <App />,
    errorElement: <Error/>,
    children: [
        {
            path: 'my-profile',
            element: <PrivateRoute><MyProfile /></PrivateRoute>,
        },
        {
            path: 'my-order',
            element: <PrivateRoute><MyOrder /></PrivateRoute>,
        },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    errorElement: <Error/>,
    children: [
        {
            index: true,
            element: <Dashboard />,
        },
        {
            path: 'add-service',
            element: <AddService />,
        }
    ]
  },
]);

export default routes;