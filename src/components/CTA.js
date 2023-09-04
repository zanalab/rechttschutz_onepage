import React from 'react';

const CTA = ({
  title = 'Bereit, den Unterschied zu erleben? ',
  subTitle = 'Unser Expertenteam ist bereit, Ihnen rechtlich zur Seite zu stehen.',
  callToAction1 = 'Jetzt Beratung Anfordern',
  callToAction2 = 'Mehr Über Uns Erfahren',
  link1 = '',
  link2 = '',
}) => {
  return (
    <section className="py-10 lg:py-[60px]">
      <div className="container mx-auto">
        <div className="relative z-10 overflow-hidden rounded bg-brand-orange py-12 px-8 md:p-[70px]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <span className="mb-2 text-base font-semibold text-dark font-primary">{title}</span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[28px] lg:mb-0">
                {subTitle} <br className="hidden xs:block" />
              </h2>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap lg:justify-end">
                <a
                  href={link1}
                  className="my-1 mr-4 inline-block rounded bg-white bg-opacity-[45%] py-4 px-6 text-base font-medium text-dark transition hover:bg-opacity-100 hover:text-brand-orange md:px-9 lg:px-6 xl:px-9"
                >
                  {callToAction1}
                </a>
                <a
                  href={link2}
                  className="my-1 inline-block rounded bg-white py-4 px-6 text-base font-medium text-dark transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                >
                  {callToAction2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
