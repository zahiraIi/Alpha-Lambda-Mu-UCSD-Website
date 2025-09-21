import { SocialLinks } from "@/components/ui/social-links";

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
    url: "https://www.instagram.com/alm.at.ucsd/",
  },
  {
    name: "LinkedIn",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
    url: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A108100064&keywords=alpha%20lambda%20mu%20%40%20uc%20san%20diego&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=1d36d431-8fe4-41a6-9dc1-d0bed1b951bf&sid=wqe&spellCorrectionEnabled=true",
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in touch
          </h2>
          <div className="flex items-center justify-center mt-12">
            <SocialLinks socials={socials} />
          </div>
        </div>


        {/* Footer Info */}
        <div className="flex justify-between items-end mt-8 text-sm text-muted-foreground">
          <div>©2025</div>
          <div className="text-right">
            <div>Alpha Lambda Mu</div>
            <div>Muslim Fraternity</div>
            <div>UC San Diego</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;