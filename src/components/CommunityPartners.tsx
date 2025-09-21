import React, { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import icnaReliefLogo from "@/assets/icna-relief-logo.png";
import lampsOfLightLogo from "@/assets/lamps-of-light-logo.png";
import ucsdCSILogo from "@/assets/ucsd-csi-logo.png";

// Community Partner Logo Components using actual images
function ICNAReliefIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img 
        src={icnaReliefLogo} 
        alt="ICNA Relief" 
        className="max-w-full max-h-full object-contain"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      />
    </div>
  );
}

function LampsOfLightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img 
        src={lampsOfLightLogo} 
        alt="Lamps of Light" 
        className="max-w-full max-h-full object-contain"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      />
    </div>
  );
}

function UCSDIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img 
        src={ucsdCSILogo} 
        alt="UCSD Center for Student Involvement" 
        className="max-w-full max-h-full object-contain"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      />
    </div>
  );
}

// Array of partner logos
const partnerLogos = [
  { name: "ICNA Relief", id: 1, img: ICNAReliefIcon },
  { name: "Lamps of Light", id: 2, img: LampsOfLightIcon },
  { name: "UCSD CSI", id: 3, img: UCSDIcon },
];

const CommunityPartners = () => {
  return (
    <section id="community-partners" className="mws-section bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <GradientHeading variant="default" size="lg">
            Community Partners
          </GradientHeading>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Alpha Lambda Mu collaborates with various organizations to strengthen our impact 
            and build meaningful connections within the broader community.
          </p>
        </div>
        
        <div className="flex justify-center">
          <LogoCarousel columnCount={2} logos={partnerLogos} />
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="mws-frame">
            <h3 className="text-xl font-medium mb-4">Strategic Partnerships</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our partnerships enable us to amplify our community service efforts, provide 
              resources for our members' personal and professional development, and create 
              lasting positive impact both on campus and beyond.
            </p>
          </div>
          
          <div className="mws-frame">
            <h3 className="text-xl font-medium mb-4">Collaborative Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Through these partnerships, we've been able to organize larger charity drives, 
              host interfaith dialogue events, and provide mentorship opportunities that 
              benefit not only our brotherhood but the entire UCSD community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;