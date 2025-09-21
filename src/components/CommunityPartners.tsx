import React, { type SVGProps } from "react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Community Partner Logo Components
function ICNAReliefIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      {...props}
    >
      <circle cx="60" cy="60" r="60" fill="#2E7D32" />
      <path
        d="M30 40h60v40H30z"
        fill="white"
      />
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fontSize="12"
        fill="#2E7D32"
        fontWeight="bold"
      >
        ICNA
      </text>
      <text
        x="60"
        y="75"
        textAnchor="middle"
        fontSize="8"
        fill="#2E7D32"
      >
        RELIEF
      </text>
    </svg>
  );
}

function LampsOfLightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      {...props}
    >
      <circle cx="60" cy="60" r="60" fill="#FF9800" />
      <path
        d="M60 25L50 45h20L60 25z"
        fill="white"
      />
      <circle cx="60" cy="60" r="15" fill="white" />
      <text
        x="60"
        y="90"
        textAnchor="middle"
        fontSize="10"
        fill="white"
        fontWeight="bold"
      >
        Lamps of Light
      </text>
    </svg>
  );
}

function UCSDIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      {...props}
    >
      <circle cx="60" cy="60" r="60" fill="#006A96" />
      <path
        d="M30 35h60v50H30z"
        fill="white"
      />
      <text
        x="60"
        y="55"
        textAnchor="middle"
        fontSize="10"
        fill="#006A96"
        fontWeight="bold"
      >
        UC SAN DIEGO
      </text>
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fontSize="8"
        fill="#006A96"
      >
        CENTER FOR
      </text>
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fontSize="8"
        fill="#006A96"
      >
        STUDENT INVOLVEMENT
      </text>
    </svg>
  );
}

function MosqueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      {...props}
    >
      <circle cx="60" cy="60" r="60" fill="#4CAF50" />
      <path
        d="M60 20L40 40h40L60 20z"
        fill="white"
      />
      <path
        d="M45 40v30h30V40z"
        fill="white"
      />
      <circle cx="55" cy="25" r="3" fill="white" />
      <text
        x="60"
        y="90"
        textAnchor="middle"
        fontSize="10"
        fill="white"
        fontWeight="bold"
      >
        Islamic Center
      </text>
    </svg>
  );
}

function CommunityServiceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      {...props}
    >
      <circle cx="60" cy="60" r="60" fill="#9C27B0" />
      <path
        d="M60 30L40 50v30h40V50L60 30z"
        fill="white"
      />
      <circle cx="45" cy="40" r="5" fill="#9C27B0" />
      <circle cx="75" cy="40" r="5" fill="#9C27B0" />
      <text
        x="60"
        y="95"
        textAnchor="middle"
        fontSize="9"
        fill="white"
        fontWeight="bold"
      >
        Community Service
      </text>
    </svg>
  );
}

function InterfaithIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      {...props}
    >
      <circle cx="60" cy="60" r="60" fill="#FF5722" />
      <circle cx="45" cy="50" r="12" fill="white" />
      <circle cx="75" cy="50" r="12" fill="white" />
      <path
        d="M60 70c-8 0-15-5-15-12h30c0 7-7 12-15 12z"
        fill="white"
      />
      <text
        x="60"
        y="95"
        textAnchor="middle"
        fontSize="10"
        fill="white"
        fontWeight="bold"
      >
        Interfaith Unity
      </text>
    </svg>
  );
}

// Array of partner logos
const partnerLogos = [
  { name: "ICNA Relief", id: 1, img: ICNAReliefIcon },
  { name: "Lamps of Light", id: 2, img: LampsOfLightIcon },
  { name: "UCSD CSI", id: 3, img: UCSDIcon },
  { name: "Islamic Center", id: 4, img: MosqueIcon },
  { name: "Community Service", id: 5, img: CommunityServiceIcon },
  { name: "Interfaith Unity", id: 6, img: InterfaithIcon },
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
          <LogoCarousel columnCount={3} logos={partnerLogos} />
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