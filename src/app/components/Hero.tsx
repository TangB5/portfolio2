'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PrimeIcons } from 'primereact/api';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityBg = useTransform(scrollYProgress, [0, 1], ['100%', '30%']);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-900 via-dark-950 to-black"
    >
      {/* Background dynamique */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-spin-slow" />
      </motion.div>

      <div className="container relative z-10 flex items-center h-full px-6 pt-24 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Partie texte */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-mono tracking-wider text-accent">Bonjour, je suis</span>
             <h1 className="mt-4 text-6xl font-bold leading-tight text-transparent md:text-8xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text">
         KingTang
            </h1>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-16 h-1 rounded-full bg-accent" />
                <p className="text-xl font-light text-gray-300">
                 {`Architecte d'interfaces`}  <span className="text-accent">percutantes</span>
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-lg text-gray-400"
            >
              Je conçois des expériences web <span className="font-medium text-primary">performantes</span> et <span className="font-medium text-secondary">esthétiques</span> avec React, Next.js et une touche de magie.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projets"
                className="relative px-8 py-4 overflow-hidden transition-all duration-500 rounded-lg group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <i className={`${PrimeIcons.EYE} transition-transform duration-300 group-hover:scale-125`} />
                  <span>Voir mon portfolio</span>
                </span>
                <span className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              </a>

              <a
                href="#contact"
                className="relative px-8 py-4 overflow-hidden transition-all duration-500 border rounded-lg group border-primary/30 hover:border-accent/50 bg-dark-800/50 backdrop-blur-md hover:bg-dark-700/50"
              >
                <span className="relative z-10 flex items-center gap-3 text-primary group-hover:text-accent">
                  <i className={`${PrimeIcons.ENVELOPE} transition-transform duration-300 group-hover:scale-125`} />
                  <span>Discutons</span>
                </span>
                <span className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
              </a>
            </motion.div>
          </div>

          {/* Partie visuelle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Carte 3D */}
              <div className="absolute inset-0 overflow-hidden border shadow-2xl rounded-3xl border-primary/20 bg-dark-800/50 backdrop-blur-md">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80')] bg-cover bg-center scale-110 hover:scale-100 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent" />
              </div>

              {/* Effet néon */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none border border-primary/10 shadow-[0_0_30px_10px_var(--color-primary)/20]" />

              {/* Icônes orbitantes */}
              {[
                { icon: 'pi pi-github', color: 'text-cyan-400', size: 'w-14 h-14', orbitRadius: 'lg' },
                { icon: 'pi pi-js', color: 'text-yellow-400', size: 'w-12 h-12', orbitRadius: 'md' },
                { icon: 'pi pi-css3', color: 'text-blue-400', size: 'w-10 h-10', orbitRadius: 'sm' }
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${tech.size} rounded-full bg-dark-700/80 border border-dark-600 flex items-center justify-center ${tech.color} backdrop-blur-md z-10`}
                  animate={{
                    x: tech.orbitRadius === 'lg' 
                      ? [0, 120, 0, -120, 0] 
                      : tech.orbitRadius === 'md' 
                        ? [0, 90, 0, -90, 0] 
                        : [0, 60, 0, -60, 0],
                    y: tech.orbitRadius === 'lg' 
                      ? [-120, 0, 120, 0, -120] 
                      : tech.orbitRadius === 'md' 
                        ? [-90, 0, 90, 0, -90] 
                        : [-60, 0, 60, 0, -60],
                    rotate: 360
                  }}
                  transition={{
                    duration: 12 + i * 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <i className={tech.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <div className="flex flex-col items-center animate-bounce">
          <i className={`${PrimeIcons.ANGLE_DOWN} text-2xl text-accent`} />
          <span className="mt-2 font-mono text-xs tracking-widest text-gray-400">SCROLL</span>
        </div>
      </motion.div>
    </section>
  );
}