import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-md"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />

            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-600 hidden md:inline-block transition-colors group-hover:text-primary">
                BIS Certification Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={toggleDropdown}
                className="px-4 py-2 text-gray-700 font-medium rounded-md transition-colors relative hover:text-primary hover:bg-gray-50 focus:outline-none flex items-center"
                aria-expanded={isDropdownOpen}
              >
                Services <ChevronDown size={16} className={cn("ml-1 transition-transform duration-300", isDropdownOpen ? "rotate-180" : "")} />
              </button>
              
              <div 
                className={cn(
                  "absolute top-full left-0 mt-1 w-56 bg-white rounded-lg border border-gray-100 shadow-lg transform transition-all duration-200 origin-top-left",
                  isDropdownOpen 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-95 pointer-events-none"
                )}
              >
                <div className="py-1 rounded-md bg-white">
                  <DropdownLink to="/certifications" onClick={() => setIsDropdownOpen(false)}>
                    Certifications
                  </DropdownLink>
                  <DropdownLink to="/registration" onClick={() => setIsDropdownOpen(false)}>
                    Registration
                  </DropdownLink>
                  <DropdownLink to="/testing" onClick={() => setIsDropdownOpen(false)}>
                    Testing
                  </DropdownLink>
                  <DropdownLink to="/miscellaneous" onClick={() => setIsDropdownOpen(false)}>
                    Miscellaneous
                  </DropdownLink>
                </div>
              </div>
            </div>

            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-primary text-white ml-2 px-5 py-2 rounded-md hover:bg-primary/90 focus:ring-2 focus:ring-primary/30 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100 hover:text-primary focus:outline-none transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t space-y-2">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            
            {/* Mobile dropdown for services */}
            <div className="flex flex-col">
              <button 
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium px-3 py-2 rounded-md flex items-center justify-between transition-colors"
              >
                Services 
                <ChevronDown size={18} className={cn("transition-transform duration-300", isDropdownOpen ? "rotate-180" : "")} />
              </button>
              <div 
                className={cn(
                  "flex flex-col ml-4 space-y-1 overflow-hidden transition-all duration-300",
                  isDropdownOpen ? "max-h-48 mt-1 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <MobileDropdownLink to="/certifications" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
                  Certifications
                </MobileDropdownLink>
                <MobileDropdownLink to="/registration" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
                  Registration
                </MobileDropdownLink>
                <MobileDropdownLink to="/testing" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
                  Testing
                </MobileDropdownLink>
                <MobileDropdownLink to="/miscellaneous" onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
                  Miscellaneous
                </MobileDropdownLink>
              </div>
            </div>

            <MobileNavLink to="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="block bg-primary text-white px-4 py-3 rounded-md hover:bg-primary/90 transition-all w-full text-center font-medium shadow-sm"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable Navigation Link components
const NavLink = ({ children, to, className = "" }: { children: React.ReactNode; to: string; className?: string }) => (
  <Link 
    to={to} 
    className={cn(
      "px-4 py-2 text-gray-700 font-medium rounded-md hover:text-primary hover:bg-gray-50 transition-colors",
      className
    )}
  >
    {children}
  </Link>
);

const DropdownLink = ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick?: () => void }) => (
  <Link 
    to={to} 
    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick?: () => void }) => (
  <Link 
    to={to} 
    className="block text-gray-700 hover:text-primary hover:bg-gray-50 font-medium px-3 py-2 rounded-md transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

const MobileDropdownLink = ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick?: () => void }) => (
  <Link 
    to={to} 
    className="text-gray-600 hover:text-primary font-medium py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;