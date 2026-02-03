import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldX, AlertTriangle, CheckCircle2, XCircle, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

interface ScanResultsProps {
  isVisible: boolean;
  result: 'safe' | 'threat' | null;
  scanType: 'file' | 'url';
  targetName: string;
  onClose: () => void;
  threatDetails?: {
    type: string;
    severity: string;
    description: string;
  };
}

const ScanResults = ({
  isVisible,
  result,
  scanType,
  targetName,
  onClose,
  threatDetails,
}: ScanResultsProps) => {
  useEffect(() => {
    if (isVisible && result === 'safe') {
      // Trigger confetti celebration
      const duration = 3000;
      const animationEnd = Date.now() + duration;

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: randomInRange(0.1, 0.9),
            y: Math.random() - 0.2,
          },
          colors: ['#00f5ff', '#00ff88', '#a855f7'],
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isVisible, result]);

  if (!result) return null;

  const isSafe = result === 'safe';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className={`relative w-full max-w-md mx-4 p-8 rounded-2xl glass border-2 ${
              isSafe ? 'border-success/50' : 'border-destructive/50'
            }`}
          >
            {/* Background glow */}
            <div
              className={`absolute inset-0 rounded-2xl ${
                isSafe ? 'bg-success/5' : 'bg-destructive/5'
              }`}
            />

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isSafe ? 'bg-success/20' : 'bg-destructive/20'
                } ${isSafe ? 'success-glow' : 'danger-pulse'}`}
              >
                {isSafe ? (
                  <ShieldCheck className="w-12 h-12 text-success" />
                ) : (
                  <ShieldX className="w-12 h-12 text-destructive" />
                )}
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-3xl font-bold mb-2 ${
                  isSafe ? 'text-success text-neon-green' : 'text-destructive'
                }`}
              >
                {isSafe ? 'Hurray! All Clear!' : 'Threat Detected!'}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground mb-6"
              >
                {isSafe
                  ? 'Your system is safe. No malware or threats were found.'
                  : 'Your file or system may be at risk. Immediate action required.'}
              </motion.p>

              {/* Target info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-4 rounded-lg bg-muted/30 mb-6"
              >
                <p className="text-sm text-muted-foreground mb-1">
                  Scanned {scanType === 'file' ? 'File' : 'URL'}:
                </p>
                <p className="font-mono text-sm text-foreground truncate">
                  {targetName}
                </p>
              </motion.div>

              {/* Threat details */}
              {!isSafe && threatDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 mb-6 text-left"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-destructive mb-1">
                        {threatDetails.type}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Severity: <span className="text-destructive font-semibold">{threatDetails.severity}</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {threatDetails.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Safe checkmarks */}
              {isSafe && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-3 mb-6"
                >
                  {['No Viruses', 'No Trojans', 'No Ransomware', 'No Spyware'].map(
                    (item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        {item}
                      </motion.div>
                    )
                  )}
                </motion.div>
              )}

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col gap-3"
              >
                {!isSafe && (
                  <Button className="w-full h-12 bg-gradient-danger text-destructive-foreground font-semibold">
                    <XCircle className="w-5 h-5 mr-2" />
                    Remove Threat
                  </Button>
                )}
                <Button
                  variant={isSafe ? 'default' : 'outline'}
                  onClick={onClose}
                  className={`w-full h-12 ${
                    isSafe
                      ? 'bg-gradient-success text-success-foreground font-semibold'
                      : ''
                  }`}
                >
                  {isSafe ? (
                    <>
                      <PartyPopper className="w-5 h-5 mr-2" />
                      Continue Browsing
                    </>
                  ) : (
                    'Close'
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScanResults;
