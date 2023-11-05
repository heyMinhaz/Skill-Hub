import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar bg-base-100 lg:-mt-8 font-poppins ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">
                  {" "}
                  <a>Home</a>
                </NavLink>
              </li>
              <li>
                <a>Services</a>
              </li>

              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>My services</a>
                  </li>
                  <li>
                    <a>Add services</a>
                  </li>
                  <li>
                    <a>My schedules</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img
              className=" lg:h-32  "
              src="https://i.ibb.co/brKqBQs/download-removebg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">
                {" "}
                <a>Home</a>
              </NavLink>
            </li>

            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2">
                  <li>
                    <a>My services</a>
                  </li>
                  <li>
                    <a>Add services</a>
                  </li>
                  <li>
                    <a>My schedules</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-6">
          <div>
            <div className=" m-4 flex items-center shadow-sm rounded-3xl px-2 h-9 border-gray-200 border">
              <p className="hidden sm:block ">Minhaz</p>
              <label tabIndex={0} className="btn btn-ghost  btn-circle avatar">
                <div className="w-7 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
            </div>
          </div>
       <Link to="/login">    <button className=" relative inline-flex items-center justify-center p-0.5 mb- mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-7 py-2   transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Login
            </span>
          </button></Link>   
        </div>
      </div>
    );
};

export default Navbar;