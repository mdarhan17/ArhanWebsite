import { motion } from 'framer-motion';

export default function HeroBackground({ isLight }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* BASE BACKGROUND */}
      <div
        className={`absolute inset-0 transition-colors duration-500
          ${isLight ? 'bg-white' : 'bg-black'}
        `}
      />

      {/* MAIN FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full blur-[160px]"
        style={{
          background: isLight
            ? 'rgba(249,115,22,0.35)'   // orange
            : 'rgba(59,130,246,0.35)', // blue
        }}
      />

      {/* SECOND GLOW */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] rounded-full blur-[180px]"
        style={{
          background: isLight
            ? 'rgba(250,204,21,0.30)'   // yellow
            : 'rgba(34,211,238,0.25)', // cyan
        }}
      />
    </div>
  );
}
