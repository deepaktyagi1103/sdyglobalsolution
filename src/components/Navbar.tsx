import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Shield, Award, CheckCircle } from "lucide-react";

// Simple utility function to combine classes
const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-out",
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100/20" 
          : "bg-gradient-to-r from-white via-blue-50/30 to-white shadow-lg"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Enhanced Logo with Custom Image - Larger Size */}
          <a href="/" className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              {/* Logo container with animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300 opacity-20"></div>
              <div className="relative bg-white p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border-2 border-blue-100 group-hover:border-blue-200">
                <img 
                  src="/log.png" 
                  alt="BIS Certification Services Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
                />
                <div className="absolute -top-1 -right-1">
                  <CheckCircle className="h-5 w-5 text-green-500 animate-pulse" strokeWidth={2.5} />
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  BIS Certification
                </span>
                <Award className="h-6 w-6 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
              </div>
              <span className="text-base font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 hidden sm:inline-block">
                Excellence in Quality Assurance
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={toggleDropdown}
                className="px-6 py-3 text-gray-700 font-semibold rounded-xl transition-all duration-300 relative hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 focus:outline-none flex items-center group border border-transparent hover:border-blue-200/50 hover:shadow-md"
                aria-expanded={isDropdownOpen}
              >
                Services 
                <ChevronDown 
                  size={18} 
                  className={cn(
                    "ml-2 transition-all duration-300 group-hover:text-blue-600", 
                    isDropdownOpen ? "rotate-180 text-blue-600" : ""
                  )} 
                />
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
              </button>
              
              <div 
                className={cn(
                  "absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl border border-gray-100 shadow-2xl transform transition-all duration-300 origin-top-left backdrop-blur-sm",
                  isDropdownOpen 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}
              >
                <div className="py-2 rounded-2xl bg-gradient-to-br from-white to-blue-50/30">
                  <DropdownLink href="/certifications" onClick={() => setIsDropdownOpen(false)} icon="🏆">
                    Certifications
                    <span className="text-xs text-gray-500">Quality Standards</span>
                  </DropdownLink>
                  <DropdownLink href="/registration" onClick={() => setIsDropdownOpen(false)} icon="📋">
                    Registration
                    <span className="text-xs text-gray-500">Legal Compliance</span>
                  </DropdownLink>
                  <DropdownLink href="/testing" onClick={() => setIsDropdownOpen(false)} icon="🔬">
                    Testing
                    <span className="text-xs text-gray-500">Lab Services</span>
                  </DropdownLink>
                  <DropdownLink href="/miscellaneous" onClick={() => setIsDropdownOpen(false)} icon="⚙️">
                    Miscellaneous
                    <span className="text-xs text-gray-500">Other Services</span>
                  </DropdownLink>
                </div>
              </div>
            </div>

            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            
            {/* Enhanced CTA Button */}
            <a 
              href="/contact" 
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white ml-4 px-8 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 focus:ring-4 focus:ring-blue-300/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 focus:outline-none transition-all duration-300 border border-transparent hover:border-blue-200/50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            isMenuOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="pt-4 border-t border-gradient-to-r from-blue-100 to-indigo-100 space-y-2 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-2xl p-4 mt-4">
            <MobileNavLink href="/" onClick={toggleMenu}>🏠 Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu}>👥 About</MobileNavLink>
            
            {/* Mobile dropdown for services */}
            <div className="flex flex-col">
              <button 
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-white/50 hover:to-blue-50 font-semibold px-4 py-3 rounded-xl flex items-center justify-between transition-all duration-300 border border-transparent hover:border-blue-200/30"
              >
                <span className="flex items-center">
                  <span className="mr-3">🔧</span>
                  Services
                </span>
                <ChevronDown 
                  size={20} 
                  className={cn(
                    "transition-all duration-300", 
                    isDropdownOpen ? "rotate-180 text-blue-600" : ""
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "flex flex-col ml-6 space-y-1 overflow-hidden transition-all duration-500",
                  isDropdownOpen ? "max-h-64 mt-2 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <MobileDropdownLink href="/certifications" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
                  🏆 Certifications
                </MobileDropdownLink>
                <MobileDropdownLink href="/registration" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
                  📋 Registration
                </MobileDropdownLink>
                <MobileDropdownLink href="/testing" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
                  🔬 Testing
                </MobileDropdownLink>
                <MobileDropdownLink href="/miscellaneous" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
                  ⚙️ Miscellaneous
                </MobileDropdownLink>
              </div>
            </div>

            <MobileNavLink href="/blog" onClick={toggleMenu}>📝 Blog</MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu}>💬 Contact</MobileNavLink>
            
            <div className="pt-4">
              <a 
                href="/contact" 
                className="block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 w-full text-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={toggleMenu}
              >
                🚀 Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Enhanced Navigation Link components
const NavLink = ({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) => (
  <a 
    href={href} 
    className={cn(
      "px-6 py-3 text-gray-700 font-semibold rounded-xl hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 relative group border border-transparent hover:border-blue-200/50 hover:shadow-md",
      className
    )}
  >
    {children}
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
  </a>
);

const DropdownLink = ({ children, href, onClick, icon }: { children: React.ReactNode; href: string; onClick?: () => void; icon: string }) => (
  <a 
    href={href} 
    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-300 mx-2 rounded-xl group border border-transparent hover:border-blue-200/30"
    onClick={onClick}
  >
    <div className="flex flex-col">
      <div className="flex items-center space-x-3">
        <span className="text-lg group-hover:scale-110 transition-transform duration-300">{icon}</span>
        <span className="font-semibold">{children}</span>
      </div>
    </div>
    <ChevronDown size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300 transform -rotate-90" />
  </a>
);

const MobileNavLink = ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => (
  <a 
    href={href} 
    className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-white/50 hover:to-blue-50 font-semibold px-4 py-3 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200/30"
    onClick={onClick}
  >
    {children}
  </a>
);

const MobileDropdownLink = ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => (
  <a 
    href={href} 
    className="flex items-center text-gray-600 hover:text-blue-700 font-medium py-2 px-4 rounded-xl hover:bg-gradient-to-r hover:from-white/50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-blue-200/30"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;