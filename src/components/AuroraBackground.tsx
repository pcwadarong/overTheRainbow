import { motion } from 'framer-motion';
import { TargetAndTransition } from 'framer-motion';

import { auroraAnimationConfigs } from '../constants/auroraAnimationConfigs';

interface AuroraLayerProps {
  className: string;
  style: React.CSSProperties;
  animate: TargetAndTransition;
  duration: number;
}

const DEFAULT_TRANSITION = {
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'mirror' as const,
};

const renderAuroraLayer = ({
  className,
  style,
  animate,
  duration,
}: AuroraLayerProps) => (
  <motion.div
    className={className}
    style={style}
    animate={animate}
    transition={{ ...DEFAULT_TRANSITION, duration }}
  />
);

const AuroraBackground = () => (
  <main
    className="absolute inset-0 flex justify-center items-center bg-green overflow-hidden"
    role="img"
    aria-label="Animated aurora background"
  >
    {auroraAnimationConfigs.map((props, index) => (
      <div key={index}>{renderAuroraLayer(props)}</div>
    ))}
  </main>
);

export default AuroraBackground;
