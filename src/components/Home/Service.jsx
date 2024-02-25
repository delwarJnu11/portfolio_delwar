const Service = ({ service }) => {
  return (
    <div className="relative flex  flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#292172] transition-all duration-1000 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[#292172] transition-all duration-300 group-hover:bg-[#292172]">
            <img
              src={service.icon}
              className="h-10 w-10 text-white transition-all"
              alt={service.title}
            />
          </span>
          <h2 className="space-y-6 pt-5 text-lg font-semibold leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            {service.title}
          </h2>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>{service.description}</p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <button className="text-[#292172] border px-4 py-2 rounded-md transition-all duration-300 group-hover:text-white hover:bg-[#37307a]">
                Read More &rarr;
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
