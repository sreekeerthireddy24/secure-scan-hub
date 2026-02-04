import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, ChevronDown, ChevronUp, Cpu, Code2, Server, Database, Layers, Globe, Settings, FileSearch, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HelpItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}

const detectionSteps = [
  { step: 1, title: 'User uploads a file or enters website data', icon: FileSearch },
  { step: 2, title: 'System extracts file features', icon: Settings },
  { step: 3, title: 'Hash values and patterns are analyzed', icon: Cpu },
  { step: 4, title: 'Comparison with known malware signatures', icon: Database },
  { step: 5, title: 'Classification as safe or malicious', icon: Shield },
  { step: 6, title: 'Result displayed clearly to the user', icon: Lock },
];

const detectionTechniques = [
  'Static file analysis - Examining file structure without execution',
  'Signature-based detection - Matching against known malware patterns',
  'Rule-based suspicious pattern checking - Identifying dangerous code patterns',
  'File structure inspection - Analyzing headers and metadata',
];

const technologies = [
  { name: 'HTML', desc: 'Page structure and semantic markup', icon: Code2, color: 'text-orange-400' },
  { name: 'CSS', desc: 'Design, animations, and responsive layouts', icon: Layers, color: 'text-blue-400' },
  { name: 'JavaScript', desc: 'Popups, scanning effects, and dynamic results', icon: Globe, color: 'text-yellow-400' },
  { name: 'PHP', desc: 'Website logic and request handling', icon: Server, color: 'text-purple-400' },
  { name: 'Python', desc: 'Malware detection and file analysis', icon: Cpu, color: 'text-green-400' },
  { name: 'MySQL', desc: 'User data and scan result storage', icon: Database, color: 'text-cyan-400' },
];

const HelpBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const helpItems: HelpItem[] = [
    {
      id: 'how-it-works',
      question: 'How does the detection system work?',
      icon: Settings,
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm mb-4">
            Our malware detection system follows a systematic approach to analyze files and URLs:
          </p>
          <div className="space-y-3">
            {detectionSteps.map((step) => (
              <div key={step.step} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">{step.step}</span>
                </div>
                <div className="flex items-center gap-2">
                  <step.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'detection-techniques',
      question: 'What detection techniques are used?',
      icon: Cpu,
      answer: (
        <div className="space-y-3">
          <p className="text-muted-foreground text-sm mb-4">
            We employ multiple layers of analysis to detect threats:
          </p>
          {detectionTechniques.map((technique, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground">{technique}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'technologies',
      question: 'What technologies/languages are used?',
      icon: Code2,
      answer: (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">Frontend:</h4>
            <div className="grid grid-cols-1 gap-2">
              {technologies.slice(0, 3).map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <tech.icon className={`w-5 h-5 ${tech.color}`} />
                  <div>
                    <span className={`font-medium ${tech.color}`}>{tech.name}</span>
                    <span className="text-muted-foreground text-sm"> – {tech.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Backend:</h4>
            <div className="grid grid-cols-1 gap-2">
              {technologies.slice(3).map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <tech.icon className={`w-5 h-5 ${tech.color}`} />
                  <div>
                    <span className={`font-medium ${tech.color}`}>{tech.name}</span>
                    <span className="text-muted-foreground text-sm"> – {tech.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Floating Help Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-cyber flex items-center justify-center btn-glow shadow-lg"
      >
        <HelpCircle className="w-7 h-7 text-primary-foreground" />
      </motion.button>

      {/* Help Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed bottom-0 left-0 right-0 z-50 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full"
            >
              <div className="glass rounded-t-2xl md:rounded-2xl p-6 max-h-[80vh] overflow-y-auto border border-border/50">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">Help Center</h2>
                      <p className="text-sm text-muted-foreground">Any further queries?</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Help Items */}
                <div className="space-y-4">
                  {helpItems.map((item) => (
                    <div key={item.id} className="rounded-xl border border-border/50 overflow-hidden">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-muted/30 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">{item.question}</span>
                        </div>
                        {expandedItems.includes(item.id) ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedItems.includes(item.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 border-t border-border/50">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <p className="text-sm text-muted-foreground text-center">
                    Still have questions? Contact our support team for assistance.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HelpBox;
