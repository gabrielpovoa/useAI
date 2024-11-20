import React from 'react'

export const Banner = () => {
    return (
        <div className="relative h-96 sm:h-screen w-full p-6">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src='/banner-home.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    
          <div className="relative z-50 flex items-center justify-center h-full select-none">
            <h1 className="text-orange text-3xl text-center uppercase md:text-6xl font-bold pointer-events-none">
              Welcome to the Future
            </h1>
          </div>
    
          <div className="absolute inset-0 bg-black/70 z-40"></div>
        </div>
      );
}
