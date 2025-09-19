import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-space-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-space-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Get Involved
          </motion.h2>
          <motion.p 
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to join our brotherhood or learn more about ALM UCSD? We'd love to connect with you.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-space-4 mb-space-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="text-center card-hover glow-on-hover bg-card border border-border relative overflow-hidden h-full">
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full"
                    whileHover={{ translateX: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <CardHeader className="pb-3 relative z-10">
                    <motion.div 
                      className="flex justify-center mb-3"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </motion.div>
                    <CardTitle className="font-display text-lg">
                      <motion.span
                        whileHover={{ color: "hsl(var(--primary))" }}
                        transition={{ duration: 0.2 }}
                      >
                        {contact.title}
                      </motion.span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10">
                    <motion.p 
                      className="font-body text-sm text-muted-foreground leading-relaxed mb-space-3"
                      whileHover={{ color: "hsl(var(--foreground))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {contact.description}
                    </motion.p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full font-body btn-premium"
                        asChild
                      >
                        <a href={contact.href} target="_blank" rel="noopener noreferrer">
                          {contact.action}
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="bg-card border border-border rounded-xl p-space-6 md:p-space-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          />
          
          <div className="relative z-10">
            <motion.h3 
              className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-space-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building the Next Generation of Muslim Leaders
            </motion.h3>
            <motion.p 
              className="font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-space-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Alpha Lambda Mu at UC San Diego is more than just a fraternity — we're a brotherhood committed to 
              faith, service, and excellence. Join us in our mission to make a positive impact on our campus 
              and community while strengthening our Islamic identity.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-space-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="font-body px-space-4 py-space-2 btn-premium glow-on-hover"
                  asChild
                >
                  <a href="https://www.instagram.com/alm.at.ucsd/" target="_blank" rel="noopener noreferrer">
                    Connect With Us
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-body px-space-4 py-space-2 btn-premium"
                  asChild
                >
                  <a href="#about">Learn Our Story</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;