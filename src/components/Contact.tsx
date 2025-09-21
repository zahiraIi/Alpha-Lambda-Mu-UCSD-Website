import { SocialLinks } from "@/components/ui/social-links";

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
    url: "https://www.instagram.com/alm.at.ucsd/"
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
          <div className="flex items-center gap-4 mt-6">
            <span className="text-lg md:text-xl text-muted-foreground">Follow us:</span>
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