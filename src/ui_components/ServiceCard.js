const ServiceCard = ({ title, description, IconComponent }) => (
  <div className="md:w-1/2 lg:w-1/3 bg-black text-white">
    <div className="h-20">
      <div className="">
        <IconComponent size={30} />
      </div>
      <h4 className="mb-3 text-xl font-semibold text-white">{title}</h4>
      <p className="text-body-color">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
