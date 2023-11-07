/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeCard = ({ sliceData }) => {
  const {
  _id,
    serviceName,
    servicephotoURL,
    description,
    price,
    serviceArea,
    serviceProviderName,
    serviceProviderPhoto,
  } = sliceData;

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
                <Link to={`/services/${_id}`}>
                  {" "}
                  <button
                    href=""
                    className=" font-bold btn btn-sm  hover:bg-gradient-to-r from-purple-300 to-blue-600 hover:text-white bg-gray-300 "
                  >
                    Details
                  </button>
                </Link>
              </div>
              <div className=" flex">
                {" "}
                <svg
                  className="mr-3 text-white dark:text-gray-900"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.66699 4.83333V4.84166"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.333 11.5V11.5083"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                <p className="!mb-0 text-sm mr-4 text-brand-500">
                  Location : {serviceArea}
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default HomeCard;
