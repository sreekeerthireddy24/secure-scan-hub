import { motion } from 'framer-motion';
import { Shield, Scan, ArrowDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedShield from './AnimatedShield';

interface HeroSectionProps {
  onStartScan: () => void;
}

const HeroSection = ({ onStartScan }: HeroSectionProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 matrix-bg cyber-grid" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              🛡️ Advanced Threat Detection Active
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Malware
              <br />
              <span className="text-gradient text-neon">Detection System</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Defend against viruses, trojans, ransomware, and more with our 
              cutting-edge malware detection system. Your security is our mission.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onStartScan}
                  size="lg"
                  className="bg-gradient-cyber text-primary-foreground font-semibold btn-glow px-8 h-14 text-lg group"
                >
                  <Scan className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Start Scanning
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('overview')}
                  className="border-primary/50 hover:bg-primary/10 h-14 text-lg px-8 group"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '99.9%', label: 'Detection Rate' },
                { value: '1M+', label: 'Scans Daily' },
                { value: '<1s', label: 'Scan Speed' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-neon">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Animated Shield */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <AnimatedShield status="idle" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            onClick={() => scrollToSection('overview')}
          >
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
