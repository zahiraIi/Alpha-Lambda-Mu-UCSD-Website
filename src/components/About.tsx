const About = () => {
  return (
    <section id="about" className="mws-section">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-medium mb-8">About ALM</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Alpha Lambda Mu was founded at the University of California, San Diego in 2013 as the nation's first Muslim-interest fraternity.
            </p>
            <p>
              Our mission is to build Muslim men through the Prophetic example, emphasizing faith, service, and brotherhood in all our endeavors.
            </p>
            <p>
              We strive to create leaders who embody Islamic values while excelling academically, professionally, and socially.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Core Values</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Faith</h4>
              <p className="text-muted-foreground">Strengthening our relationship with Allah and living by Islamic principles.</p>
            </div>
            <div>
              <h4 className="font-medium">Service</h4>
              <p className="text-muted-foreground">Serving our communities and making a positive impact in the world.</p>
            </div>
            <div>
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