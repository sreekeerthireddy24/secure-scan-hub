import { motion } from 'framer-motion';
import { Shield, Lock, ShieldCheck } from 'lucide-react';

interface AnimatedShieldProps {
  status?: 'idle' | 'scanning' | 'safe' | 'threat';
}

const AnimatedShield = ({ status = 'idle' }: AnimatedShieldProps) => {
  const getShieldColor = () => {
    switch (status) {
      case 'scanning':
        return 'text-primary';
      case 'safe':
        return 'text-success';
      case 'threat':
        return 'text-destructive';
      default:
        return 'text-primary';
    }
  };

  const getGlowClass = () => {
    switch (status) {
      case 'scanning':
        return 'pulse-glow';
      case 'safe':
        return 'success-glow';
      case 'threat':
        return 'danger-pulse';
      default:
        return '';
    }
  };

  return (
    <div className="relative">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width: '100%', height: '100%' }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute rounded-full border border-primary/20"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
      />

      {/* Shield container */}
      <motion.div
        className={`relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center rounded-full glass ${getGlowClass()}`}
        animate={status === 'scanning' ? { rotate: 360 } : {}}
        transition={{
          duration: 4,
          repeat: status === 'scanning' ? Infinity : 0,
          ease: 'linear',
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />

        {/* Shield icon */}
        <motion.div
          animate={
            status === 'idle'
              ? { y: [0, -5, 0] }
              : status === 'safe'
              ? { scale: [1, 1.1, 1] }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {status === 'safe' ? (
            <ShieldCheck className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 ${getShieldColor()} shield-glow`} />
          ) : (
            <Shield className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 ${getShieldColor()} shield-glow`} />
          )}
        </motion.div>

        {/* Lock icon overlay */}
        <motion.div
          className="absolute bottom-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Lock className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      {/* Scanning line */}
      {status === 'scanning' && (
        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ width: '160px' }}
        />
      )}
    </div>
  );
};

export default AnimatedShield;
