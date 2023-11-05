import { Outlet } from "react-router-dom";
import Footer from "./Components/Pages/Footer/Footer";



const Layout = () => {
    return (
        <div>
     
<Outlet></Outlet>
<Footer></Footer>
        </div>
    );
};

export default Layout;