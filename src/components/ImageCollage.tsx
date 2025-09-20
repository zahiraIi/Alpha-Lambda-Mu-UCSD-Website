import communityServiceImage from "@/assets/alm-community-service.png";
import dinnerImage from "@/assets/alm-dinner.png";
import kayakingImage from "@/assets/alm-kayaking.png";
import sportsImage from "@/assets/alm-sports.png";
import studyImage from "@/assets/alm-study.png";
import meetingImage from "@/assets/alm-meeting.png";
import brotherhoodImage from "@/assets/alm-brotherhood.png";

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
      src: meetingImage,
      alt: "Brothers in discussion and meeting session",
      title: "Brotherhood Meetings",
      tags: ["Discussion", "Planning"],
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
    },
    {
      src: brotherhoodImage,
      alt: "Brotherhood group photo by the lake at sunset",
      title: "Brotherhood Unity",
      tags: ["Brotherhood", "Unity", "Memories"],
      gridClass: "col-span-2 row-span-1"
    }
  ];

  return (
    <section id="collage" className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        {/* Tight grid layout with minimal gaps */}
        <div className="grid grid-cols-4 gap-1 md:gap-2 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.gridClass} group relative overflow-hidden bg-background`}
            >
              <div className="absolute inset-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Overlay with title on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-3 md:p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <h3 className="font-bold text-sm md:text-base mb-1">
                    {image.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {image.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-white/70 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;