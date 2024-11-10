import { motion } from 'framer-motion';

interface AuroraBackgroundProps {
  children: React.ReactNode;
}

const AuroraBackground = ({ children }: AuroraBackgroundProps) => {
  return (
    <main className="relative w-screen h-screen flex justify-center items-center bg-green transition-bg">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={{
          backgroundPosition: ['50% 0%', '0% 0%'],
        }}
        transition={{
          duration: 30,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4da9ff] to-transparent opacity-80 blur-[10px] bg-[length:80%]"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#ff88ef] to-transparent opacity-60 blur-[30px] bg-[length:100%]"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#f8ffbd] to-transparent opacity-90 blur-[20px] bg-[length:100%]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#4de1ff] to-transparent opacity-90 blur-[20px] bg-[length:20%]"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#c3ffc9] to-transparent opacity-90 blur-[10px] bg-[length:120%]"></div> */}
      </motion.div>

      {/* 콘텐츠 */}
      <div className="relative flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;
