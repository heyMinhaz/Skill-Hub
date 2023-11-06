

import Bannar from "./Bannar";
import Future from "./Future";
import Navbar from "./Navbar";
import OurTeam from "./OurTeam";


const Home = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
        <div>
<Bannar></Bannar>
            </div>
  

            <div>
                
<OurTeam></OurTeam>

</div>
          
            <div>
                
                <Future></Future>


</div>
         
      </div>
    );
};

export default Home;