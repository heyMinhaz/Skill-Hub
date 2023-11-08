import { useLoaderData } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SedulCard from "./SedulCard";

const Myschedules = () => {

    const book = useLoaderData();
 
 const [orders, setorder] = useState([]);

 const { user } = useContext(AuthContext);
 const ordercart = user?.email;

 useEffect(() => {
   const ordercartfilter = book?.filter((cart) => cart.userEmail == ordercart);
   setorder(ordercartfilter);
 }, [book, ordercart]);

 console.log(orders);



    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-w-6xl  mx-auto">
          {orders.map((order) => (
            <SedulCard key={order._id} order={order}></SedulCard>
          ))}
        </div>
      
      </div>
    );
};

export default Myschedules;