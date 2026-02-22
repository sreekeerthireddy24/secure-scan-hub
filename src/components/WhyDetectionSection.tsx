import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Zap, Brain, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reasons = [
  {
    icon: Shield,
    title: 'Protects Sensitive Data',
    description: 'Keep your personal information, passwords, and financial data safe from cybercriminals.',
    stat: '94%',
    statLabel: 'of breaches preventable',
  },
  {
    icon: Lock,
    title: 'Prevents System Damage',
    description: 'Stop malware before it corrupts your files, crashes your system, or holds your data hostage.',
    stat: '$4.24M',
    statLabel: 'avg. breach cost',
  },
  {
    icon: Zap,
    title: 'Stops Attacks Early',
    description: 'Early detection is critical. The faster you identify threats, the less damage they can cause.',
    stat: '287 days',
    statLabel: 'avg. detection time',
  },
  {
    icon: Brain,
    title: 'Digital Safety Awareness',
    description: 'Understanding threats empowers you to make better security decisions in your digital life.',
    stat: '95%',
    statLabel: 'human error factor',
  },
];

const WhyDetectionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden" id="why-detection">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-secondary mb-4">
            <TrendingUp className="w-4 h-4" />
            Why It Matters
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            🔍 Why <span className="text-gradient">Malware Detection</span> is Important
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In today's digital landscape, cyber threats are more sophisticated than ever. 
            Here's why proactive malware detection is essential for everyone.
          </p>
        </motion.div>

        {/* Reasons grid with stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl glass border border-border/50 card-cyber">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <reason.icon className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                  </motion.div>
                    <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">{reason.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-primary text-neon">{reason.stat}</span>
                      <span className="text-sm text-muted-foreground">{reason.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate('/real-world-cases')}
              size="lg"
              className="bg-gradient-cyber text-primary-foreground font-semibold btn-glow px-8 h-14 text-lg group"
            >
              Know More About Real-World Use Cases
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDetectionSection;
