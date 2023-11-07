/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Bannar = () => {
    return (
      <div>
        <div
          className="  bg-cover bg-center  text-white py-56 px-10 object-fill"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/tCq0bXg/WPE-e-Book-WPFor-LMS-Header-1200x628-v01-cleanup-overlay-1.png)",
          }}
        >
          <div className="md:w-1/2 ">
            <p className="text-6xl font-bold ">Grow Your Skill</p>
            <p className="text-4xl mb-5  font-bold ">With Us</p>
            <p className=" text-sm mb-10 uppercase">
              Skill Hub is an offlineJ platform designed to connect learners with
              a diverse range of skills and expertise. Whether you're looking to
              acquire new skills, expand your knowledge in a specific field, or
              seek professional guidance, Skill Hub offers a dynamic community
              of experienced instructors and experts.
            </p>
            <Link to="/contact">
              {" "}
              <a className="mr-4  bg-gradient-to-r from-purple-300 to-blue-600 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                Contact us
              </a>
            </Link>

            <Link to="/allservice" >
              {" "}
              <button className="">
                {" "}
                <a
                  href="#"
                  className="btn btn-outline hover:bg-gradient-to-r from-purple-300 to-blue-600 py-4 px-8 text-white "
                >
                  Service
                </a>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Bannar;