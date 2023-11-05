import { Outlet } from "react-router-dom";
import Footer from "./Components/Pages/Footer/Footer";
import Navbar from "./Components/Pages/Home/Navbar";


const Layout = () => {
    return (
        <div>
      <Navbar></Navbar>      
<Outlet></Outlet>
<Footer></Footer>
        </div>
    );
};

export default Layout;