import almLogo from "@/assets/alm-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
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

          {/* Navigation - Mouthwash style */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="minimal-hover">About</a>
            <a href="#membership" className="minimal-hover">Membership</a>
            <a href="#goals" className="minimal-hover">Goals</a>
            <a href="#support" className="minimal-hover">Support</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground">Menu</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;