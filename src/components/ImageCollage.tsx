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
    <section id="collage" className="mws-section bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Brotherhood
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse experiences that define Alpha Lambda Mu
          </p>
        </div>

        {/* Mouthwash Studios inspired grid layout */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.gridClass} group relative overflow-hidden rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.02]`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Text overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-white font-bold text-lg md:text-xl mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Premium hover effect border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-white/20" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Join our community of Muslim men committed to excellence, service, and brotherhood
          </p>
          <a 
            href="#membership"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Learn About Membership
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;