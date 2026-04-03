import React from 'react'

const About = () => {
  return (
    <section id="About" className="py-16 px-5 bg-black text-white">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="flex justify-center md:w-1/2">
          <div className="bg-amber-400 p-2 rounded-full">
            <img 
              className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover" 
              src="images/rewie.jpg" 
              alt="about" 
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ABOUT US
          </h1>

          <p className="mb-3 font-medium text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mb-3 font-medium text-gray-300">
            Quos sed veniam ex ipsa quaerat inventore nemo non impedit.
          </p>
          <p className="font-medium text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

      </div>

      {/* Card */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="bg-yellow-100 text-black p-6 rounded-3xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">Extra Info</h2>
          <p>
            This is a responsive card. Works on mobile and desktop properly.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About;