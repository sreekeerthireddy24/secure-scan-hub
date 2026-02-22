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
          {/* Danger Alert Animation for Threat */}
          {!isSafe && (
            <>
              {/* Pulsing red overlay */}
              <motion.div
                className="absolute inset-0 bg-destructive/10"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              {/* Red border flash */}
              <motion.div
                className="absolute inset-4 border-4 border-destructive/50 rounded-3xl"
                animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </>
          )}

          {/* Success glow for safe */}
          {isSafe && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                background: 'radial-gradient(circle at center, hsl(var(--success) / 0.1) 0%, transparent 70%)',
              }}
            />
          )}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className={`relative w-full max-w-lg mx-4 p-4 sm:p-6 md:p-8 rounded-2xl glass border-2 ${
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
              {/* Icon with animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center ${
                  isSafe ? 'bg-success/20' : 'bg-destructive/20'
                } ${isSafe ? 'success-glow' : 'danger-pulse'}`}
              >
                {isSafe ? (
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-success" />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <ShieldX className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-destructive" />
                  </motion.div>
                )}
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 ${
                  isSafe ? 'text-success text-neon-green' : 'text-destructive'
                }`}
              >
                {isSafe ? '✅ Hurray! Your System is Safe!' : '⚠️ Warning! Threat Detected!'}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base md:text-lg"
              >
                {isSafe
                  ? 'No malware or security threats were found. You can continue safely.'
                  : 'The scanned file or system is potentially malicious. Immediate action required!'}
              </motion.p>

              {/* Target info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`p-4 rounded-lg mb-6 ${isSafe ? 'bg-success/10 border border-success/30' : 'bg-destructive/10 border border-destructive/30'}`}
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
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                    </motion.div>
                    <div>
                      <p className="font-bold text-destructive text-lg mb-1">
                        {threatDetails.type}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Severity: <span className="text-destructive font-bold">{threatDetails.severity}</span>
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
                        className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-success/10"
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
                transition={{ delay: 0.9 }}
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
                  onClick={() => {
                    onClose();
                    if (!isSafe) {
                      setTimeout(() => {
                        const tipsSection = document.getElementById('security-tips');
                        if (tipsSection) {
                          tipsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 300);
                    }
                  }}
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
                    'Continue Browsing'
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
