//import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">About US</h1>

      <div className="flex flex-col md:flex-row object-contain border-solid border-4 p-4 m-4 border-indigo-700 gap-4">
        <h2>About Shripal</h2>
        <img
          src="https://lh3.googleusercontent.com/pw/ADCreHcn3FTtZlvyjPqyv8OQ6C3eKIGfCqrfvy4if4Vnws5fWtXs9IwJijoktlwKKQJl65dzSPh0Xo0UV2Cf_ejaJibW_Fzh2pfKODwqw6LySZNWfAE_cOtb=w2400"
          alt="shripal photo"
          className="sm:h-60"
        />
        <p className="flex flex-col">
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
