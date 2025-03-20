import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="text-white py-16 px-8 md:px-24 "
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="max-w-6xl mx-auto font-childlike">
        <div className="text-xl text-primary-accent font-semibold mb-2">Our track record</div>
        <h2 className="text-4xl font-bold mb-4 scale-y-[1.5]">Trusted by thousands of creators worldwide</h2>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold">
              {inView && <CountUp end={8000} duration={2} separator="," />}+
            </div>
            <div className="text-sm">Creators on the platform</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">
              {inView && <CountUp end={3} duration={3} />}%
            </div>
            <div className="text-sm">Flat platform fee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">
              {inView && <CountUp end={99.9} duration={3} decimals={1} />}%
            </div>
            <div className="text-sm">Uptime guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">
              ${inView && <CountUp end={70} duration={5} />}M
            </div>
            <div className="text-sm">Paid out to creators</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
