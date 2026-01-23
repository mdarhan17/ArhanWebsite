'use client';

import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'mdarhanofficial@gmail.com',
      link: 'mailto:mdarhanofficial@gmail.com',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91 9731115171',
      link: 'tel:9731115171',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Mangalore, Karnataka, India',
      link: null,
    },
  ];

  const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/mdarhan17',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/mdarhan/',
    deepLink: 'linkedin://in/mdarhan',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    href: 'https://x.com/arhanyay',
    deepLink: 'twitter://user?screen_name=arhanyay',
    label: 'X',
  },
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com/MdArhan',
    deepLink: 'vnd.youtube://channel/MdArhan',
    label: 'YouTube',
  },
];


  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div
                    className="p-3 rounded-xl glass"
                    style={{ background: 'var(--gradient-accent)' }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="hover:underline"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="pt-6 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl glass glow-hover"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Send a Message
              </h3>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 transition-all"
                    style={{
                      color: 'var(--text-primary)',
                      background: 'var(--card-bg)',
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 transition-all"
                    style={{
                      color: 'var(--text-primary)',
                      background: 'var(--card-bg)',
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{
                      color: 'var(--text-primary)',
                      background: 'var(--card-bg)',
                    }}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold glow-hover"
                  style={{
                    background: 'var(--gradient-accent)',
                    color: 'white',
                  }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center glass rounded-2xl p-8"
        >
          <p style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Mohammed Arhan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
