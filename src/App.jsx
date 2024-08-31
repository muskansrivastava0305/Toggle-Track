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
        <div className=' flex gap-7 p-2 font-medium'>
          <h1>All Toggl Products
          </h1>
          <p>Blog</p>
          <p>About us</p>
        </div>
      </div>

      <div>
        {/* nav-bar */}
        <div className=' flex gap-9'>
          <div className=' flex m-4 gap-2'>
            <h1 className=' text-4xl font-extrabold font-serif' >toggl </h1>
            <h2 className=' text-4xl'>track</h2>
          </div>
          <div className='flex flex-row gap-24 justify-between' >
            <div className='flex gap-7 mt-7 font-semibold text-lg'>
              <p>Use cases</p>
              <p>Features</p>
              <p>Solutions  </p>
              <p>Pricing</p>
              <p>Resources </p>
            </div>
            <div className='flex gap-7 mt-7 font-semibold text-lg '>
              <h1>Book a demo</h1>
              <p>|</p>
              <p>Log in</p>
              <button className=' bg-[#ffcc99]'>Try for free</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
