import communityServiceImage from "@/assets/alm-community-service.png";
import dinnerImage from "@/assets/alm-dinner.png";
import kayakingImage from "@/assets/alm-kayaking.png";
import sportsImage from "@/assets/alm-sports.png";
import studyImage from "@/assets/alm-study.png";

const ImageCollage = () => {
  const images = [
    {
      src: communityServiceImage,
      alt: "Community Service - ALM brothers volunteering in the community",
      title: "Service",
      description: "Giving back to our community",
      gridClass: "col-span-2 row-span-2"
    },
    {
      src: dinnerImage,
      alt: "Brotherhood dinner and fellowship",
      title: "Fellowship",
      description: "Building lasting bonds",
      gridClass: "col-span-1 row-span-1"
    },
    {
      src: kayakingImage,
      alt: "Brothers kayaking together",
      title: "Adventure",
      description: "Exploring new horizons",
      gridClass: "col-span-1 row-span-1"
    },
    {
      src: sportsImage,
      alt: "Athletic activities and sports",
      title: "Athletics",
      description: "Staying active together",
      gridClass: "col-span-2 row-span-1"
    },
    {
      src: studyImage,
      alt: "Academic support and study sessions",
      title: "Excellence",
      description: "Academic achievement",
      gridClass: "col-span-1 row-span-1"
    }
  ];

  return (
    <section id="collage" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Brotherhood
          </h2>
          <p className="text-lg text-muted-foreground">
            Building Muslim men through diverse experiences
          </p>
        </div>

        {/* Clean minimal grid layout */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[280px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.gridClass} group`}
            >
              <div className="relative overflow-hidden bg-background transition-all duration-500 ease-out hover:scale-[1.01] mb-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Caption below image */}
              <div className="px-1">
                <h3 className="text-foreground font-bold text-sm md:text-base tracking-wide">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal call to action */}
        <div className="text-center mt-12">
          <a 
            href="#membership"
            className="inline-block text-foreground font-medium hover:text-primary transition-colors duration-300"
          >
            Learn About Membership →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;