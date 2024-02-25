const About = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex lg:flex justify-center items-center">
        <div className="md:w-1/2 lg:w-1/2 sm:w-full md:mx-auto">
          <div className="p-4 flex justify-center items-center">
            <img
              src="https://i.ibb.co/VHjS6P2/about-removebg-preview.png"
              alt="Your Image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 sm:w-full">
          <div className="p-4">
            <h4 className="text-lg text-[#574db8] mb-4 uppercase font-bold">
              ABOUT ME
            </h4>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa
              quisquam ipsum placeat, inventore aspernatur. Cupiditate, magni
              eveniet laborum impedit praesentium odio repudiandae repellat
              harum rerum voluptatem?
            </p>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa
              quisquam ipsum placeat, inventore aspernatur. Cupiditate, magni
              eveniet laborum impedit praesentium odio repudiandae repellat
              harum rerum voluptatem?
            </p>
            <button className="btn px-6 py-2 bg-orange-700 text-white hover:bg-orange-800">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
