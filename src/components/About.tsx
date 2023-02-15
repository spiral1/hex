import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const [item] = about.items;

  return (
    <main className=" w-full h-screen ">
      <div
        id="about"
        className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={logo} alt={companyName} className="w-16 h-16" />
          </div>
          <div className={`flex flex-wrap`}>
            <div className={` sm:w-1/2 p-6 mt-20`}>
              <h3
                className={`text-3xl text-primary font-bold text-center leading-none mb-3`}
              >
                {item?.title}
              </h3>
              <p className={`text-secondary text-justify`}>
                {item?.description}
              </p>
              <ul className="ml-3 mt-5 text-secondary list-disc marker:text-primary">
                <li>{item?.firstBulletPoint}</li>
                <li>{item?.secondBulletPoint}</li>
                <li>{item?.thirdBulletPoint}</li>
                <li>{item?.fourthBulletPoint}</li>
              </ul>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item?.primaryAction.text}
                    to={item?.primaryAction.href}
                    href={item?.primaryAction.href}
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-background hover:text-secondary hover:border-primary md:py-4 md:text-lg md:px-10`}
                  >
                    {item?.primaryAction.text}
                  </Link>
                </div>
              </div>
            </div>

            <div className={`w-full sm:w-1/2 p-6`}>
              <img className="h-6/6" src={item?.img} alt={item?.title} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
