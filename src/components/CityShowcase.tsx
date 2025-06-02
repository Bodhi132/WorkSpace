import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hyd from '../assets/hyderabad.png';
import mumb from '../assets/mumbai.png';

const CityShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const elements = [
        { id: 1, img: hyd, text: 'Hyderabad' },
        { id: 2, img: mumb, text: 'Mumbai' },
        { id: 3, img: hyd, text: 'Hyderabad' },
        { id: 4, img: mumb, text: 'Mumbai' },
        { id: 5, img: hyd, text: 'Hyderabad' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % elements.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='px-8 py-12 md:px-16 lg:px-24'>
            <div className="w-full relative h-[600px] overflow-hidden ">
                <div className="absolute left-[40%] top-[10rem] max-w-xl text-gray-800">
                    <p className="text-4xl font-semibold mb-2">
                        Unlock the Perfect <br />
                        <span className='text-blue-600'>Hotdesk in Every City.</span>
                    </p>
                    <p className="text-sm leading-relaxed">
                        From Mumbai’s hustle to Bengaluru’s tech corridors, Desklinq brings flexible <br />
                        workspaces to every metro city in India. Wherever you go, your next hotdesk is <br />
                        already there—ready when you are.
                    </p>
                </div>

                <motion.div
                    className="flex gap-6 absolute top-[10rem] items-end w-full"
                    animate={{ x: `-${currentIndex * 25}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {elements.map((item, index) => {
                        const isActive = index === currentIndex;

                        return (
                            <div
                                key={item.id}
                                className={`w-1/4 flex-shrink-0 relative p-0 rounded-lg overflow-hidden text-center transition-all duration-500 ${isActive ? 'bg-purple-100 h-[400px]' : 'bg-gray-100 h-[200px]'
                                    }`}
                            >
                                <img
                                    src={item.img}
                                    alt={item.text}
                                    className="w-full h-full object-cover"
                                />
                                <p className="absolute bottom-0 left-0 w-full text-white text-sm font-medium py-2 m-0">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default CityShowcase;
