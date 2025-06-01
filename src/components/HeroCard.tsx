import office from '../assets/office.jpg'

const HeroCard = () => {
    return (
        <div className="w-full flex justify-center mt-10">
            <div
                className="relative w-[90%] max-w-5xl h-80 rounded-3xl overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${office})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center pl-10 text-white">
                    <p className="text-xl">Ditch the Cafes,</p>
                    <p className="text-3xl font-bold mt-1 mb-4">
                        Find Your Perfect Workspace <br /> at Desklinq
                    </p>
                    <button className="bg-white text-black text-sm font-semibold py-2 px-4 rounded-full w-fit hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
