import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Error from './Components/Error/Error';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';



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

    ]
      

  }




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
