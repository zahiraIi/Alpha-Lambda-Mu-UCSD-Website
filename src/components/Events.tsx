import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users2, GraduationCap, Heart, HandHelping } from "lucide-react";

const Events = () => {
  const initiatives = [
    {
      title: "Academic Excellence",
      icon: GraduationCap,
      description: "Chapter GPA tracking, study groups, and professional networking with our alumni.",
      goals: ["3.5+ Chapter GPA", "Alumni Mentorship Program", "Study Resources"]
    },
    {
      title: "Community Service",
      icon: HandHelping,
      description: "Partnership initiatives with ICNA Relief and local community organizations.",
      goals: ["Monthly Service Projects", "Community Partnerships", "Volunteer Coordination"]
    },
    {
      title: "Brotherhood Development",
      icon: Heart,
      description: "Regular brotherhood events, spiritual growth, and leadership development.",
      goals: ["Weekly Brotherhood Meetings", "Leadership Training", "Spiritual Retreats"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="events" className="section-padding bg-background">
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
            Our Initiatives
          </motion.h2>
          <motion.p 
            className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building active membership through academic excellence, community service, and brotherhood development.
          </motion.p>
        </motion.div>

        {/* Initiatives Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-space-6 mb-space-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={initiative.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="card-hover glow-on-hover bg-card border border-border relative overflow-hidden h-full">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full"
                    whileHover={{ translateX: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className="flex items-center space-x-3 mb-2"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg"
                        whileHover={{ 
                          rotate: 360,
                          backgroundColor: "hsl(var(--primary) / 0.2)"
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <CardTitle className="font-display text-xl">
                        <motion.span
                          whileHover={{ color: "hsl(var(--primary))" }}
                          transition={{ duration: 0.2 }}
                        >
                          {initiative.title}
                        </motion.span>
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <motion.p 
                      className="font-body text-muted-foreground leading-relaxed mb-space-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      whileHover={{ color: "hsl(var(--foreground))" }}
                    >
                      {initiative.description}
                    </motion.p>
                    <div className="space-y-2">
                      {initiative.goals.map((goal, goalIndex) => (
                        <motion.div 
                          key={goal} 
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + goalIndex * 0.1 + 0.5 
                          }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="font-body text-sm text-muted-foreground">{goal}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Upcoming Events */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-space-6 md:p-space-8 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          />
          
          <div className="grid md:grid-cols-2 gap-space-6 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3 
                className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-space-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Join Our Next Event
              </motion.h3>
              <motion.p 
                className="font-body text-muted-foreground leading-relaxed mb-space-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Stay connected with ALM UCSD through our regular events, service projects, and brotherhood activities. 
                Follow us on Instagram for the latest updates and event announcements.
              </motion.p>
              
              <motion.div 
                className="space-y-3 mb-space-4"
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {[
                  { icon: Calendar, text: "Weekly Brotherhood Meetings" },
                  { icon: Users2, text: "Monthly Community Service" },
                  { icon: MapPin, text: "UC San Diego Campus" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.text}
                    className="flex items-center space-x-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.4 }
                      }
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="text-center md:text-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                    Follow for Updates
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;