import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Mail, MapPin, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Instagram,
      title: "Follow Us",
      description: "Stay updated with our latest events and brotherhood activities",
      action: "Instagram",
      href: "https://www.instagram.com/alm.at.ucsd/"
    },
    {
      icon: Mail,
      title: "Get in Touch",
      description: "Questions about membership or our initiatives? Reach out to us",
      action: "Email Us",
      href: "mailto:info@almucsd.org"
    },
    {
      icon: MapPin,
      title: "Find Us",
      description: "Located at UC San Diego campus and surrounding community",
      action: "UC San Diego",
      href: "https://ucsd.edu"
    },
    {
      icon: Users,
      title: "Join ALM",
      description: "Interested in becoming part of our brotherhood? Learn about our process",
      action: "Learn More",
      href: "#about"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-space-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-space-3">
            Get Involved
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to join our brotherhood or learn more about ALM UCSD? We'd love to connect with you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-4 mb-space-8">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card 
                key={contact.title}
                className="text-center hover-lift bg-card border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="font-display text-lg">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-space-3">
                    {contact.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full font-body"
                    asChild
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      {contact.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-card border border-border rounded-xl p-space-6 md:p-space-8 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-space-3">
            Building the Next Generation of Muslim Leaders
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-space-4">
            Alpha Lambda Mu at UC San Diego is more than just a fraternity — we're a brotherhood committed to 
            faith, service, and excellence. Join us in our mission to make a positive impact on our campus 
            and community while strengthening our Islamic identity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-space-3 justify-center">
            <Button 
              size="lg" 
              className="font-body px-space-4 py-space-2 hover-lift"
              asChild
            >
              <a href="https://www.instagram.com/alm.at.ucsd/" target="_blank" rel="noopener noreferrer">
                Connect With Us
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-body px-space-4 py-space-2 hover-lift"
              asChild
            >
              <a href="#about">Learn Our Story</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;