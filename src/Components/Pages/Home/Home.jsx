/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */



import { Link, useActionData, useLoaderData } from "react-router-dom";
import ServiceCard from "../../All services/ServiceCard";
import Bannar from "./Bannar";
import Future from "./Future";

import Navbar from "./Navbar";
import OurTeam from "./OurTeam";
import HomeCard from "../../All services/HomeCard";

const Home = () => {

 


    const  result  = useLoaderData();
    console.log(result);
    const sliceDatas = result.slice(0,6)

    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Bannar></Bannar>
        </div>
        <div className="mt-20">
          <h1 className=" text-4xl text-center font-bold ">
            Our Popular Services
          </h1>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
          </svg>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-w-6xl mx-auto">
            {sliceDatas.map((sliceData) => (
              <HomeCard key={sliceData._id} sliceData={sliceData}></HomeCard>
            ))}
          </div>
          <Link to="/allservice">
            {" "}
            <div className="flex justify-center mt-5">
              <p className=" btn btn-outline hover:bg-gradient-to-r from-purple-300 to-blue-600 py-4 px-8 text-black  ">
                Show All
              </p>
            </div>
          </Link>
        </div>
        <div>
          <OurTeam></OurTeam>
        </div>
        <div className=" ">
          <Future></Future>
        </div>
      </div>
    );
};

export default Home;