const Contact = () => {
  return (
    <section id="contact" className="mws-section border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-medium mb-8">Get Involved</h2>
            <div className="space-y-6 text-lg">
              <p>
                Interested in joining Alpha Lambda Mu or learning more about our brotherhood?
              </p>
              <p>
                We welcome Muslim men who are committed to excellence in faith, academics, and service.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Instagram</p>
                <a 
                  href="https://www.instagram.com/alm.at.ucsd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="minimal-hover text-muted-foreground"
                >
                  @alm.at.ucsd
                </a>
              </div>
              <div>
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