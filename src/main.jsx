import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Error from './Components/Error/Error';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Addservice from './Components/Addservice/Addservice';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Components/routes/PrivateRoute';
import Contact from './Components/Contact/Contact';
import Allservices from './Components/All services/Allservices';
import CardDetails from './Components/All services/CardDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5001/services"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/services/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/services/${params.id}`),
      },
      
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <Addservice></Addservice>
          </PrivateRoute>
        ),
      },
      {
        path: "/allservice",
        element: (
          <PrivateRoute>
            <Allservices></Allservices>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
