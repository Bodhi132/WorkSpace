// components/HeroSection.tsx

import backgroundImg from '../assets/Shadow.png'

export default function HeroSection() {
    return (
        <div
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >

            {/* Content */}
            <div className="z-10 flex flex-col h-full px-8 py-12 md:px-16 lg:px-24">
                <div>
                    <div className="text-white max-w-xl">
                        <div className="flex flex-col items-start space-y-10 text-white text-left">
                            {/* 17+ Cities */}
                            <div className="flex items-center space-x-4">
                                <div className="h-16 border-l-2 border-white"></div>
                                <div>
                                    <div className="text-[5rem]">17+</div>
                                    <div className="text-base">Cities</div>
                                </div>
                            </div>

                            {/* 100+ Hotdesks */}
                            <div className="flex items-center space-x-4">
                                <div className="h-16 border-l-2 border-white"></div>
                                <div>
                                    <div className="text-[5rem]">100+</div>
                                    <div className="text-base">Hotdesks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full text-white justify-between mt-[2rem]'>
                    <p className=' text-[3rem] leading-tight '>
                        Hotdesks for Every <br /> Workstyle, in Every <br /> Neighborhood.
                    </p>
                    <div className='flex flex-col justify-between'>
                        <p className=' pt-[4rem]'>
                            At Desklinq, every hotdesk is designed for flexibility, <br /> focus, and modern work—wherever you are.
                        </p>
                        <button className='self-start text-black px-4 py-2 rounded-md'
                            style={{
                                background: "linear-gradient(180deg, #FFFFFF 53%, #FFFFFF 27%)",
                                backdropFilter: "blur(6px)",
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
