import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-heading font-bricolage text-service py-4 px-6 rounded-xl flex justify-between items-center mx-auto ">
      <div className="font-bricolage text-lg font-bold">
        <span className="text-bright">Buzz</span>
        <span className="text-mint">Mint</span><span className="text-bright">.</span>
      </div>
      <ul className="flex gap-6 items-center font-inter">
        <li className="cursor-pointer" onClick={() => scrollTo('home')}>home</li>
        <li className="cursor-pointer" onClick={() => scrollTo('about')}>about us</li>
        <li className="cursor-pointer relative group">
          services
        </li>
        <li>
          <button className="bg-service text-heading font-bold px-4 py-1 rounded-md">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
