import { motion } from 'framer-motion';

export default function HeroBackground({ isLight }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* BASE BACKGROUND */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isLight ? 'bg-white' : 'bg-black'
        }`}
      />

      {/* CENTER RADIAL GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background: isLight
            ? 'radial-gradient(circle at center, rgba(249,115,22,0.08), transparent 70%)'
            : 'radial-gradient(circle at center, rgba(59,130,246,0.08), transparent 70%)',
        }}
      />

      {/* FLOATING GLOW 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px]"
        style={{
          background: isLight
            ? 'rgba(249,115,22,0.35)'
            : 'rgba(59,130,246,0.35)',
        }}
      />

      {/* FLOATING GLOW 2 */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] rounded-full blur-[200px]"
        style={{
          background: isLight
            ? 'rgba(250,204,21,0.25)'
            : 'rgba(34,211,238,0.22)',
        }}
      />

      {/* FLOATING GLOW 3 */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[60%] left-[20%] w-[300px] h-[300px] rounded-full blur-[140px]"
        style={{
          background: isLight
            ? 'rgba(251,146,60,0.18)'
            : 'rgba(147,197,253,0.18)',
        }}
      />

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${
              isLight ? '#000' : '#fff'
            } 1px, transparent 1px),
            linear-gradient(to bottom, ${
              isLight ? '#000' : '#fff'
            } 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* NOISE TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/noise.png")',
        }}
      />
    </div>
  );
}