/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */



import { useActionData, useLoaderData } from "react-router-dom";
import ServiceCard from "../../All services/ServiceCard";
import Bannar from "./Bannar";
import Future from "./Future";

import Navbar from "./Navbar";
import OurTeam from "./OurTeam";

const Home = () => {

 


    const  result  = useLoaderData();
    console.log(result);
    // const sliceDatas = result.slice(0,5)

    return (
      <div>
    
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Bannar></Bannar>
        </div>
        <div>
                <div>
                    
                  
            {/* {sliceDatas.map((sliceData) => (
              <ServiceCard key={sliceData._id} sliceData={sliceData}></ServiceCard>
            ))} */}
          </div>
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