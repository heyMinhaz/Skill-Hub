/* eslint-disable react/no-unknown-property */

const OurTeam = () => {
  return (
    <div id="team" className="section relative pt-20 pb-8 md:pt-16 bg-white">
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* section header */}
        <header className="text-center mx-auto mb-12">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 ">
       Our Team
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
          </svg>
        </header>
        {/* end section header */}
        {/* row */}
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {/* Team Member 1 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div
              className="relative overflow-hidden bg-white  mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="relative overflow-hidden px-6">
                <img
                  src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
                  className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                  alt="title image"
                />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">
                  Joe Antonio
                </p>
                <p className="text-gray-500 leading-relaxed font-light">
                  Founder CEO
                </p>
                {/* social icon */}
                <div className="mt-2 mb-5 space-x-2">
                  <a
                    className="hover:text-blue-700"
                    aria-label="Twitter link"
                    href="#"
                  >
                    {/* Twitter SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Facebook link"
                    href="#"
                  >
                    {/* Facebook SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Instagram link"
                    href="#"
                  >
                    {/* Instagram SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Linkedin link"
                    href="#"
                  >
                    {/* Linkedin SVG */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member 1 */}
          {/* Team Member 2 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div
              className="relative overflow-hidden bg-white  mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="relative overflow-hidden px-6">
                <img
                  src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
                  className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                  alt="title image"
                />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">
                  Sarah Daeva
                </p>
                <p className="text-gray-500 leading-relaxed font-light">
                  Product Manager
                </p>
                {/* social icon */}
                <div className="mt-2 mb-5 space-x-2">
                  <a
                    className="hover:text-blue-700"
                    aria-label="Twitter link"
                    href="#"
                  >
                    {/* Twitter SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Facebook link"
                    href="#"
                  >
                    {/* Facebook SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Instagram link"
                    href="#"
                  >
                    {/* Instagram SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Linkedin link"
                    href="#"
                  >
                    {/* Linkedin SVG */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member 2 */}
          {/* Team Member 3 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div
              className="relative overflow-hidden bg-white  mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <div className="relative overflow-hidden px-6">
                <img
                  src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png"
                  className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                  alt="title image"
                />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">
                  John Doe
                </p>
                <p className="text-gray-500 leading-relaxed font-light">
                  Lead Developer
                </p>
                {/* social icon */}
                <div className="mt-2 mb-5 space-x-2">
                  <a
                    className="hover:text-blue-700"
                    aria-label="Twitter link"
                    href="#"
                  >
                    {/* Twitter SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Facebook link"
                    href="#"
                  >
                    {/* Facebook SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Instagram link"
                    href="#"
                  >
                    {/* Instagram SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Linkedin link"
                    href="#"
                  >
                    {/* Linkedin SVG */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member 3 */}
          {/* Team Member 4 */}
          <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div
              className="relative overflow-hidden bg-white  mb-12 hover-grayscale-0 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className="relative overflow-hidden px-6">
                <img
                  src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png"
                  className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                  alt="title image"
                />
              </div>
              <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">
                  Emma Watson
                </p>
                <p className="text-gray-500 leading-relaxed font-light">
                  Marketing Manager
                </p>
                {/* social icon */}
                <div className="mt-2 mb-5 space-x-2">
                  <a
                    className="hover:text-blue-700"
                    aria-label="Twitter link"
                    href="#"
                  >
                    {/* Twitter SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Facebook link"
                    href="#"
                  >
                    {/* Facebook SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Instagram link"
                    href="#"
                  >
                    {/* Instagram SVG */}
                  </a>
                  <a
                    className="hover:text-blue-700"
                    aria-label="Linkedin link"
                    href="#"
                  >
                    {/* Linkedin SVG */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member 4 */}
        </div>
        {/* end row */}
      </div>
    </div>
  );
};

export default OurTeam;
