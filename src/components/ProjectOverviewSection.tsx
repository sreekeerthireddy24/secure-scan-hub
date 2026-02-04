import { motion } from 'framer-motion';
import { Shield, FileSearch, Lock, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: FileSearch,
    title: 'Safe File Analysis',
    description: 'Files are analyzed without execution, ensuring your system remains protected during scanning.',
  },
  {
    icon: Shield,
    title: 'Threat Identification',
    description: 'Identify harmful files and potential security threats before they cause any damage.',
  },
  {
    icon: Lock,
    title: 'Privacy Protected',
    description: 'Your files and data are processed securely with complete privacy protection.',
  },
  {
    icon: CheckCircle2,
    title: 'Clear Results',
    description: 'Receive easy-to-understand results that help you make informed security decisions.',
  },
];

const ProjectOverviewSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="overview">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            <Shield className="w-4 h-4" />
            Project Overview
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            📌 Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            This Malware Detection Website is designed to help users identify harmful files 
            and potential security threats before they cause damage. The system analyzes files 
            safely without execution and provides clear results to protect users from cyber risks.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl glass border border-border/50 card-cyber text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
