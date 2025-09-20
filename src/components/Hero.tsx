import heroImage from "@/assets/alm-hero-mouthwash.jpg";

const Hero = () => {
  return (
    <main className="pt-20">
      {/* Main image section - Premium animated style */}
      <section className="mws-section flex justify-center">
        <div className="max-w-4xl w-full animate-fade-in">
          <div className="mws-frame max-w-2xl mx-auto">
            <img 
              src={heroImage} 
              alt="Alpha Lambda Mu Brotherhood"
              className="w-full h-auto transition-all duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Large text section */}
      <section className="mws-section">
        <div className="max-w-7xl mx-auto">
          <h1 className="mws-large-text">
            Alpha Lambda Mu is the nation's first Muslim-interest fraternity centered on building Muslim men through
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Hero;