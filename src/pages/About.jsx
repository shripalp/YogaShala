//import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Our Teachers</h1>

      <div className="flex flex-col md:flex-row object-contain border-solid border-4 p-4 m-4 border-indigo-700 gap-4">
        <h2 className="text-2xl font-bold">Shripal</h2>
        <img
          src="https://lh3.googleusercontent.com/pw/ADCreHcn3FTtZlvyjPqyv8OQ6C3eKIGfCqrfvy4if4Vnws5fWtXs9IwJijoktlwKKQJl65dzSPh0Xo0UV2Cf_ejaJibW_Fzh2pfKODwqw6LySZNWfAE_cOtb=w2400"
          alt="shripal photo"
          className="sm:h-60 rounded-xl shadow-lg border-solid border-2"
        />
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          perferendis omnis ratione ipsa harum unde veniam. Esse quae aut
          doloremque veritatis, error asperiores exercitationem provident
          praesentium, magni fugiat hic quisquam?
        </p>
      </div>
    </div>
  );
};

export default About;
