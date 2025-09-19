import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      title: "Faith",
      subtitle: "إيمان",
      items: ["Tawheed", "Tazkiyyah", "Taaleem"],
      description: "Strengthening our relationship with Allah through worship, purification, and learning."
    },
    {
      title: "Service",
      subtitle: "خدمة",
      items: ["To Yourself", "To Your Family", "To the Ummah"],
      description: "Serving our communities with dedication and building lasting positive impact."
    },
    {
      title: "Brotherhood",
      subtitle: "أخوة",
      items: ["With Brothers in ALM", "With Brothers in Islam", "With Brothers in Humanity"],
      description: "Creating genuine bonds that transcend differences and last a lifetime."
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="section-padding bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-space-8" variants={itemVariants}>
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-space-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            About ALM UCSD
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.p 
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-space-4"
              variants={itemVariants}
            >
              Alpha Lambda Mu (ALM) at UC San Diego is proud to be part of the nation's first Muslim-interest fraternity. 
              Rooted in the principles of faith, service, and brotherhood, we hope to build Muslim men through the Prophetic example.
            </motion.p>
            <motion.p 
              className="font-body text-base md:text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              Our activities seek to reinforce the values Islam has set forth throughout history: a genuine brotherhood — 
              or <motion.em 
                className="font-medium text-primary"
                whileHover={{ scale: 1.1, color: "hsl(var(--accent))" }}
                transition={{ duration: 0.2 }}
              >
                akhuwwa
              </motion.em> in Arabic — and a support group of lifelong companions 
              who will stay with you through everything.
            </motion.p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className="grid md:grid-cols-3 gap-space-6 mb-space-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={value.title}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="bg-card border border-border rounded-lg p-space-6 h-full card-hover glow-on-hover relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  borderColor: "hsl(var(--primary))"
                }}
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full"
                  whileHover={{ translateX: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                
                <motion.div className="mb-space-4 relative z-10">
                  <motion.h3 
                    className="font-display text-2xl font-semibold text-foreground mb-2"
                    whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    className="font-display text-lg text-primary mb-space-3" 
                    dir="rtl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {value.subtitle}
                  </motion.p>
                </motion.div>
                
                <motion.div className="mb-space-4 relative z-10">
                  {value.items.map((item, itemIndex) => (
                    <motion.div 
                      key={item}
                      className="font-body text-sm text-muted-foreground py-1 border-b border-border/30 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p 
                  className="font-body text-sm text-muted-foreground leading-relaxed relative z-10"
                  whileHover={{ color: "hsl(var(--foreground))" }}
                  transition={{ duration: 0.2 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="bg-muted rounded-xl p-space-6 md:p-space-8 text-center relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.blockquote 
            className="font-body text-lg md:text-xl text-foreground leading-relaxed italic max-w-4xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            "We hope to inspire the next generation of leaders and community members to hold onto their identity 
            as Muslims as a means to better their communities and bring meaningful change to the world. 
            May Allah (swt) grant us strength in our mission and make us a means of service to the ummah."
          </motion.blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;