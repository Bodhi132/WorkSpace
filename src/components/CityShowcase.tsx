import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hyd from '../assets/hyderabad.png';
import mumb from '../assets/mumbai.png';

const CityShowcase = () => {
    const CARD_WIDTHS = {
    base: 220,   // px for mobile
    sm: 280,     // px for small screens
    md: 300,     // px for medium screens
    lg: 400      // px for large screens
};

// Helper to get card width based on window size
function getCardWidth() {
    if (window.innerWidth >= 1024) return CARD_WIDTHS.lg;
    if (window.innerWidth >= 768) return CARD_WIDTHS.md;
    if (window.innerWidth >= 640) return CARD_WIDTHS.sm;
    return CARD_WIDTHS.base;
}
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(getCardWidth());

        useEffect(() => {
        const handleResize = () => setCardWidth(getCardWidth());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        <div className='px-8 py-12 md:px-16 lg:px-20 h-screen'>
            <div className="w-full relative h-full overflow-hidden ">
                <div className="absolute lg:left-[50%] lg:top-[12rem] xl:left-[40%] 2xl:left-[32%] xl:top-[14rem] 2xl:top-[10rem] text-gray-800">
                    <p className="text-4xl font-semibold mb-4">
                        Unlock the Perfect <br />
                        <span className='text-[#6011E8]'>Hotdesk in Every City.</span>
                    </p>
                    <p className="lg:text-base font-medium leading-relaxed">
                        From Mumbai’s hustle to Bengaluru’s tech corridors, Desklinq brings flexible <br />
                        workspaces to every metro city in India. Wherever you go, your next hotdesk is <br />
                        already there—ready when you are.
                    </p>
                </div>

                <motion.div
                    className="flex absolute items-end w-full h-full"
                    animate={{ x: `calc(-${currentIndex * cardWidth}px - ${20 * currentIndex}px)` }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    {elements.map((item, index) => {
                        const isActive = index === currentIndex;

                        return (
                            <div
                                key={item.id}
                                style={{ width: `${cardWidth}px` }}
                                className={` flex-shrink-0 relative p-0 rounded-lg overflow-hidden text-center transition-all duration-500 mr-[20px] ${isActive ? 'bg-purple-100 h-full text-[3rem]' : 'bg-gray-100 text-[1.5rem] h-[250px]'
                                    }`}
                            >
                                <img
                                    src={item.img}
                                    alt={item.text}
                                    className="w-full h-full object-cover"
                                />
                                <p className="absolute bottom-[2rem] left-0 w-full text-white font-medium py-2 m-0">
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
