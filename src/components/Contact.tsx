const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in touch
          </h2>
          <div className="space-y-2">
            <a 
              href="https://www.instagram.com/alm.at.ucsd/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors"
            >
              @alm.at.ucsd
            </a>
            <p className="text-lg md:text-xl text-muted-foreground">
              UC San Diego, La Jolla CA
            </p>
          </div>
        </div>


        {/* Footer Info */}
        <div className="flex justify-between items-end mt-8 text-sm text-muted-foreground">
          <div>©2024</div>
          <div className="text-right">
            <div>Alpha Lambda Mu</div>
            <div>Muslim Fraternity</div>
            <div>UC San Diego</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;