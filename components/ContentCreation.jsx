'use client';

import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

import {
  HiPlay,
  HiSparkles,
} from 'react-icons/hi';

export default function ContentCreation() {

  const stats = [
    {
      number: '100+',
      label: 'Videos',
      icon: HiPlay,
    },
    {
      number: '500K+',
      label: 'Views',
      icon: HiSparkles,
    },
    {
      number: 'Instagram',
      label: 'Reels',
      icon: FaInstagram,
    },
    {
      number: 'YouTube',
      label: 'Tutorials',
      icon: FaYoutube,
    },
  ];

  const reels = [
    {
      title: 'Tech Reel',
      platform: 'Instagram',
      link:
        'https://www.instagram.com/reel/DaFnnDoJQ32/',
    },
    {
      title: 'Coding Tips',
      platform: 'Instagram',
      link:
        'https://www.instagram.com/reel/DaDFyyHJBbN/',
    },
    {
      title: 'Developer Life',
      platform: 'Instagram',
      link:
        'https://www.instagram.com/reel/DZuhhOGSlKo/',
    },
    {
      title: 'Programming',
      platform: 'Instagram',
      link:
        'https://www.instagram.com/reel/DZcLmtDJ5SY/',
    },
    {
      title: 'Tech Content',
      platform: 'Instagram',
      link:
        'https://www.instagram.com/reel/DYli92byvwL/',
    },
    {
      title: 'Developer Reel',
      platform: 'Instagram',
      link:
        'https://www.instagram.com/reel/DZzlvtCh6o0/',
    },
  ];

  const youtubeVideos = [
    {
      title: 'Full Stack Tutorial',
      id: 'KpLcpCv3nas',
    },
    {
      title: 'React Development',
      id: 'vXn7rigeGJs',
    },
    {
      title: 'Programming Guide',
      id: 'gRUoh32j6ZI',
    },
    {
      title: 'Latest Tech Video',
      id: '2qOKGMKnKyc',
    },
  ];

  return (
    <section
      id="content"
      className="section-padding relative overflow-hidden"
    >

      {/* TOP DIVIDER */}

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px"
        style={{
          background:
            'linear-gradient(to right, transparent,var(--accent-primary),transparent)',
        }}
      />

      {/* BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-20 left-10 w-[350px] h-[350px] rounded-full blur-[150px] opacity-20 bg-blue-500/30" />

        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full blur-[170px] opacity-20 bg-purple-500/30" />

        <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full blur-[150px] opacity-20 bg-pink-500/20" />

        <div className="absolute bottom-[20%] left-[20%] w-[250px] h-[250px] rounded-full blur-[120px] opacity-20 bg-cyan-400/20" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold gradient-text mb-5">
            Content Creation
          </h2>

          <p
            className="text-lg max-w-3xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            Creating engaging tech content,
            educational tutorials,
            YouTube videos and Instagram reels
            that inspire developers.
          </p>

        </motion.div>

        {/* STATS */}

        <div className="grid md:grid-cols-4 gap-6 mb-16">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              className="glass rounded-3xl p-8 text-center"
            >

              <item.icon
                className="mx-auto mb-4 text-4xl"
                style={{
                  color: 'var(--accent-primary)',
                }}
              />

              <h3
                className="text-3xl font-bold"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                {item.number}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Featured */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[35px] overflow-hidden mb-20"
        >

          <div className="grid lg:grid-cols-2">

            <div className="p-10 flex flex-col justify-center">

              <span
                className="inline-block px-4 py-2 rounded-full mb-5"
                style={{
                  background: 'var(--gradient-accent)',
                  color: '#fff',
                }}
              >
                ⭐ Featured Creator
              </span>

              <h2 className="text-5xl font-bold gradient-text mb-5">
                Mohammed Arhan
              </h2>

              <p
                className="text-lg leading-8"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                Passionate Full Stack Developer,
                Content Creator,
                AI/ML Enthusiast and Digital Educator
                creating premium technical content.
              </p>

            </div>

            <div className="relative min-h-[350px] flex items-center justify-center bg-gradient-to-br from-blue-500 via-violet-600 to-cyan-500">

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute w-72 h-72 rounded-full border border-white/20"
              />

              <div className="w-44 h-44 rounded-full glass flex items-center justify-center text-7xl">
                🎬
              </div>

            </div>

          </div>

        </motion.div>

              {/* INSTAGRAM REELS */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl font-bold gradient-text mb-10">
            Instagram Reels
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

            {reels.map((reel, index) => (

              <motion.a
                key={index}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  glass
                  rounded-[28px]
                  overflow-hidden
                  group
                  border
                  border-white/10
                  transition-all
                  duration-500
                  hover:border-pink-500/40
                  hover:shadow-[0_0_60px_rgba(236,72,153,.20)]
                "
              >

                {/* Thumbnail */}

                <div className="relative h-72 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 flex items-center justify-center overflow-hidden">

                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                    }}
                    className="absolute w-72 h-72 rounded-full bg-white/10 blur-3xl"
                  />

                  <FaInstagram className="text-7xl text-white relative z-10" />

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center backdrop-blur-sm">

                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">

                      <HiPlay className="text-white text-4xl" />

                    </div>

                  </div>

                </div>

                {/* Content */}

                <div className="p-6">

                  <div className="flex items-center justify-between mb-4">

                    <span className="px-3 py-1 rounded-full text-sm bg-pink-500/20 text-pink-400">
                      Instagram Reel
                    </span>

                    <FaInstagram className="text-pink-500 text-xl" />

                  </div>

                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    {reel.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Tap to watch this reel on Instagram.
                  </p>

                </div>

              </motion.a>

            ))}

          </div>

        </motion.div>

                {/* YOUTUBE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl font-bold gradient-text mb-10">
            YouTube Videos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {youtubeVideos.map((video, index) => (

              <motion.a
                key={index}
                href={`https://youtu.be/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  glass
                  rounded-[28px]
                  overflow-hidden
                  group
                  border
                  border-white/10
                  transition-all
                  duration-500
                  hover:border-red-500/40
                  hover:shadow-[0_0_60px_rgba(239,68,68,.18)]
                "
              >

                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-105 duration-500"
                />

                <div className="p-6">

                  <div className="flex items-center justify-between mb-4">

                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm">
                      YouTube
                    </span>

                    <FaYoutube className="text-red-500 text-2xl" />

                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    {video.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Click to watch this tutorial on YouTube.
                  </p>

                </div>

              </motion.a>

            ))}

          </div>

        </motion.div>

        {/* BUTTONS */}

<div className="flex flex-wrap justify-center gap-6 mt-20">

  {/* Instagram */}

  <a
    href="https://www.instagram.com/arhanyay/"
    target="_blank"
    rel="noopener noreferrer"
    className="glass-btn flex items-center justify-center"
  >
    <span className="glass-btn-text flex items-center">
      <FaInstagram className="mr-2 text-xl" />
      @arhanyay
    </span>
  </a>

  {/* YouTube */}

  <a
    href="https://www.youtube.com/@MdArhan"
    target="_blank"
    rel="noopener noreferrer"
    className="glass-btn flex items-center justify-center"
  >
    <span className="glass-btn-text flex items-center">
      <FaYoutube className="mr-2 text-xl" />
      @MdArhan
    </span>
  </a>

</div>

      </div>

      {/* Bottom Divider */}

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-px"
        style={{
          background:
            'linear-gradient(to right, transparent,var(--accent-primary),transparent)',
        }}
      />

    </section>
  );
}