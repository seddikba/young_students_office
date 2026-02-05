import React from 'react';
import { Search, Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full font-sans border-b border-gray-100">
  

      <nav className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0D4433] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Pagedone</span>
        </div>


        <div className="flex items-center gap-4">
      
          <button className=" text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0a3528] transition-all">
            انضم الينا
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Header};