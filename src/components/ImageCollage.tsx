import communityServiceImage from "@/assets/alm-community-service.png";
import dinnerImage from "@/assets/alm-dinner.png";
import kayakingImage from "@/assets/alm-kayaking.png";
import sportsImage from "@/assets/alm-sports.png";
import studyImage from "@/assets/alm-study.png";
import meetingImage from "@/assets/alm-meeting.png";
import brotherhoodImage from "@/assets/alm-brotherhood.png";
import newMeetingImage from "@/assets/alm-meeting-new.png";
import newBrotherhoodImage from "@/assets/alm-brotherhood-new.png";

const ImageCollage = () => {
  return (
    <section id="collage" className="py-4 md:py-8">
      <div className="max-w-6xl mx-auto px-1 md:px-2">
        {/* Masonry-style grid layout */}
        <div className="grid grid-cols-6 gap-1 md:gap-2">
          {/* First row */}
          <div className="col-span-3 aspect-[3/2] group relative overflow-hidden bg-background">
            <img
              src={communityServiceImage}
              alt="Community Service - ALM brothers volunteering in the community"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-2 md:p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="font-bold text-xs md:text-base mb-1">Community Service</h3>
              </div>
            </div>
          </div>
          
          <div className="col-span-3 aspect-[3/2] group relative overflow-hidden bg-background">
            <img
              src={brotherhoodImage}
              alt="Brotherhood group photo by the lake at sunset"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-2 md:p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="font-bold text-xs md:text-base mb-1">Brotherhood Unity</h3>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="col-span-2 aspect-square group relative overflow-hidden bg-background">
            <img
              src={dinnerImage}
              alt="Brotherhood dinner and fellowship"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-2 md:p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="font-bold text-xs md:text-base mb-1">Brotherhood Dinner</h3>
              </div>
            </div>
          </div>
          
          <div className="col-span-2 aspect-square group relative overflow-hidden bg-background">
            <img
              src={kayakingImage}
              alt="Brothers kayaking together"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-2 md:p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="font-bold text-xs md:text-base mb-1">Outdoor Adventures</h3>
              </div>
            </div>
          </div>
          
          <div className="col-span-2 aspect-square group relative overflow-hidden bg-background">
            <img
              src={sportsImage}
              alt="Athletic activities and sports"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-2 md:p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="font-bold text-xs md:text-base mb-1">Athletic Activities</h3>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="col-span-4 aspect-[4/3] group relative overflow-hidden bg-background">
            <img
              src={studyImage}
              alt="Academic support and study sessions"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-2 md:p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="font-bold text-xs md:text-base mb-1">Academic Excellence</h3>
              </div>
            </div>
          </div>
          
          <div className="col-span-2 aspect-[2/3] group relative overflow-hidden bg-background">
            <img
              src={meetingImage}
              alt="Brothers in discussion and meeting session"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-2 md:p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="font-bold text-xs md:text-base mb-1">Brotherhood Meetings</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;