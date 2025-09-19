import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/alm-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img 
          src={heroImage} 
          alt="Alpha Lambda Mu Brotherhood"
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-space-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="font-display text-5xl md:text-7xl font-bold mb-space-3 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              className="inline-block text-gradient-animate"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Alpha Lambda Mu
            </motion.span>
          </motion.h1>
          <motion.p 
            className="font-display text-xl md:text-2xl text-white/90 mb-space-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            @ UC San Diego
          </motion.p>
          <motion.p 
            className="font-body text-lg md:text-xl text-white/80 mb-space-6 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            The nation's first Muslim-interest fraternity. Building Muslim men through the Prophetic example with 
            <motion.span 
              className="text-accent font-medium"
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              {" "}faith, service, and brotherhood
            </motion.span>.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-space-3 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-body px-space-4 py-space-2 text-lg btn-premium"
              asChild
            >
              <a href="#about">Learn More</a>
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
              className="border-white text-white hover:bg-white hover:text-primary font-body px-space-4 py-space-2 text-lg btn-premium"
              asChild
            >
              <a href="#contact">Get Involved</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-space-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.a 
            href="#about" 
            className="text-white/60 hover:text-white transition-colors inline-block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.2, color: "#fff" }}
          >
            <ArrowDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;