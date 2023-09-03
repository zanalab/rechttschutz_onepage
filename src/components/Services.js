import ServiceCard from '@/ui_components/ServiceCard';

import { FaPaintBrush, FaCss3Alt, FaPuzzlePiece } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Refreshing Design',
      description:
        'We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
      icon: FaPaintBrush,
    },
    {
      title: 'Based on Tailwind CSS',
      description:
        'We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
      icon: FaCss3Alt,
    },
    {
      title: '100+ Components',
      description:
        'We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.',
      icon: FaPuzzlePiece,
    },
  ];

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">Our Services</span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap sm:flex-wrap md:flex-nowrap">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              IconComponent={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
