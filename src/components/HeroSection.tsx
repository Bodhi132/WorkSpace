import backgroundImg from '../assets/Shadow.png';

export default function HeroSection() {
    function gradient(to: any, right: any, arg2: any, arg3: any) {
        throw new Error('Function not implemented.');
    }

    return (
        <div
            className="relative h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            {/* Overlay container */}
            <div className="z-10 flex flex-col h-full px-6 pt-[2rem] lg:pt-[4rem] xl:pt-[7rem] md:px-10 lg:px-24">
                {/* Stats section */}
                <div className="flex flex-col md:space-x-12 gap-10">
                    {/* Cities */}
                    <div className="flex items-center gap-5 h-24">
                        <div className="h-full border-l-2 border-white"></div>
                        <div className="flex flex-col justify-between h-full">
                            <div className="text-4xl sm:text-5xl font-semibold leading-none">17+</div>
                            <div className="text-sm sm:text-base ml-2">Cities</div>
                        </div>
                    </div>

                    {/* Hotdesks */}
                    <div className="flex items-center gap-5 h-24">
                        <div className="h-full border-l-2 border-white"></div>
                        <div className="flex flex-col justify-between h-full">
                            <div className="text-4xl sm:text-5xl font-semibold leading-none">100+</div>
                            <div className="text-sm sm:text-base ml-2">Hotdesks</div>
                        </div>
                    </div>
                </div>

                {/* Headline and Description */}
                <div className="flex flex-col md:flex-row justify-between items-start mt-12 space-y-10 md:space-y-0 md:space-x-10">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight max-w-md font-semibold">
                        Hotdesks for Every <br /> Workstyle, in Every <br /> Neighborhood.
                    </p>

                    <div className="flex flex-col space-y-4 md:max-w-xl">
                        <p className="text-sm sm:text-base md:text-md pt-[3.5rem]">
                            At Desklinq, every hotdesk is designed for flexibility, <br className="hidden md:block" />
                            focus, and modern work—wherever you are.
                        </p>
                        <button
                            className="self-start text-white px-4 py-3 rounded-md text-[0.5rem] sm:text-base cursor-pointer"
                            style={{
                                background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.73), rgba(255, 255, 255, 0.33))",
                                backdropFilter: "blur(80%)",
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
