import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/alm-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Alpha Lambda Mu Brotherhood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-space-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-space-3 leading-tight">
            Alpha Lambda Mu
          </h1>
          <p className="font-display text-xl md:text-2xl text-white/90 mb-space-2">
            @ UC San Diego
          </p>
          <p className="font-body text-lg md:text-xl text-white/80 mb-space-6 max-w-2xl mx-auto leading-relaxed">
            The nation's first Muslim-interest fraternity. Building Muslim men through the Prophetic example with 
            <span className="text-accent font-medium"> faith, service, and brotherhood</span>.
          </p>
        </div>

        <div className="animate-slide-in-from-bottom-2 flex flex-col sm:flex-row gap-space-3 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-body px-space-4 py-space-2 text-lg hover-lift"
            asChild
          >
            <a href="#about">Learn More</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-primary font-body px-space-4 py-space-2 text-lg hover-lift"
            asChild
          >
            <a href="#contact">Get Involved</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-space-4 left-1/2 transform -translate-x-1/2 animate-float">
          <a href="#about" className="text-white/60 hover:text-white transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;