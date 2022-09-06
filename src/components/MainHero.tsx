import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';
import MainHeroImage from './MainHeroImage';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className=" w-full h-screen bg-cover bg-center">
      <div className="sm:text-center lg:text-left">
        <MainHeroImage></MainHeroImage>
        <h1 className="text-4xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl">
          <span className="block text-primary xl:inline">{mainHero.title}</span>{' '}
          <span className={`block text-secondary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-background hover:text-secondary hover:border-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={mainHero.secondaryAction.text}
              to={mainHero.secondaryAction.href}
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-tertiary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
