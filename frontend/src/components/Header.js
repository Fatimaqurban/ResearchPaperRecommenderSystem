import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Citation & Recommendation App</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Citations</Link></li>
          <li><Link to="/recommendations" className="hover:underline">Recommendations</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;