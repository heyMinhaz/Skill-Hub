import Navbar from "../Pages/Home/Navbar";
import Managecard from "./Managecard";
import { useLoaderData } from "react-router-dom";

import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";


const Manage = () => {


        const data = useLoaderData();

        const [orders, setorder] = useState([]);

        const { user } = useContext(AuthContext);
        const ordercart = user?.email;

        useEffect(() => {
          const ordercartfilter = data?.filter(
            (cart) => cart.email == ordercart
          );
          setorder(ordercartfilter);
        }, [data, ordercart]);

        console.log(orders);


    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>

        <div>
        

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-w-6xl  mx-auto">
              {orders.map((order) => (
                <Managecard key={order._id} order={order}></Managecard>
              ))}
            </div>
          </div>

          <div></div>
        </div>
      </div>
    );
};

export default Manage;