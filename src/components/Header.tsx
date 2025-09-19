import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import almLogo from "@/assets/alm-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Brotherhood", href: "#brotherhood" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-space-4 py-space-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={almLogo} 
              alt="ALM Logo" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="font-display font-semibold text-lg text-foreground">
                Alpha Lambda Mu
              </h1>
              <p className="text-xs text-muted-foreground font-body">@ UC San Diego</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-space-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-body text-sm text-foreground hover:text-primary transition-colors duration-300 px-space-2 py-1"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="ml-space-3 hover-lift font-body"
              asChild
            >
              <a href="https://www.instagram.com/alm.at.ucsd/" target="_blank" rel="noopener noreferrer">
                Follow Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-space-3 py-space-3 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-body text-foreground hover:text-primary transition-colors duration-300 py-2 px-space-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="mt-space-2 w-full font-body"
                asChild
              >
                <a href="https://www.instagram.com/alm.at.ucsd/" target="_blank" rel="noopener noreferrer">
                  Follow Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;