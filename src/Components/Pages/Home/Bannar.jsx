
const Bannar = () => {
    return (
      <div>
        <div
          className="bg-cover bg-center h-[80vh] text-white py-56 px-10 object-fill"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/hFVgPgw/WPE-e-Book-WPFor-LMS-Header-1200x628-v01-cleanup.png)",
          }}
        >
          <div className="md:w-1/2">
            <p className="font-bold text-sm uppercase">Services</p>
            <p className="text-3xl font-bold">Multimedia products</p>
            <p className="text-2xl mb-10 leading-none">
              Attractive designs for your brand
            </p>
            <a
              href="#"
              className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    );
};

export default Bannar;