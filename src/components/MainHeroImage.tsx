import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHero.img}
        alt="Hex sound system"
      />
    </div>
  );
};

export default MainHeroImage;
