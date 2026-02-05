import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, label: 'برامجنا', href: '#' },
    { id: 2, label: 'من نحن', href: '#' },
    { id: 3, label: 'اتصل بنا', href: '#' },
    { id: 4, label: 'المدونة', href: '#' },
  ];

  return (
    <header 
      dir="rtl" 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8`}
    >
      <nav className={`
        mx-auto max-w-7xl flex items-center justify-between px-6 py-3 
        rounded-2xl border transition-all duration-300
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-gray-100' 
          : 'bg-white border-transparent shadow-sm'}
      `}>
        
        <div className="flex-shrink-0">
          <img className='w-10 h-auto' src="./logo.png" alt="Logo" />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group relative text-gray-600 hover:text-[#0D4433] font-bold text-sm transition-colors duration-200"
            >
              {item.label}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#0D4433] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <input
              type="text"
              placeholder="بحث..."
              className="pr-10 pl-4 py-2 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D4433]/20 focus:border-[#0D4433] transition-all w-40 focus:w-56"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 group-focus-within:text-[#0D4433]" size={18} />
          </div>
          <button className="bg-[#0D4433] text-white px-8 py-2.5 rounded-xl font-bold hover:bg-[#0a3528] hover:shadow-lg hover:shadow-[#0D4433]/20 transition-all active:scale-95">
            انضم الينا
          </button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
           <button className="bg-[#0D4433] text-sm text-white px-5 py-2 rounded-lg font-bold">
            انضم
          </button>
          <button
            className="p-2 rounded-xl bg-gray-50 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-4 border-b border-gray-50">
            <div className="relative">
              <input
                type="text"
                placeholder="ما الذي تبحث عنه؟"
                className="w-full pr-10 pl-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-0"
              />
              <Search className="absolute right-4 top-4 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-6 py-4 text-right text-gray-700 hover:bg-gray-50 hover:text-[#0D4433] font-bold border-b border-gray-50 last:border-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="p-4">
            <button className="w-full bg-[#0D4433] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-[#0D4433]/20">
              انضم الينا
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export { Header };