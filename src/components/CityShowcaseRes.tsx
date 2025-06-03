import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hyd from '../assets/hyderabad.png';
import mumb from '../assets/mumbai.png';

const CityShowcaseRes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 260; // Width of each card (in pixels)
  const elements = [
    { id: 1, img: hyd, text: 'Hyderabad' },
    { id: 2, img: mumb, text: 'Mumbai' },
    { id: 3, img: hyd, text: 'Hyderabad' },
    { id: 4, img: mumb, text: 'Mumbai' },
    { id: 5, img: hyd, text: 'Hyderabad' },
  ];

  // Auto-scroll only on mobile and tablet
  useEffect(() => {
    const isSmallScreen = window.innerWidth < 1024;
    if (!isSmallScreen) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % elements.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [elements.length]);

  return (
    <div className="px-4 sm:px-8 md:px-20 py-16 lg:py-24 overflow-hidden">
      {/* Headline for large screens */}
      <div className="flex flex-col gap-4">
        <p className="text-4xl font-semibold mb-2 ">
          <p>Unlock the Perfect</p>
          <p className="text-blue-600">Hotdesk in Every City.</p>
        </p>
        <p className="text-sm leading-relaxed">
          From Mumbai’s hustle to Bengaluru’s tech corridors, Desklinq brings flexible <br />
          workspaces to every metro city in India. Wherever you go, your next hotdesk is <br />
          already there—ready when you are.
        </p>
      </div>

      {/* Carousel container */}
      <div className="overflow-hidden w-full mt-[2rem]">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${currentIndex * (cardWidth + 16)}px` }} // 16px = gap
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {elements.map(item => (
            <div
              key={item.id}
              className="w-[260px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden relative bg-gray-100 shadow-md"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-3 text-xl left-0 w-full bg-opacity-50 text-white py-2 text-center">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CityShowcaseRes;
