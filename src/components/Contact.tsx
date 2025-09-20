const Contact = () => {
  return (
    <section id="contact" className="mws-section border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-medium mb-8 transition-all duration-300 hover:opacity-80">Get Involved</h2>
            <div className="space-y-6 text-lg">
              <p className="transition-all duration-300 hover:transform hover:translate-x-2">
                Interested in joining Alpha Lambda Mu or learning more about our brotherhood?
              </p>
              <p className="transition-all duration-300 hover:transform hover:translate-x-2">
                We welcome Muslim men who are committed to excellence in faith, academics, and service.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-in-from-bottom-2">
            <h3 className="text-xl font-medium mb-6 transition-all duration-300 hover:opacity-80">Contact</h3>
            <div className="space-y-4">
              <div className="transition-all duration-300 hover:transform hover:scale-105 hover:bg-muted/10 p-4 rounded-md">
                <p className="font-medium">Instagram</p>
                <a 
                  href="https://www.instagram.com/alm.at.ucsd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-muted-foreground"
                >
                  @alm.at.ucsd
                </a>
              </div>
              <div className="transition-all duration-300 hover:transform hover:scale-105 hover:bg-muted/10 p-4 rounded-md">
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">UC San Diego<br />La Jolla, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;