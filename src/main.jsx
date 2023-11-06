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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      
      {
  
        path: "/",
        element:<Home></Home>
        

},
      {
  
        path: "/login",
        element:<Login></Login>
        

},
      {
  
        path: "/register",
        element:<Registration></Registration>
        

},
      {
  
        path: "/addservice",
        element:<PrivateRoute><Addservice></Addservice></PrivateRoute>
        

},

    ]
      

  }




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
