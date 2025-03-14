import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          
          {/* Logo Section - Left */}
          <div className="flex items-center justify-start w-1/3">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Liva Perfumes" 
                style={{ 
                  height: '140px', 
                  width: 'auto',
                  marginLeft: '-20px', 
                  marginTop: '20px'
                }}
              />
            </Link>
          </div>

          {/* Title - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl md:text-6xl lg:text-2xl font-extrabold text-black-300 hover:text-yellow-400" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Liva Perfumes
            </h1>
          </div>

          {/* Navigation Links - Right */}
          <div className="hidden md:flex items-center space-x-8 justify-end w-1/3">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
