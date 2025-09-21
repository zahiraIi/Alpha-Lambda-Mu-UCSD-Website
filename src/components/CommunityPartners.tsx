import React from "react";
import { Logos3 } from "@/components/ui/logos3";
import { GradientHeading } from "@/components/ui/gradient-heading";
import icnaReliefLogo from "@/assets/icna-relief-logo.png";
import lampsOfLightLogo from "@/assets/lamps-of-light-logo.png";
import ucsdCSILogo from "@/assets/ucsd-csi-logo.png";

// Array of partner logos in the new format
const partnerLogos = [
  {
    id: "icna-relief",
    description: "ICNA Relief",
    image: icnaReliefLogo,
    className: "h-12 w-auto max-w-full object-contain",
  },
  {
    id: "lamps-of-light", 
    description: "Lamps of Light",
    image: lampsOfLightLogo,
    className: "h-12 w-auto max-w-full object-contain",
  },
  {
    id: "ucsd-csi",
    description: "UCSD Center for Student Involvement", 
    image: ucsdCSILogo,
    className: "h-12 w-auto max-w-full object-contain",
  },
];

const CommunityPartners = () => {
  return (
    <section id="community-partners" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <GradientHeading variant="default" size="lg">
            Community Partners
          </GradientHeading>
        </div>
        
        <Logos3 
          heading=""
          logos={partnerLogos}
          className="py-0"
        />
      </div>
    </section>
  );
};

export default CommunityPartners;