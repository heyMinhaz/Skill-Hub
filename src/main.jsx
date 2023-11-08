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
import Myservices from './Components/My Servicies/Myservices';
import Manage from './Components/Manage/Manage';
import Myschedules from './Components/My schedules/Myschedules';
import Update from './Components/Manage/Update';




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
        path: "/myservices",
        element: (
          <PrivateRoute>
            <Myservices></Myservices>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/services"),
      },
      {
        path: "/manage",
        element: (
          <PrivateRoute>
            <Manage></Manage>
          </PrivateRoute>
        ),

        loader: () => fetch("http://localhost:5001/services"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/services/${params.id}`),
      },
      {
        path: "/myschedules",
        element: (
          <PrivateRoute>
            <Myschedules></Myschedules>
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
