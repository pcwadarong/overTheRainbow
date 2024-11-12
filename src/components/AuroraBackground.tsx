import { motion } from 'framer-motion';

const auroraSettings = [
  {
    className: 'from-[rgb(99,177,255)] to-transparent opacity-90 blur-[70px] bg-[length:200%]',
    borderRadius: '20% 50% 30% 50%',
    scale: [1, 1.3, 1],
    rotate: [0, 15, -15, 0],
    x: ['-50%', '-50%', '20%'],
    y: ['0%', '10%', '-10%'],
    duration: 10,
  },
  {
    className: 'from-[#ff88ef] to-transparent opacity-70 blur-[50px] bg-[length:120%]',
    borderRadius: '40% 30% 50% 60%',
    scale: [1, 0.8, 1],
    rotate: [0, -20, 20, 0],
    x: ['0%', '15%', '-15%'],
    y: ['0%', '-10%', '10%'],
    duration: 15,
  },
  {
    className: 'from-[#ff95cc] to-transparent opacity-70 blur-[50px] bg-[length:120%]',
    borderRadius: '40% 30% 50% 60%',
    scale: [1, 0.9, 1],
    rotate: [0, -20, 20, 0],
    x: ['20%', '20%', '-20%'],
    y: ['50%', '-20%', '20%'],
    duration: 25,
  },
  {
    className: 'from-[#f8ffbd] to-transparent opacity-60 blur-[20px] bg-[length:150%]',
    borderRadius: '50% 25% 30% 45%',
    scale: [1, 1.1, 1],
    rotate: [0, 25, -25, 0],
    x: ['0%', '-15%', '15%'],
    y: ['0%', '15%', '-15%'],
    duration: 30,
  },
  {
    className: 'from-[#4de1ff] to-transparent opacity-50 blur-[25px] bg-[length:140%]',
    borderRadius: '30% 40% 20% 60%',
    scale: [1, 1.15, 1],
    rotate: [0, -10, 10, 0],
    x: ['0%', '20%', '-20%'],
    y: ['0%', '-15%', '15%'],
    duration: 35,
  },
  {
    className: 'from-[#c3ffc9] to-transparent opacity-80 blur-[65px] bg-[length:130%]',
    borderRadius: '25% 60% 40% 20%',
    scale: [1, 1.3, 1],
    rotate: [0, 15, -15, 0],
    x: ['60%', '20%', '60%'],
    y: ['80%', '40%', '50%'],
    duration: 40,
  },
  {
    className: 'from-[#f9b997] to-transparent opacity-50 blur-[70px] bg-[length:170%]',
    borderRadius: '25% 60% 40% 60%',
    scale: [1, 1.3, 1],
    rotate: [0, 15, -15, 0],
    x: ['0%', '30%', '20%'],
    y: ['70%', '80%', '50%'],
    duration: 40,
  },
  {
    className: 'from-[#ffddc1] to-transparent opacity-40 blur-[25px] bg-[length:160%]',
    borderRadius: '35% 45% 50% 40%',
    scale: [1, 1.15, 1],
    rotate: [0, -15, 15, 0],
    x: ['0%', '10%', '-10%'],
    y: ['0%', '-5%', '5%'],
    duration: 50,
  },
];

const AuroraBackground = () => {
  return (
    <main className="relative w-screen h-screen flex justify-center items-center bg-green transition-bg">
      <motion.div className="absolute inset-0 overflow-hidden">
        {auroraSettings.map((settings, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 ${settings.className}`}
            style={{ borderRadius: settings.borderRadius }}
            animate={{
              scale: settings.scale,
              rotate: settings.rotate,
              x: settings.x,
              y: settings.y,
            }}
            transition={{
              duration: settings.duration,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        ))}
      </motion.div>
    </main>
  );
};

export default AuroraBackground;
