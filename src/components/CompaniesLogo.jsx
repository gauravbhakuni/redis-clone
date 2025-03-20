import React from 'react';

const CompaniesLogo = () => {
  const companyIcons = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
      alt: 'IBM Logo',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo.svg/2560px-Mercedes-Benz_Logo.svg.png',
      alt: 'Mercedes-Benz Logo',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
      alt: 'Uber Logo',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/JetBlue_Airways_logo.svg/2560px-JetBlue_Airways_logo.svg.png',
      alt: 'jetBlue Logo',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Capital_One_logo.svg/2560px-Capital_One_logo.svg.png',
      alt: 'Capital One Logo',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Dick%27s_Sporting_Goods_logo.svg/2560px-Dick%27s_Sporting_Goods_logo.svg.png',
      alt: "DICK'S Sporting Goods Logo",
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/SiriusXM_logo.svg/2560px-SiriusXM_logo.svg.png',
      alt: 'SiriusXM Logo',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Unity_Technologies_logo.svg/2560px-Unity_Technologies_logo.svg.png',
      alt: 'Unity Logo',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Fiverr_logo.svg/2560px-Fiverr_logo.svg.png',
      alt: 'Fiverr Logo',
    },
  ];

  return (
    <div className="bg-white py-4 overflow-hidden border-t border-b border-gray-200">
      <div className="flex items-center space-x-8 animate-scroll">
        {/* Duplicate the logos for seamless infinite scrolling */}
        {[...companyIcons, ...companyIcons].map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="h-10 mx-4"
          />
        ))}
      </div>

      {/* Tailwind animation for scrolling */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 35s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CompaniesLogo;
