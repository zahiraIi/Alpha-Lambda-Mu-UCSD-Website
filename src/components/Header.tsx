import { useState, useEffect } from "react";
import almLogo from "@/assets/alm-logo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when user scrolls past the hero section (viewport height)
      const scrollY = window.scrollY;
      const shouldShow = scrollY > window.innerHeight * 0.8;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - Mouthwash style */}
          <div className="flex items-center space-x-3">
            <img 
              src={almLogo} 
              alt="Alpha Lambda Mu Logo" 
              className="h-8 w-auto"
            />
            <div className="text-lg font-medium tracking-tight text-muted-foreground">
              @ UCSD
            </div>
          </div>

          {/* Navigation - Premium Apple-like style */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              About
            </a>
            <a 
              href="#membership" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Membership
            </a>
            <a 
              href="#goals" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('goals')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Goals
            </a>
            <a 
              href="#support" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('support')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Support
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground transition-all duration-200 hover:scale-110 active:scale-95">Menu</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;