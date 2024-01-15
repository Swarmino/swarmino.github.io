import React from "react";

const BentoBoxPage = () => {
  
  return (
    <div className="container rounded flex flex-col justify-center align-middle">
      <div className="w-screen p-2">

        <div className='flex space-x-0.5'>

        <div className="bg-purple-600 aspect-square rounded-3xl p-8 flex flex-col-reverse">
            <div>
            <h2 className="text-white font-bold">//About Me</h2>
            </div>
        </div>

        <div className="my-12 divider"></div>

        <div className="about-section aspect-square bg-purple-300 rounded-3xl p-8 flex flex-col-reverse">
            <div>
            <h2 className="text-white font-bold">//About Me</h2>
            </div>
        </div>

        </div>
        


        <div className="my-12 divider"></div>

        <div className="contact-section">
          <h2 className="text-white font-bold">Contact</h2>
          <hr className="my-2 text-white" />
          <p className="text-white">Contact information and links here</p>
        </div>

        <div className="my-12 divider"></div>

        <div className="socials-section">
          <h2 className="text-white font-bold">Socials</h2>
          <hr className="my-2 text-white" />
          <p className="text-white">Social media links here</p>
          <a href="#" className="text-white font-bold bg-blue-500 rounded">
            Connect on Socials
          </a>
        </div>
      </div>
    </div>
  );
};

export default BentoBoxPage;
