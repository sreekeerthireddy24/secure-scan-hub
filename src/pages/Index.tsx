import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import MatrixRain from '@/components/MatrixRain';
import EntryModal from '@/components/EntryModal';
import HeroSection from '@/components/HeroSection';
import ProjectOverviewSection from '@/components/ProjectOverviewSection';
import MalwareTypesSection from '@/components/MalwareTypesSection';
import WhyDetectionSection from '@/components/WhyDetectionSection';
import ScanSection from '@/components/ScanSection';
import ScanningOverlay from '@/components/ScanningOverlay';
import ScanResults from '@/components/ScanResults';
import SecurityTipsSection from '@/components/SecurityTipsSection';
import Footer from '@/components/Footer';
import HelpBox from '@/components/HelpBox';

interface UserData {
  name: string;
  phone: string;
  email: string;
}

const Index = () => {
  const [showEntryModal, setShowEntryModal] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanType, setScanType] = useState<'file' | 'url'>('file');
  const [scanTarget, setScanTarget] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [scanResult, setScanResult] = useState<'safe' | 'threat' | null>(null);

  // Show entry modal after 15 seconds
  useEffect(() => {
    if (hasSeenModal) return;

    const timer = setTimeout(() => {
      setShowEntryModal(true);
      setHasSeenModal(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, [hasSeenModal]);

  const handleEntryComplete = (data: UserData) => {
    setUserData(data);
    setShowEntryModal(false);
  };

  const handleStartScan = useCallback((type: 'file' | 'url', data: File | string) => {
    setScanType(type);
    setScanTarget(type === 'file' ? (data as File).name : (data as string));
    setIsScanning(true);
    setScanProgress(0);
    setShowResults(false);
    setScanResult(null);
  }, []);

  // Simulate scanning progress
  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          // Randomly determine result (80% safe, 20% threat for demo)
          const isSafe = Math.random() > 0.2;
          setScanResult(isSafe ? 'safe' : 'threat');
          setShowResults(true);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isScanning]);

  const scrollToScan = () => {
    const scanSection = document.getElementById('scan');
    if (scanSection) {
      scanSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Entry modal - shows after 15 seconds */}
      {showEntryModal && <EntryModal onComplete={handleEntryComplete} />}

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onStartScan={scrollToScan} />

        {/* Project Overview Section */}
        <ProjectOverviewSection />

        {/* Malware Types Section */}
        <MalwareTypesSection />

        {/* Why Detection is Important Section */}
        <WhyDetectionSection />

        {/* Scan Section */}
        <ScanSection onScanStart={handleStartScan} isScanning={isScanning} />

        {/* Security Tips Section */}
        <SecurityTipsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Help Box - Floating button with expandable content */}
      <HelpBox />

      {/* Scanning Overlay */}
      <ScanningOverlay
        isVisible={isScanning}
        scanType={scanType}
        targetName={scanTarget}
        progress={Math.min(scanProgress, 100)}
      />

      {/* Scan Results */}
      <ScanResults
        isVisible={showResults}
        result={scanResult}
        scanType={scanType}
        targetName={scanTarget}
        onClose={() => setShowResults(false)}
        threatDetails={
          scanResult === 'threat'
            ? {
                type: 'Trojan.GenericKD.46542365',
                severity: 'High',
                description:
                  'This file contains malicious code that may compromise your system security. It attempts to establish unauthorized network connections.',
              }
            : undefined
        }
      />
    </div>
  );
};

export default Index;
