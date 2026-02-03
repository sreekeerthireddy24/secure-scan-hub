import { motion } from 'framer-motion';
import { Code2, Server, Database, Layers, Cpu, Globe } from 'lucide-react';

const technologies = [
  {
    icon: Code2,
    name: 'HTML & CSS',
    color: 'text-orange-400',
    description: 'The foundation of our interface. HTML structures content while CSS brings it to life with stunning animations and responsive designs.',
  },
  {
    icon: Layers,
    name: 'JavaScript',
    color: 'text-yellow-400',
    description: 'Powers all interactive elements—from animated scanning effects to real-time validation and dynamic content updates.',
  },
  {
    icon: Globe,
    name: 'React.js',
    color: 'text-cyan-400',
    description: 'A component-based library that creates fast, reusable UI elements. Makes our interface smooth and maintainable.',
  },
  {
    icon: Server,
    name: 'Python Flask',
    color: 'text-green-400',
    description: 'Our backend engine. Flask handles file uploads, runs malware analysis algorithms, and returns security verdicts.',
  },
  {
    icon: Database,
    name: 'MySQL',
    color: 'text-blue-400',
    description: 'Securely stores user data, scan history, and threat signatures. Enables quick lookups and audit trails.',
  },
  {
    icon: Cpu,
    name: 'ML Algorithms',
    color: 'text-purple-400',
    description: 'Machine learning models analyze file patterns and behaviors to detect zero-day threats traditional signatures miss.',
  },
];

const TechnologySection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="technology">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-4">
            <Cpu className="w-4 h-4" />
            Under the Hood
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built with <span className="text-gradient">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A powerful combination of frontend and backend technologies 
            working together to keep you protected.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto p-8 rounded-2xl glass border border-border/50">
            {/* Flow diagram */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* User */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <p className="text-sm font-semibold">User Browser</p>
                <p className="text-xs text-muted-foreground">React + CSS</p>
              </div>

              {/* Arrow */}
              <motion.div
                className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-primary to-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-primary to-accent" />

              {/* API */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <Server className="w-10 h-10 text-secondary" />
                </div>
                <p className="text-sm font-semibold">Flask API</p>
                <p className="text-xs text-muted-foreground">Python Backend</p>
              </div>

              {/* Arrow */}
              <motion.div
                className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-secondary to-warning"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
              <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-secondary to-warning" />

              {/* Database */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Database className="w-10 h-10 text-accent" />
                </div>
                <p className="text-sm font-semibold">MySQL DB</p>
                <p className="text-xs text-muted-foreground">Secure Storage</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              Files and URLs flow from your browser → through our analysis API → results stored securely
            </p>
          </div>
        </motion.div>

        {/* Technology cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl glass border border-border/50 card-cyber">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-muted ${tech.color}`}>
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
