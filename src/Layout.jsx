import { Outlet } from "react-router-dom";
import Footer from "./Components/Pages/Footer/Footer";
import { Toaster } from "react-hot-toast";



const Layout = () => {
    return (
        <div>
     <Toaster></Toaster>
<Outlet></Outlet>
<Footer></Footer>
        </div>
    );
};

export default Layout;