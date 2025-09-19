import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-space-8">
      <div className="container mx-auto px-space-4">
        <div className="grid md:grid-cols-3 gap-space-6">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-space-2">
              Alpha Lambda Mu
            </h3>
            <p className="font-body text-primary-foreground/80 text-sm mb-space-3">
              @ UC San Diego
            </p>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              The nation's first Muslim-interest fraternity, building Muslim men through 
              faith, service, and brotherhood.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-space-3">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Brotherhood", href: "#brotherhood" },
                { name: "Events", href: "#events" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-space-3">
              Connect
            </h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/alm.at.ucsd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={16} />
                <span className="font-body text-sm">@alm.at.ucsd</span>
              </a>
              <p className="font-body text-sm text-primary-foreground/70">
                UC San Diego Campus<br />
                La Jolla, CA 92093
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-space-6 pt-space-4 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © 2024 Alpha Lambda Mu @ UCSD. All rights reserved.
          </p>
          <p className="font-body text-sm text-primary-foreground/60 mt-2 md:mt-0">
            Building brotherhood through Islamic values
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;