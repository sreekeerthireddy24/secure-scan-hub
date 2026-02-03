import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Globe, AlertTriangle, CheckCircle2 } from 'lucide-react';

const tips = [
  {
    icon: Shield,
    title: 'Keep Software Updated',
    description:
      'Regularly update your operating system and applications. Updates often include critical security patches.',
  },
  {
    icon: Lock,
    title: 'Use Strong Passwords',
    description:
      'Create unique, complex passwords for each account. Consider using a password manager.',
  },
  {
    icon: Eye,
    title: 'Be Wary of Phishing',
    description:
      "Don't click suspicious links or download attachments from unknown senders. Verify before you trust.",
  },
  {
    icon: Globe,
    title: 'Secure Your Network',
    description:
      'Use encrypted Wi-Fi, avoid public networks for sensitive tasks, and consider using a VPN.',
  },
  {
    icon: AlertTriangle,
    title: 'Backup Regularly',
    description:
      'Maintain regular backups of important data. This is your best defense against ransomware.',
  },
  {
    icon: CheckCircle2,
    title: 'Verify Downloads',
    description:
      'Only download software from official sources. Scan files before opening them.',
  },
];

const SecurityTipsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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
            <Shield className="w-4 h-4" />
            Stay Protected
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Security <span className="text-gradient">Best Practices</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow these essential tips to keep yourself and your data safe 
            in the ever-evolving digital landscape.
          </p>
        </motion.div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl glass border border-border/50 card-cyber">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <tip.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Limitations notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="p-6 rounded-xl glass border border-warning/30 bg-warning/5">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Important Limitations
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  While our malware detection system is highly effective, no security 
                  solution is 100% foolproof. New threats emerge daily, and some sophisticated 
                  malware may evade detection. Always practice safe browsing habits and maintain 
                  multiple layers of security. This tool should complement, not replace, your 
                  existing security measures.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityTipsSection;
