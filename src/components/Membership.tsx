import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Heart, Target } from "lucide-react";

const Membership = () => {
  const stats = [
    {
      year: "2023",
      members: 15,
      icon: Users
    },
    {
      year: "2024", 
      members: 28,
      icon: TrendingUp
    },
    {
      year: "2025",
      members: 42,
      icon: Heart
    },
    {
      year: "2026",
      members: 50,
      icon: Target,
      projected: true
    }
  ];

  return (
    <section id="brotherhood" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-space-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-space-3">
            Growing Brotherhood
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over the past year, ALM UCSD has seen steady growth in our membership, and with it, 
            an even greater ability to make an impact on campus and within our broader community.
          </p>
        </div>

        {/* Membership Growth Chart */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-space-4 mb-space-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.year}
                variants={{
                  hidden: { y: 50, opacity: 0, scale: 0.8 },
                  visible: { 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.6 }
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card 
                  className={`text-center card-hover glow-on-hover relative overflow-hidden ${stat.projected ? 'border-accent border-2' : ''}`}
                >
                  {stat.projected && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  <CardHeader className="pb-2 relative z-10">
                    <motion.div 
                      className="flex justify-center mb-2"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`h-8 w-8 ${stat.projected ? 'text-accent' : 'text-primary'}`} />
                    </motion.div>
                    <CardTitle className="font-display text-2xl">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.5 }}
                      >
                        {stat.members}
                      </motion.span>
                      {stat.projected && (
                        <motion.span 
                          className="text-accent"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          *
                        </motion.span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="font-body text-sm text-muted-foreground">
                      {stat.year}
                      {stat.projected && (
                        <motion.span 
                          className="block text-xs text-accent"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          (Projected)
                        </motion.span>
                      )}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Growth Message */}
        <div className="grid md:grid-cols-2 gap-space-8 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-space-4">
              Quality Over Quantity
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-space-4">
              With more brothers contributing their time, energy, and talents, we have been able to host larger events, 
              expand our service initiatives, and strengthen our presence at UCSD.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our priority moving forward is to emphasize quality over quantity in membership. By selecting brothers 
              who embody passion, character, and commitment, we can continue building a fraternity that is strong, 
              united, and capable of leaving a lasting legacy at UCSD and beyond.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-space-6">
            <h4 className="font-display text-xl font-semibold text-foreground mb-space-3">
              Community Partners
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-body text-muted-foreground">ICNA Relief</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-body text-muted-foreground">Lamps of Light</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-body text-muted-foreground">UCSD Muslim Student Association</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-body text-muted-foreground">Local Community Centers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;