import { motion } from 'framer-motion';
import { Shield, RefreshCw, Lock, Eye, AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';

const tips = [
  {
    icon: Shield,
    title: 'Keep Software Updated',
    description: 'Regularly update your operating system and applications. Updates often include critical security patches.',
    gradient: 'from-primary/20 to-transparent',
  },
  {
    icon: Lock,
    title: 'Use Strong Passwords',
    description: 'Create unique, complex passwords for each account. Consider using a password manager.',
    gradient: 'from-secondary/20 to-transparent',
  },
  {
    icon: Eye,
    title: 'Be Wary of Phishing',
    description: "Don't click suspicious links or download attachments from unknown senders. Verify before you trust.",
    gradient: 'from-accent/20 to-transparent',
  },
  {
    icon: RefreshCw,
    title: 'Backup Regularly',
    description: 'Maintain regular backups of important data. This is your best defense against ransomware.',
    gradient: 'from-warning/20 to-transparent',
  },
  {
    icon: AlertTriangle,
    title: 'Avoid Suspicious Websites',
    description: 'Only visit trusted websites. Look for HTTPS and avoid clicking on suspicious ads or popups.',
    gradient: 'from-destructive/20 to-transparent',
  },
  {
    icon: CheckCircle2,
    title: 'Use Antivirus Tools',
    description: 'Install reputable antivirus software and keep it updated for real-time protection.',
    gradient: 'from-success/20 to-transparent',
  },
];

const limitations = [
  'Static analysis may miss hidden or encrypted malware',
  'New malware (zero-day) requires updated signatures',
  'User data must be securely stored and protected',
  'Results are advisory, not absolute guarantees',
];

const SecurityTipsSection = () => {
  return (
    <section id="security-tips" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-secondary mb-4">
            <Sparkles className="w-4 h-4" />
            Stay Protected
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            🔐 Cybersecurity <span className="text-gradient">Tips</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow these essential tips to keep yourself and your data safe 
            in the ever-evolving digital landscape.
          </p>
        </motion.div>

        {/* Tips grid with animated cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group perspective-1000"
            >
              <div className={`h-full p-6 rounded-xl glass border border-border/50 relative overflow-hidden`}>
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tip.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-start gap-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <tip.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethical Considerations & Limitations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl glass border border-warning/30 bg-warning/5 relative overflow-hidden">
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(var(--warning) / 0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['100% 0', '-100% 0'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AlertTriangle className="w-8 h-8 text-warning flex-shrink-0" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    ⚖️ Ethical Considerations & Limitations
                  </h3>
                  <p className="text-muted-foreground">
                    While our malware detection system is highly effective, it's important to understand its limitations.
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {limitations.map((limitation, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-warning flex-shrink-0" />
                    <span className="text-muted-foreground">{limitation}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityTipsSection;
