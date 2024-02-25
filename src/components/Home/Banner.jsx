const Banner = () => {
  return (
    <>
      <div className="">
        <div className="md:flex lg:flex justify-center items-center">
          <div className="md:w-1/2 lg:w-1/2 sm:w-full">
            <div className="p-4 md:ml-20">
              <h4 className="text-lg text-[#ec5b53] space-y-4">
                Get Every Single Solution
              </h4>
              <h2 className="text-3xl text-black font-bold md:mt-4 md:mb-4">
                React Developer <br /> I'm{" "}
                <span className="text-[#ec5b53] text-4xl">Delwar Hossain</span>
              </h2>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                ipsa quisquam ipsum placeat, inventore aspernatur. Cupiditate,
                magni eveniet laborum impedit praesentium odio repudiandae
                repellat harum rerum voluptatem?
              </p>
              <button className="btn px-6 py-2 bg-orange-700 text-white hover:bg-orange-800">
                Hire Me
              </button>

              <button className="btn px-6 py-2 bg-cyan-700 text-white hover:bg-cyan-800 mx-4">
                Download CV
              </button>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2 sm:w-full">
            <div className="p-4">
              <img
                src="https://i.ibb.co/Tcznscx/image.jpg"
                alt="Your Image"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
