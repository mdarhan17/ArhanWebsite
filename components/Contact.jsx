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
      link: 'tel:+919731115171',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Mangalore, Karnataka, India',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/mdarhan17', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mdarhan/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/arhanyay', label: 'X' },
    { icon: FaYoutube, href: 'https://www.youtube.com/MdArhan', label: 'YouTube' },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
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
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ===== LEFT INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: 'var(--gradient-accent)' }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="opacity-80 hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="opacity-80">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-white/10">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 4 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl glass"
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE (GOOGLE FORM EMBED) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-6">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdOoXW_J2KwrB-roS1ywW6DXsCdWAR8Z_xVpPjIHoFWptyzQQ/viewform?embedded=true"
                width="100%"
                height="520"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="rounded-xl"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>

        </div>

        {/* ===== FOOTER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center glass rounded-2xl p-6"
        >
          © {new Date().getFullYear()} Mohammed Arhan. All rights reserved.
        </motion.div>

      </div>
    </section>
  );
}
