
import table from '../assets/table.png'
import lady from '../assets/lady.png'

export default function PerfectHotDeskText() {
  return (
    <div className="bg-white h-screen py-16 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className='z-10'>
          <h2 className="text-4xl font-semibold text-black leading-snug">
            Find Your <br />
            <span className="text-purple-600">Perfect Hot Desk</span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg max-w-md">
            From workspace discovery and instant <br />booking to on-site support and seamless <br /> check-ins, 
            we take care of every detail so <br /> you can focus on what matters.
          </p>
        </div>

        {/* Right Column */}
        <div className='z-10'>
          <p className="text-gray-800 text-2xl max-w-l mt-[3rem]">
            At Desklinq, every hotdesk we <br /> offer reflects thoughtful design, <br /> effortless functionality, 
            and the <br /> flexibility modern professionals <br /> deserve. We curate inspiring <br /> workspaces.
          </p>
        </div>

        <div className=' bg-gray-100 w-[35rem] h-[25rem] rounded-[2rem] absolute left-[40%] top-[33.5%] z-5 '>
        </div>
        <img src={table} alt="" className='absolute right-0 top-[50%] w-[50rem] z-10' />
        <img src={lady} alt=""  className='absolute z-10 top-[65%] w-[38rem] h-[15rem]'/>
      </div>
    </div>
  );
}
