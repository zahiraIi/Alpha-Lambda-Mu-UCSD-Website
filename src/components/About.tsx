const About = () => {
  return (
    <section id="about" className="mws-section">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="animate-fade-in">
          <h2 className="text-2xl font-medium mb-8 transition-all duration-300 hover:opacity-80">About ALM</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="transition-all duration-300 hover:transform hover:translate-x-2">
              Alpha Lambda Mu was founded at the University of California, San Diego in 2013 as the nation's first Muslim-interest fraternity.
            </p>
            <p className="transition-all duration-300 hover:transform hover:translate-x-2">
              Our mission is to build Muslim men through the Prophetic example, emphasizing faith, service, and brotherhood in all our endeavors.
            </p>
            <p className="transition-all duration-300 hover:transform hover:translate-x-2">
              We strive to create leaders who embody Islamic values while excelling academically, professionally, and socially.
            </p>
          </div>
        </div>
        
        <div className="animate-slide-in-from-bottom-2">
          <h3 className="text-xl font-medium mb-6 transition-all duration-300 hover:opacity-80">Core Values</h3>
          <div className="space-y-4">
            <div className="transition-all duration-300 hover:transform hover:scale-105 hover:bg-muted/10 p-4 rounded-md">
              <h4 className="font-medium">Faith</h4>
              <p className="text-muted-foreground">Strengthening our relationship with Allah and living by Islamic principles.</p>
            </div>
            <div className="transition-all duration-300 hover:transform hover:scale-105 hover:bg-muted/10 p-4 rounded-md">
              <h4 className="font-medium">Service</h4>
              <p className="text-muted-foreground">Serving our communities and making a positive impact in the world.</p>
            </div>
            <div className="transition-all duration-300 hover:transform hover:scale-105 hover:bg-muted/10 p-4 rounded-md">
              <h4 className="font-medium">Brotherhood</h4>
              <p className="text-muted-foreground">Building lifelong bonds and supporting each other's growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;