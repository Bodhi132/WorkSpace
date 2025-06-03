
import table from '../assets/table.png'
import lady from '../assets/lady.png'

export default function PerfectHotDeskText() {
  return (
    <div className="bg-white h-screen py-16 px-6 md:px-20 relative">
      <div className="md:flex md:flex-row flex-col justify-between">
        {/* Left Column */}
        <div className='z-10'>
          <div className=" text-4xl font-semibold space-y-2">
            <p>Find Your </p>
            <div className="text-purple-600 space-y-2">
              <p>Perfect Hot</p>
              <p>Desk</p>
            </div>
          </div>
          <p className=" text-xl mt-5">
            From workspace discovery and instant <br />booking to on-site support and seamless <br /> check-ins,
            we take care of every detail so <br /> you can focus on what matters.
          </p>
        </div>

        {/* Right Column */}
        <div className='z-10'>
          <p className=" md:text-md lg:text-2xl mt-[3rem]">
            At Desklinq, every hotdesk we <br /> offer reflects thoughtful design, <br /> effortless functionality,
            and the <br /> flexibility modern professionals <br /> deserve. We curate inspiring <br /> workspaces.
          </p>
        </div>

        <div className="bg-[#F3F4F6] w-[50vw] h-[50vh] rounded-[2rem] absolute md:left-1/2 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 z-5 max-sm:hidden sm:hidden md:block">
        </div>

        <img src={table} alt="" className=' hidden sm:block w-[30rem] xl:w-[52rem] absolute sm:right-0 md:top-[65%] lg:top-[55%] z-20'/>
        <img src={lady} alt="" className=' hidden sm:block w-[25rem] lg:w-[30rem] xl:w-[40rem] xl:left-[5%] absolute md:left-[10%] sm:bottom-[1%] md:top-[73%] lg:top-[70%] z-20'/>

        <img src={table} alt="" className=' w-[65%] sm:hidden absolute right-0 top-[75%]' />
        <img src={lady} alt="" className=' w-[50%] sm:hidden absolute left-10 bottom-[1%]' />
      </div>
    </div>
  );
}
