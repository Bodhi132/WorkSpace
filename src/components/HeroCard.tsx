import office from '../assets/office.jpg'

const HeroCard = () => {
    return (
        <div className="w-full flex justify-center mt-10">
            <div
                className="relative w-[90%] max-w-5xl h-[30rem] rounded-3xl overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${office})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
                <div className="absolute inset-0 flex flex-col justify-center pl-28 pt-20 text-white z-10">
                    <p className="text-[1.8rem]">Ditch the Cafes,</p>
                    <div className="text-[2.4rem] font-bold mt-1 mb-4 leading-tight">
                        <p>Find Your Perfect Workspace</p> 
                        <p>at Desklinq</p>
                    </div>
                    <button className="bg-white text-black text-md font-bold py-2 px-7 rounded-full w-fit hover:bg-gray-200 mt-6">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
