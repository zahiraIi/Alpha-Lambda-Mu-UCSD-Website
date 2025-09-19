const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-transparent">
      <nav className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - Mouthwash style */}
          <div className="text-2xl font-medium tracking-tight">
            ALM
          </div>

          {/* Navigation - Mouthwash style */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="minimal-hover">Work</a>
            <a href="#brotherhood" className="minimal-hover">Brotherhood</a>
            <a href="#about" className="minimal-hover">About</a>
            <a href="#contact" className="minimal-hover">Contact</a>
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