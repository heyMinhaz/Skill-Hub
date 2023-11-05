
const Bannar = () => {
    return (
      <div>
        <div
          className="  bg-cover bg-center h-[80vh] text-white py-56 px-10 object-fill"
          style={{
            backgroundImage:
                  "url(https://i.ibb.co/tCq0bXg/WPE-e-Book-WPFor-LMS-Header-1200x628-v01-cleanup-overlay-1.png)",
              
          }}
        >
          <div className="md:w-1/2 ">
            <p className="font-bold text-sm uppercase">Grow your future &</p>
            <p className="text-6xl font-bold ">Grow Your Skill</p>
            <p className="text-4xl mb-10 font-bold ">With Us</p>
            <a
              href="#"
              className="mr-3 bg-gradient-to-r from-purple-300 to-blue-600 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
            >
              Contact us
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-purple-300 to-blue-600 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                    >
                        Service
                        
            </a>
          </div>
        </div>
      </div>
    );
};

export default Bannar;