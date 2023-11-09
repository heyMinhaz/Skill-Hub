/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Pages/Home/Navbar";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CardDetails = () => {
  const { user, logOut } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    email,
    serviceName,
    servicephotoURL,
    description,
    price,
    serviceArea,
    serviceProviderName,
    serviceProviderPhoto,
  } = data;

  const handelAdd = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const location = form.get("location");
    const servicephotoURL = form.get("servicephotoURL");
    const serviceName = form.get("serviceName");
    const serviceProviderName = form.get("serviceProviderName");
    const serviceArea = form.get("serviceArea");
    const price = form.get("price");

    const date = form.get("date");
    const userEmail = form.get("userEmail");
    console.log(
      location,
      servicephotoURL,
      serviceName,
      serviceProviderName,
      serviceArea,
      price,
      date,
      userEmail
    );
    const newService = {
      location,
      servicephotoURL,
      serviceName,
      serviceProviderName,
      serviceArea,
      price,
      date,
      userEmail
    };
    console.log(newService);

    fetch("https://skill-iota.vercel.app/addservices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          e.target.reset();
          // eslint-disable-next-line no-undef
         
          toast.success("Successfully Booked");
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="md:flex items-start justify-center py-12  md:px-6 px-4">
        <div>
          <img className=" w-[500px]  rounded-lg " src={servicephotoURL} />
        </div>

        <div className=" lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-900 mt-2">
              {serviceName}
            </h1>
            <p className="text-sm leading-none text-gray-600  "></p>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-900 ">
              {" "}
              Service Provider Name & Photo :{" "}
            </p>
            <div className="flex items-center  justify-center">
              {serviceProviderName}{" "}
              <img
                className=" ml-5 h-10 rounded-full leading-none  "
                src={serviceProviderPhoto}
              ></img>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-900 ">Price</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600  mr-3">
                {price}$
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-900 ">Service Area</p>
            <div className="flex items-center justify-center">
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
              <p className="text-sm leading-none text-gray-900 ">
                {serviceArea}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-900 ">Price</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600  mr-3">
                {price}$
              </p>
            </div>
          </div>

          <button
            className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none  btn btn-outline hover:bg-gradient-to-r from-purple-300 to-blue-600 px-8 "
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Book Now
          </button>

          <form onSubmit={handelAdd} method="dailog">
            <dialog onSubmit={handelAdd} id="my_modal_1" className="modal">
              <div className="modal-box">
                <label>
                  {" "}
                  <span className="label-text">Service Name</span> <br />
                  <input
                    type="text"
                    name="serviceName"
                    defaultValue={serviceName}
                    readOnly
                    placeholder="Service Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <br />{" "}
                <label>
                  {" "}
                  <span className="label-text">Service Photo</span> <br />
                  <input
                    type="text"
                    name="servicephotoURL"
                    defaultValue={servicephotoURL}
                    readOnly
                    placeholder="Service Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>{" "}
                <br />
                <label>
                  {" "}
                  <span className="label-text">Service Provider Mail</span>{" "}
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    readOnly
                    placeholder="Service Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <br />{" "}
                <label>
                  {" "}
                  <span className="label-text">User Mail</span> <br />
                  <input
                    type="email"
                    name="userEmail"
                    defaultValue={user?.email}
                    readOnly
                    placeholder="Service Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <br />{" "}
                <label>
                  {" "}
                  <span className="label-text">Service Taking Date</span> <br />
                  <input
                    type="date"
                    name="date"
                    placeholder="Service Taking Date"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <br />{" "}
                <label>
                  {" "}
                  <span className="label-text">Your Location</span> <br />
                  <input
                    type="text"
                    name="location"
                    placeholder="Your Location"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <br />{" "}
                <label>
                  {" "}
                  <span className="label-text">Price</span> <br />
                  <input
                    type="text"
                    name="Price"
                    readOnly
                    defaultValue={price}
                    placeholder="Price"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <div className="modal-action">
       {/* if there is a button in form, it will close the modal */} 
                  <button className="btn btn-outline hover:bg-gradient-to-r from-purple-300 to-blue-600 py-4 px-8 text-indigo-600">
                    Purchase this Service
                  </button>
                </div>
              </div>
            </dialog>{" "}
          </form>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center">Description</h1>
        <p className=" text-justify   text-gray-600 p-10  mt-3 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
