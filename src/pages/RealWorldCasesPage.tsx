import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Building, User, GraduationCap, FlaskConical, Download, Globe, AlertTriangle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MatrixRain from '@/components/MatrixRain';

const useCases = [
  {
    icon: User,
    title: 'Personal Computer Safety',
    description: 'Everyday users rely on malware detection to protect their personal files, photos, and sensitive documents from cyber threats.',
    details: [
      'Scan downloaded files before opening',
      'Protect family photos and documents',
      'Secure online banking activities',
      'Prevent identity theft',
    ],
  },
  {
    icon: Download,
    title: 'Secure Downloads',
    description: 'Before installing any software or opening email attachments, malware scanning ensures the files are safe to use.',
    details: [
      'Verify software installers',
      'Check email attachments',
      'Validate files from USB drives',
      'Scan files shared via cloud services',
    ],
  },
  {
    icon: Building,
    title: 'Small Business Protection',
    description: 'Small businesses are prime targets for cybercriminals. Malware detection helps protect customer data and business operations.',
    details: [
      'Protect customer information',
      'Secure financial records',
      'Prevent ransomware attacks',
      'Maintain business continuity',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Educational Cybersecurity Labs',
    description: 'Academic institutions use malware detection systems to teach students about cybersecurity threats and defense mechanisms.',
    details: [
      'Learn malware analysis techniques',
      'Study threat detection methods',
      'Practice incident response',
      'Research new security solutions',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Testing Unknown Files',
    description: 'Security researchers and IT professionals use malware scanners to safely analyze suspicious files without risking their systems.',
    details: [
      'Analyze suspicious samples',
      'Verify file integrity',
      'Test security measures',
      'Create threat intelligence',
    ],
  },
];

const realWorldAttacks = [
  {
    name: 'WannaCry Ransomware (2017)',
    impact: 'Affected 200,000+ computers across 150 countries',
    description: 'One of the most devastating ransomware attacks in history. WannaCry exploited a Windows vulnerability to spread rapidly across networks, encrypting files and demanding Bitcoin payments. It caused billions of dollars in damages and affected hospitals, businesses, and government agencies worldwide.',
    lesson: 'Always keep your operating system and software updated with the latest security patches.',
  },
  {
    name: 'NotPetya Attack (2017)',
    impact: 'Caused over $10 billion in global damages',
    description: 'Initially disguised as ransomware, NotPetya was actually a destructive wiper designed to cause maximum damage. It spread through a compromised Ukrainian accounting software and affected major corporations including Maersk, FedEx, and Merck.',
    lesson: 'Be cautious about software updates from third-party sources and implement network segmentation.',
  },
  {
    name: 'SolarWinds Supply Chain Attack (2020)',
    impact: 'Compromised 18,000+ organizations including US government agencies',
    description: 'Attackers inserted malicious code into SolarWinds software updates, which were then distributed to thousands of organizations. This sophisticated attack remained undetected for months, demonstrating the danger of supply chain vulnerabilities.',
    lesson: 'Implement zero-trust security models and monitor for unusual network activity.',
  },
  {
    name: 'Colonial Pipeline Ransomware (2021)',
    impact: 'Shut down the largest fuel pipeline in the United States',
    description: 'A ransomware attack forced Colonial Pipeline to halt operations, causing fuel shortages across the Eastern United States. The company paid $4.4 million in ransom, highlighting the critical infrastructure vulnerabilities.',
    lesson: 'Critical infrastructure requires robust security measures and incident response plans.',
  },
];

const statistics = [
  { value: '560,000+', label: 'New malware detected daily' },
  { value: '$6 Trillion', label: 'Annual cybercrime cost by 2025' },
  { value: '94%', label: 'Malware delivered via email' },
  { value: '11 Seconds', label: 'Ransomware attack frequency' },
];

const RealWorldCasesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixRain />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <h1 className="text-xl font-bold text-gradient">Real-World Cases</h1>
        </div>
      </header>

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-warning mb-4">
              <Globe className="w-4 h-4" />
              Real-World Impact
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              🌍 Real-World <span className="text-gradient">Use Cases</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Malware detection isn't just for cybersecurity experts—it's essential 
              for everyone. See how our detection system protects users in various scenarios.
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl glass border border-primary/30 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary text-neon mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Use Cases */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              <Shield className="inline w-6 h-6 mr-2 text-primary" />
              Protection <span className="text-gradient">Scenarios</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full p-6 rounded-xl glass border border-border/50 card-cyber"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Real World Attacks */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              <AlertTriangle className="inline w-6 h-6 mr-2 text-destructive" />
              Notable <span className="text-gradient">Cyber Attacks</span>
            </h2>
            <div className="space-y-6">
              {realWorldAttacks.map((attack, index) => (
                <motion.div
                  key={attack.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-8 border border-destructive/30"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <h3 className="text-xl font-bold text-destructive mb-2">{attack.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-warning mb-4">
                        <TrendingUp className="w-4 h-4" />
                        {attack.impact}
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <p className="text-muted-foreground mb-4">{attack.description}</p>
                      <div className="p-4 rounded-lg bg-success/10 border border-success/30">
                        <p className="text-sm">
                          <span className="font-semibold text-success">Lesson Learned: </span>
                          <span className="text-muted-foreground">{attack.lesson}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="bg-gradient-cyber text-primary-foreground font-semibold btn-glow px-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default RealWorldCasesPage;
