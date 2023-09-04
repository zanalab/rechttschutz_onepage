import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-3 text-5xl font-bold leading-wide text-dark font-primary">
                Ihr Partner <br />
                im Rechtsbereich <br />
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color">
                Schützen Sie Ihre Rechte mit professionellem Rechtschutz
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-brand-orange py-2 px-8 text-center text-base font-semibold text-dark hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                     Jetzt Beraten Lassen
                  </a>
                </li>
              </ul>
              <div className="clients pt-16">
                <h6 className="mb-2 flex items-center text-xs font-normal text-body-color">
                  Some Of Our Clients
                  <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                </h6>
                <div className="flex items-center">
                  <div className="mr-4 w-full py-3">
                    <Image src="./images/partners/company_one.svg"
                    alt="Fake Company One" width={100} height={40}/>
                  </div>
                  <div className="mr-4 w-full py-3">
                  <Image src="./images/partners/company_two.svg"
                    alt="Fake Company Two" width={100} height={40}/>
                  </div>
                  <div className="mr-4 w-full py-3">
                  <Image src="./images/partners/company_three.svg"
                    alt="Fake Company Three" width={100} height={40}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <Image
                  src="/images/hero.webp"
                  height={300}
                  width={500}
                  alt="Hero Image"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">{/* SVG content here */}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
