/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Mycard from "./Mycard";


const Myservices = () => {

    const data = useLoaderData();


    
    const [orders, setorder] = useState([]);
    
    const { user } = useContext(AuthContext);
    const ordercart = user?.email;

    useEffect(() => {
      const ordercartfilter = data?.filter((cart) => cart.email == ordercart);
      setorder(ordercartfilter);
    }, [data, ordercart]);
    
       console.log(orders);

    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-w-6xl  mx-auto">
            {orders.map((order) => (
              <Mycard key={order._id} order={order}></Mycard>
            ))}
          </div>
        </div>

        <div></div>
      </div>
    );
};

export default Myservices;