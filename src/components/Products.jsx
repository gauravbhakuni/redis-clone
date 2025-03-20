import React from 'react';

const ProductCard = ({ title, imageSrc, hasDownload = false }) => {
  return (
    <div className="bg-[#1B262C] rounded-lg pt-8 flex flex-col items-center justify-between min-h-[400px] font-hello">
      <div className="flex flex-col items-center w-full">
        <div className="h-12 mb-6 border-b border-primary-accent w-full text-center">
          <h3 className="text-white text-2xl md:text-xl">{title}</h3>
        </div>
        <img src={imageSrc} alt={title} className="w-32 h-32 mb-8" />
      </div>
      <div className="flex w-full border-t border-primary-accent">
        {hasDownload ? (
          <>
            <button className="flex-1 text-white py-4 text-sm hover:bg-black/50 transition-colors">
              Download
            </button>
            <div className="w-px bg-primary-accent" />
          </>
        ) : (
          <button className="flex-1 text-white py-4 text-sm hover:bg-black/50 transition-colors">
            Learn more
          </button>
        )}
        <div className="w-px bg-primary-accent" />
        <button className="flex-1 text-white py-4 text-sm hover:bg-black/50 transition-colors">
          View docs
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="bg-primary-background container-custom mt-20">
      <div className="container mx-auto">
        <h2 className="text-white text-5xl font-medium text-center mb-16">
          Work really simply in real time
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ProductCard
            title="Community Edition"
            imageSrc="/images/community.svg"
            hasDownload={true}
          />
          <ProductCard
            title="Redis Cloud"
            imageSrc="/images/cloud.svg"
          />
          <ProductCard
            title="Redis Software"
            imageSrc="/images/software.svg"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-[#00FF4C] text-[#001E2B] px-6 py-3 rounded hover:bg-[#00CC3D] transition-colors font-medium">
            Visit demo center
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
