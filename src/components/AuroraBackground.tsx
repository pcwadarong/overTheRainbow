import { motion } from 'framer-motion';

interface AuroraBackgroundProps {
  children: React.ReactNode;
}

const AuroraBackground = ({ children }: AuroraBackgroundProps) => {
  return (
    <main className="relative w-screen h-screen flex justify-center items-center bg-green transition-bg">
      <motion.div className="absolute inset-0 overflow-hidden">
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[rgb(99,177,255)] to-transparent opacity-90 blur-[70px] bg-[length:200%]"
          style={{ borderRadius: '20% 50% 30% 50%' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 15, -15, 0],
            x: ['-50%', '-50%', '20%'],
            y: ['0%', '10%', '-10%'],
          }}
          transition={{
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />

        <motion.div
          className="absolute inset-0 h-2/3 w-4/5 bg-gradient-to-tr from-[#ff88ef] to-transparent opacity-70 blur-[50px] bg-[length:120%]"
          style={{ borderRadius: '40% 30% 50% 60%' }}
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -20, 20, 0],
            x: ['0%', '15%', '-15%'],
            y: ['0%', '-10%', '10%'],
          }}
          transition={{
            duration: 15,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />

<motion.div
          className="absolute inset-0 h-2/3 w-4/5 bg-gradient-to-bl from-[#ff95cc] to-transparent opacity-70 blur-[50px] bg-[length:120%]"
          style={{ borderRadius: '40% 30% 50% 60%' }}
          animate={{
            scale: [1, 0.9, 1],
            rotate: [0, -20, 20, 0],
            x: ['20%', '20%', '-20%'],
            y: ['50%', '-20%', '20%'],
          }}
          transition={{
            duration: 25,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />

        <motion.div
          className="absolute inset-0 h-1/2 w-2/3 bg-gradient-to-tl from-[#f8ffbd] to-transparent opacity-60 blur-[20px] bg-[length:150%]"
          style={{ borderRadius: '50% 25% 30% 45%' }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 25, -25, 0],
            x: ['0%', '-15%', '15%'],
            y: ['0%', '15%', '-15%'],
          }}
          transition={{
            duration: 30,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />

        <motion.div
          className="absolute inset-0 w-3/4 h-3/4 bg-gradient-to-br from-[#4de1ff] to-transparent opacity-50 blur-[25px] bg-[length:140%]"
          style={{ borderRadius: '30% 40% 20% 60%' }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -10, 10, 0],
            x: ['0%', '20%', '-20%'],
            y: ['0%', '-15%', '15%'],
          }}
          transition={{
            duration: 35,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />

        <motion.div
          className="absolute inset-0 w-2/3 h-3/4 bg-gradient-to-b from-[#c3ffc9] to-transparent opacity-80 blur-[65px] bg-[length:130%]"
          style={{ borderRadius: '25% 60% 40% 20%' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 15, -15, 0],
            x: ['60%', '20%', '60%'],
            y: ['80%', '40%', '50%'],
          }}
          transition={{
            duration: 40,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />

<motion.div
          className="absolute inset-0 w-2/3 h-3/4 bg-gradient-to-t from-[#f9b997] to-transparent opacity-50 blur-[70px] bg-[length:170%]"
          style={{ borderRadius: '25% 60% 40% 60%' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 15, -15, 0],
            x: ['0%', '30%', '20%'],
            y: ['70%', '80%', '50%'],
          }}
          transition={{
            duration: 40,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />

        <motion.div
          className="absolute inset-0 w-3/5 h-3/5 bg-gradient-to-bl from-[#ffddc1] to-transparent opacity-40 blur-[25px] bg-[length:160%]"
          style={{ borderRadius: '35% 45% 50% 40%' }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -15, 15, 0],
            x: ['0%', '10%', '-10%'],
            y: ['0%', '-5%', '5%'],
          }}
          transition={{
            duration: 50,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </motion.div>

      <div className="relative flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;
