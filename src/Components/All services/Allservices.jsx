/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Navbar from "../Pages/Home/Navbar";
// import HomeCard from "./HomeCard";



const Allservices = () => {


     
      const [search, setsearch] = useState("");

      const searchQuery = search.toLowerCase();

    const [services, setServices] = useState([]);
   
    useEffect(() => {
        
        fetch("https://skill-iota.vercel.app/services")
    .then(res => res.json())
    .then(data=> setServices(data))

   

      

    },[])


    return (
      <div>
        <Navbar></Navbar>

        <div>
          <div className="pt-5 flex justify-center items-center">
            <div className="container mx-auto bg-indigo-500 rounded-lg p-14">
              <form>
                <h1 className="text-center font-bold text-white text-4xl">
                  Find a perfect course for you
                </h1>
                <p className="mx-auto font-normal text-sm my-6 max-w-lg">
                  Enter your selected course name If you're looking for courses
                  related to artificial intelligence, machine learning, or
                  natural language processing.
                </p>
                <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                  <input
                    onChange={(e) => setsearch(e.target.value)}
                    className="text-base text-gray-400 flex-grow outline-none px-2 "
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-w-6xl  mx-auto">
          {services
            .filter((item) => {
              return item.serviceName.toLowerCase().includes(searchQuery);
            })
            .map((food) => (
              <ServiceCard key={food._id} service={food}>
                {" "}
              </ServiceCard>
            ))}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sliceServices.map((sliceService) => (
            <HomeCard key={sliceService._id} service={sliceService}></HomeCard>
          ))}
        </div> */}
      </div>
    );
};

export default Allservices;