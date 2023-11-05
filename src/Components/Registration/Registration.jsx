/* eslint-disable react/no-unescaped-entities */

import { Link, NavLink } from "react-router-dom";

const Registration = () => {
  const handelRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);
  };

  return (
    <div>
      <body>
        <div className="flex  items-center justify-center lg:p-20 p-5 ">
          <div className="min-h-1/2 bg-gray-900  border border-gray-900 rounded-2xl">
            <div className="flex flex-row mx-auto">
              <button
                type="button"
                className="  text-white  border-gray-100 py-2 hover:text-white px-3"
              >
                <div className="flex flex-row align-middle mr-5">
                  <svg
                    className="w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <NavLink to="/">
                    {" "}
                    <p className="ml-2">Back</p>
                  </NavLink>
                </div>
              </button>
            </div>

            <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
              <img
                className=" h-40"
                src="https://i.ibb.co/qYH9sBN/Np-JBy19-Y-2x.png"
                alt=""
              />
              <h1 className="text-white text-2xl">Register For your Future</h1>
              <div>
                <a
                  className=" border-white border px-10 py-3  flex items-center justify-center w-full rounded-full   mb-6 text-sm font-medium btn btn-outline btn-info
                  
                  "
                >
                  <img
                    className="h-5 mr-2"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                    alt=""
                  />
                  <p className=" "> Login in with Google</p>
                </a>
              </div>
              <input
                className="w-full p-2 bg-gray-900 rounded-md  border border-gray-700 focus:border-blue-700"
                placeholder="Name"
                type="text"
                name="name"
                id=""
              />
              <input
                className="w-full p-2 bg-gray-900 rounded-md border border-gray-700 "
                placeholder="Email*"
                type="email"
                name="email"
                id=""
              />
              <input
                className="w-full p-2 bg-gray-900 rounded-md border border-gray-700 "
                placeholder="Photo Url*"
                type="text"
                name="photourl"
                id=""
                          />
                          
              <input
                className="w-full p-2 bg-gray-900 rounded-md border border-gray-700 "
                placeholder="password*"
                type="password"
                name="password"
                id=""
              />
              <input
                className="w-full p-2 btn btn-outline btn-info rounded-full font-bold text-gray-900 border border-gray-700 "
                type="submit"
                name="submit"
                id=""
              />
              <p>
                You Have Account?
                <Link to="/login">
                  {" "}
                  <a className="font-semibold text-sky-700" href="">
                    Login
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Registration;
