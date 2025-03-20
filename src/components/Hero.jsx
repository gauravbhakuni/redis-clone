import React from 'react'

const Hero = () => {
  return (
    <div className="bg-primary-background min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto mt-42 px-4 py-20 text-center">
        <h1 className="text-white text-2xl sm:text-5xl xl:text-6xl tracking-widest font-bold mb-20 scale-y-[2.5] scale-x-[1.5]">
          THE REAL-TIME
          <br />
          AI PLATFORM
        </h1>
        <p className="text-primary-accent text-xl mb-12">
          Your apps need AI that can think—and act—fast.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="bg-primary-accent hover:bg-black/40 text-black hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Try for free
          </button>
          <div className="ml-6 text-white hover:text-primary-accent font-semibold flex items-center gap-2">
            Get a demo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
