'use client';
import { useState, useEffect } from 'react';
import { PrimeIcons } from 'primereact/api';
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [darkMode, setDarkMode] = useState(true);

  const { scrollYProgress, scrollY } = useScroll();
  const progressBar = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 10);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'expertise', 'projets', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', id: 'accueil', icon: PrimeIcons.HOME },
    { name: 'À Propos', id: 'apropos', icon: PrimeIcons.USER },
    { name: 'Expertise', id: 'expertise', icon: PrimeIcons.COG },
    { name: 'Projets', id: 'projets', icon: PrimeIcons.BRIEFCASE },
    { name: 'Contact', id: 'contact', icon: PrimeIcons.ENVELOPE }
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', !darkMode);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 z-50 h-1 origin-left bg-accent"
        style={{ scaleX: progressBar }}
      />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed z-40 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/70 dark:bg-dark-800/90 backdrop-blur-md shadow-xl border-b border-dark-700/30 py-3'
            : 'bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container flex items-center justify-between px-6 mx-auto">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-black group dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="transition-colors duration-300 text-accent group-hover:text-primary">KT</span>
            <span className="transition-colors duration-300 text-primary group-hover:text-accent">•DEV</span>
          </motion.a>

          {/* Desktop nav */}
          <div className="items-center hidden space-x-1 md:flex">
            {navItems.map((item) => (
              <motion.div key={item.id} className="relative" whileHover={{ scale: 1.05 }}>
                <a
                  href={`#${item.id}`}
                  className={`px-4 py-2 flex items-center gap-2 transition-colors ${
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  <i className={`${item.icon} text-sm`} />
                  <span>{item.name}</span>
                </a>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavItem"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Dark mode toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 ml-4 text-gray-700 transition-colors rounded-full dark:text-gray-300 hover:text-accent"
            >
              {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-xl text-gray-800 transition-colors bg-gray-100 rounded-lg md:hidden dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 dark:text-white"
            whileTap={{ scale: 0.9 }}
          >
            <i className={mobileMenuOpen ? PrimeIcons.TIMES : PrimeIcons.BARS} />
          </motion.button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white border-t md:hidden dark:bg-dark-800 border-dark-700/50"
          >
            <div className="container px-6 py-4 mx-auto space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                    activeSection === item.id
                      ? 'bg-dark-700 text-accent'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-dark-700 dark:hover:text-accent'
                  }`}
                  whileHover={{ x: 5 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={item.icon} />
                  <span>{item.name}</span>
                  {activeSection === item.id && (
                    <motion.span
                      className="w-2 h-2 ml-auto rounded-full bg-accent"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  )}
                </motion.a>
              ))}
              {/* Dark mode toggle mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 mt-4 text-gray-800 dark:text-gray-300"
              >
                {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                <span>{darkMode ? 'Mode clair' : 'Mode sombre'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
