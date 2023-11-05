/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Registration = () => {
    return (
      <div>
        <body>
          <div className="flex min-h-screen items-center justify-center">
            <div className="min-h-1/2 bg-gray-900  border border-gray-900 rounded-2xl">
              <div className="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto  flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
                <img
                  className=" h-40"
                  src="https://i.ibb.co/qYH9sBN/Np-JBy19-Y-2x.png"
                  alt=""
                />
                <h1 className="text-white text-2xl">
                  iniciar sesion en twitter
                </h1>
                <div>
                  <a className=" cursor-pointer flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 ">
                    <img
                      className="h-5 mr-2"
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                      alt=""
                    />
                    Login in with Google
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
                  className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700 "
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