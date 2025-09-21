import heroImage from "@/assets/alm-hero-fraternity.png";
import heroBackground from "@/assets/alm-hero-mouthwash.jpg";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import ImageCollage from "./ImageCollage";

const Hero = () => {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={heroBackground}
      bgImageSrc={heroImage}
      title="Alpha Lambda Mu"
      date="@ UCSD Est. 2013"
      scrollToExpand="Scroll to explore our journey"
      textBlend={true}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
          Building Muslim Men Through Brotherhood
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
          Alpha Lambda Mu is the nation's first Muslim-interest fraternity, dedicated to fostering leadership, 
          academic excellence, and community service among Muslim men in higher education.
        </p>
        <ImageCollage />
      </div>
    </ScrollExpandMedia>
  );
};

export default Hero;