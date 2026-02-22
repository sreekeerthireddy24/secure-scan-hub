import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Loader2 } from 'lucide-react';

interface ScanningOverlayProps {
  isVisible: boolean;
  scanType: 'file' | 'url';
  targetName: string;
  progress: number;
}

const scanningSteps = [
  'Initializing threat analysis...',
  'Checking virus signatures...',
  'Analyzing behavioral patterns...',
  'Scanning for trojans & worms...',
  'Detecting ransomware indicators...',
  'Verifying against threat database...',
  'Completing security assessment...',
];

const ScanningOverlay = ({ isVisible, scanType, targetName, progress }: ScanningOverlayProps) => {
  const currentStep = Math.min(
    Math.floor((progress / 100) * scanningSteps.length),
    scanningSteps.length - 1
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
        >
          <div className="text-center max-w-md mx-4">
            {/* Animated scanner */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
              </motion.div>

              {/* Middle rotating ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </motion.div>

              {/* Inner pulsing circle */}
              <motion.div
                className="absolute inset-8 rounded-full bg-primary/10 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Shield className="w-16 h-16 text-primary shield-glow" />
                </motion.div>
              </motion.div>

              {/* Scanning line */}
              <motion.div
                className="absolute inset-8 rounded-full overflow-hidden"
                style={{ clipPath: 'inset(0 0 0 0)' }}
              >
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(185 100% 50% / 0.2)',
                    '0 0 40px hsl(185 100% 50% / 0.4)',
                    '0 0 20px hsl(185 100% 50% / 0.2)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Status text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Scanning {scanType === 'file' ? 'File' : 'URL'}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 truncate max-w-xs mx-auto">
                {targetName}
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-4">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-cyber"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>

            <p className="text-lg font-semibold text-primary text-neon mb-2">
              {progress}%
            </p>

            {/* Current step */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-muted-foreground flex items-center justify-center gap-2"
              >
                <Loader2 className="w-4 h-4 animate-spin" />
                {scanningSteps[currentStep]}
              </motion.p>
            </AnimatePresence>

            {/* Security badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center justify-center gap-4 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Real-time Protection
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Deep Scan Active
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScanningOverlay;
