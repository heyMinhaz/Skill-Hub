/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ sliceService }) => {
  const {
    service_id,
    serviceName,
    servicephotoURL,
    description,
    price,
    serviceArea,
    serviceProviderName,
    serviceProviderPhoto,
  } = sliceService;

  return (
    <div>
      <body>
        <div className="flex flex-col justify-center items-center ">
          <div className="!z-5 relative flex flex-col rounded-[20px] py-10 max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full   undefined">
            <div className="h-full w-full">
              <div className="relative w-full ">
                <img
                  src={servicephotoURL}
                  className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  alt=""
                />
                <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                  <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                <div className="mb-2">
                  <p className="text-lg font-bold text-navy-700">
                    {serviceName}
                  </p>
                  <small className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                    {description.length > 100 ? (
                      <p className="mt-2 text-sm">
                        {description.slice(0, 100)}
                        <Link to={``} className="link link-primary font-bold">
                          {" "}
                          Read More...
                        </Link>
                      </p>
                    ) : (
                      <p>{description}</p>
                    )}
                  </small>
                </div>
                <div className="flex flex-row-reverse md:mt-2 lg:mt-0  m-4 items-center  ">
                  <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full  text-xs  ">
                    <p className=" mr-2 font-bold">{serviceProviderName}</p>
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={serviceProviderPhoto}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between md:items-center lg:justify-between ">
                <div className="flex">
                  <p className="!mb-0 text-sm font-bold text-brand-500">
                    Price : ${price}
                  </p>
                </div>
                <button
                  href=""
                  className=" font-bold btn btn-sm  hover:bg-gradient-to-r from-purple-300 to-blue-600 hover:text-white bg-gray-300 "
                >
                  Details
                </button>
              </div>
              <p className="!mb-0 text-sm mr-4 text-brand-500">
                Location : {serviceArea}
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default HomeCard;
