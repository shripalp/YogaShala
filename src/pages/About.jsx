//import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">About Me</h1>
      <h2>My Bio</h2>
      <div className="flex flex-row border-solid border-4 border-indigo-700 gap-4">
        <img
          src="https://lh3.googleusercontent.com/pw/ADCreHdfWomL4ZmWIrTMrm0WwBCQvCnJY4A9BSH5x69oiikgfZtcNvUD0LvwOgANx7wj9gyUGDa6U8z8Wsp-0xy48MzLG5NItm_b_I5jzcFJW-e1OfC4lreb=w2400"
          alt="shripal photo"
          className="h-80 w-100"
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
