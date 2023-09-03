"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="-mx-3 flex items-center sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image
                    src="/images/about/about_one.webp"
                    alt="about-one"
                    width={400}
                    height={800}
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/images/about/about_two.webp"
                      alt="about-two"
                      width={400}
                      height={800}
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/images/about/about_three.webp"
                      alt="about-three"
                      width={400}
                      height={800}
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="mb-2 block text-lg font-semibold text-black">Über Uns</span>
              <h2 className="mb-8 text-8xl font-bold text-dark sm:text-6xl">
                Mehr als nur Rechtschutz.
                <br />
                Ein Partner an Ihrer Seite.
              </h2>
              <p className="mb-8 text-base text-body-color">
                Seit 2005 bieten wir bei Müller Rechtschutz qualitativ hochwertigen Rechtsschutz für
                Einzelpersonen und Unternehmen. Wir glauben daran, dass jeder das Recht auf Zugang
                zu qualifizierter rechtlicher Unterstützung hat, unabhängig von den Umständen.
              </p>
              <p className="mb-12 text-base text-body-color">
                Unsere engagierten und erfahrenen Anwälte setzen sich leidenschaftlich für die
                Rechte unserer Mandanten ein. Wir sind bestrebt, Ihnen nicht nur rechtliche Hilfe zu
                bieten, sondern auch einen vertrauenswürdigen Partner an Ihrer Seite zu sein, der
                Sie durch den komplexen Dschungel des Rechtssystems führt.
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-black py-2 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Lernen Sie unser Team kennen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
