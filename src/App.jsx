import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      {/* top-section */}
      <div className=' bg-[#ff80df]'>
        <div className=' flex gap-7 p-2 font-medium w-full justify-end pr-9 text-sm'>
          <div className=' flex flex-row gap-2'>
            <h1>All Toggl Products </h1>
            <img src='drop-down.png' className=' w-3'/>
            </div>
          <p>Blog</p>
          <p>About us</p>
        </div>
      </div>

      <div className=' w-full bg-[#2e133a]'>
        {/* nav-bar */}
        <div className=' flex gap-9'>
          <div className=' flex m-4 gap-2'>
            <h1 className=' text-4xl font-extrabold font-serif text-[#ff80df]' >toggl </h1>
            <h2 className=' text-4xl text-[#ff80df]'>track</h2>
          </div>
          <div className='flex flex-row w-full' >
            <div className='flex gap-7 mt-7 font-semibold text-lg'>
              <p className=' text-yellow-50'>Use cases</p>
              <p className=' text-yellow-50'>Features</p>
              <p className=' text-yellow-50'>Solutions  </p>
              <p className=' text-yellow-50'>Pricing</p>
              <p className=' text-yellow-50'>Resources </p>
            </div>
            <div className='flex gap-7 mt-7 font-semibold text-lg w-3/5 justify-end'>
              <h1 className=' text-yellow-50'>Book a demo</h1>
              <p className=' text-yellow-50'>|</p>
              <p className=' text-yellow-50'>Log in</p>
              <button className=' bg-[#ffcc99] border rounded-full  py-2 px-3'>Try for free</button>
            </div>
          </div>
        </div>

        <div className=' flex mr-36 ml-36 mt-8 gap-5 '>
          <div className=' w-full flex flex-col gap-6'>
          <div >
            <h1 className=' text-yellow-50 text-7xl'>Time tracking software to drive every decision</h1>
          </div>
          <div>
            <p className=' text-slate-300 text-2xl'>Give your team a time tracker they’ll love, make confident data-backed decisions and focus on the work that matters most.</p>
          </div>

          <div className=' flex gap-20'>
          <div className=' bg-[#ff80df] py-2 px-3 border rounded-full'>
            <button className=' text-yellow-50 text-base font-medium '>Start Tracking for Free</button>
          </div>
          <div className=' flex py-2 px-3 hover:border hover:rounded-full hover:bg-gray-400 gap-4'>
           <img src=' play.png' className=' w-7'/>
            <button className=' text-yellow-50 font-medium'> See how it work</button>
          </div>
          </div>
          </div>
          <div className='size-1/2 w-full'>
            <img src=' toggl-track-reports.avif' />
          </div>
        </div>

      </div>
      <div className=' bg-[#412A4C] h-24 justify-center items-center'>
          <div className=' '>
            <img src=' brands-mixed-desktop-light.avif' className=' p-8 mx-auto w-3/5'/>
          </div>
        </div>
    </div>

  )
}

export default App
