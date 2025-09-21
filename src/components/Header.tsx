import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import almLogo from "@/assets/alm-logo.png";
import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
} from "@/components/ui/floating-action-panel";

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
                scrollToSection('about');
              }}
            >
              About
            </a>
            <a 
              href="#membership" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('membership');
              }}
            >
              Membership
            </a>
            <a 
              href="#goals" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('goals');
              }}
            >
              Goals
            </a>
            <a 
              href="#support" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('support');
              }}
            >
              Support
            </a>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <FloatingActionPanelRoot>
              {({ closePanel }) => (
                <>
                  <FloatingActionPanelTrigger 
                    title="Navigation Menu" 
                    mode="actions"
                    className="bg-transparent border-none shadow-none hover:bg-muted p-2"
                  >
                    <Menu className="h-5 w-5" />
                  </FloatingActionPanelTrigger>

                  <FloatingActionPanelContent className="bg-background/95 backdrop-blur-md border-border shadow-xl">
                    <div className="space-y-1 p-2 min-w-[180px]">
                      <FloatingActionPanelButton 
                        onClick={() => {
                          scrollToSection('about');
                          closePanel();
                        }}
                        className="text-foreground hover:bg-muted/50"
                      >
                        About
                      </FloatingActionPanelButton>
                      <FloatingActionPanelButton 
                        onClick={() => {
                          scrollToSection('membership');
                          closePanel();
                        }}
                        className="text-foreground hover:bg-muted/50"
                      >
                        Membership
                      </FloatingActionPanelButton>
                      <FloatingActionPanelButton 
                        onClick={() => {
                          scrollToSection('goals');
                          closePanel();
                        }}
                        className="text-foreground hover:bg-muted/50"
                      >
                        Goals
                      </FloatingActionPanelButton>
                      <FloatingActionPanelButton 
                        onClick={() => {
                          scrollToSection('support');
                          closePanel();
                        }}
                        className="text-foreground hover:bg-muted/50"
                      >
                        Support
                      </FloatingActionPanelButton>
                    </div>
                  </FloatingActionPanelContent>
                </>
              )}
            </FloatingActionPanelRoot>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;