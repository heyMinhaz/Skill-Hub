/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const Registration = () => {
    return (
      <div>
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10 ">
          <div className="flex shadow-md ">
            <div
              className="flex flex-wrap content-center justify-center rounded-xl bg-white 
               p-10 "
            >
              <div className=" ">
                <h2 className="text-gray-600 text-3xl">
                  {" "}
                  Please enter your details
                </h2>

                <form className="mt-4">
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Enter your Name"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Photo Url
                    </label>
                    <input
                      type="text"
                      name="photourl"
                      placeholder="Enter your Photo Url"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="*****"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>

                  <div className="mb-3">
                    <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                      Register
                    </button>
                    <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                      <img
                        className="w-5 mr-2"
                        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                        alt="Google"
                      />
                      Register with Google
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <span className="text-xs text-gray-400 font-semibold">
                    You have account?
                  </span>
                  <NavLink to="/login">
                    {" "}
                    <a
                      href="#"
                      className="text-xs font-semibold text-purple-700"
                    >
                      Login
                    </a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;