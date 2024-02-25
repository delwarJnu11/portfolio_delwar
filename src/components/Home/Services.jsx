import { services } from "./../../data/services";
import Service from "./Service";

const Services = () => {
  return (
    <div className="container mx-auto my-10">
      <h4 className="text-lg text-[#574db8] mb-4 uppercase font-bold text-center">
        Services
      </h4>
      <p className="md:w-1/2 mx-auto text-base my-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa beatae
        tenetur doloribus quisquam omnis molestias earum dolorum fugiat id
        cumque.
      </p>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        {services?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
export default Services;
