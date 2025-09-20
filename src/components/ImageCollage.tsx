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
      title: "Community Service",
      tags: ["Outreach", "Service", "Impact"],
      gridClass: "col-span-2 row-span-2"
    },
    {
      src: dinnerImage,
      alt: "Brotherhood dinner and fellowship",
      title: "Brotherhood Dinner",
      tags: ["Fellowship", "Community"],
      gridClass: "col-span-1 row-span-1"
    },
    {
      src: kayakingImage,
      alt: "Brothers kayaking together",
      title: "Outdoor Adventures",
      tags: ["Recreation", "Bonding"],
      gridClass: "col-span-1 row-span-1"
    },
    {
      src: sportsImage,
      alt: "Athletic activities and sports",
      title: "Athletic Activities",
      tags: ["Sports", "Fitness", "Competition"],
      gridClass: "col-span-2 row-span-1"
    },
    {
      src: studyImage,
      alt: "Academic support and study sessions",
      title: "Academic Excellence",
      tags: ["Education", "Growth"],
      gridClass: "col-span-1 row-span-1"
    }
  ];

  return (
    <section id="collage" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Minimal grid layout */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.gridClass} group`}
            >
              <div className="relative overflow-hidden bg-background transition-all duration-500 ease-out hover:scale-[1.01] mb-6">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Clean typography below image */}
              <div className="space-y-4">
                <h3 className="text-foreground font-bold text-base md:text-lg">
                  {image.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-muted-foreground text-xs md:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal call to action */}
        <div className="text-center mt-24">
          <a 
            href="#membership"
            className="inline-block text-foreground font-medium hover:text-muted-foreground transition-colors duration-300"
          >
            Learn About Membership →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;