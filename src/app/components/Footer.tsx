'use client';
import { motion } from 'framer-motion';
import { PrimeIcons } from 'primereact/api';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t bg-dark-900 border-dark-800/50">
      {/* Effet de bruit de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-6 py-16 mx-auto">
        {/* Grille de contenu */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 - Logo + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 text-2xl font-bold">
              <span className="text-accent">KT</span>•<span className="text-primary">DEV</span>
            </div>
            <p className="mb-6 text-gray-400">
              {`Développeur frontend spécialisé dans la création d'expériences web performantes et esthétiques.`}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: PrimeIcons.GITHUB, link: "#" },
                { icon: PrimeIcons.LINKEDIN, link: "#" },
                { icon: PrimeIcons.TWITTER, link: "#" },
                { icon: PrimeIcons.DISCORD, link: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center justify-center w-10 h-10 text-gray-300 transition-all border rounded-full bg-dark-800 border-dark-700 hover:text-accent hover:border-accent/30"
                >
                  <i className={social.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 - Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="pb-2 mb-6 text-lg font-semibold text-white border-b border-dark-700">
              Navigation
            </h3>
            <ul className="space-y-3">
              {['Accueil', 'À Propos', 'Expertise', 'Projets', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-accent"
                  >
                    <i className={`${PrimeIcons.CHEVRON_RIGHT} text-xs`} />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="pb-2 mb-6 text-lg font-semibold text-white border-b border-dark-700">
              Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Angular'].map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-lg bg-dark-800/50"
                >
                  <i className={`${PrimeIcons.CHECK} text-accent text-xs`} />
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Colonne 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="pb-2 mb-6 text-lg font-semibold text-white border-b border-dark-700">
              Contact Rapide
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className={`${PrimeIcons.ENVELOPE} text-accent mt-1`} />
                <a href="mailto:contact@kingtang.dev" className="text-gray-400 transition-colors hover:text-accent">
                  contact@kingtang.dev
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className={`${PrimeIcons.PHONE} text-primary mt-1`} />
                <a href="tel:+123456789" className="text-gray-400 transition-colors hover:text-accent">
                  +XX XXX XXX XXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className={`${PrimeIcons.MAP_MARKER} text-secondary mt-1`} />
                <span className="text-gray-400">Disponible en remote worldwide</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px my-12 bg-gradient-to-r from-transparent via-dark-700 to-transparent"
        />

        {/* Bas de footer */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-500"
          >
            © {currentYear} KingTang DEV. Tous droits réservés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <a href="#" className="text-sm text-gray-500 transition-colors hover:text-accent">
              Politique de confidentialité
            </a>
            <a href="#" className="text-sm text-gray-500 transition-colors hover:text-accent">
              Mentions légales
            </a>
          </motion.div>
        </div>
      </div>

      {/* Effet de particules décoratives */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ x: `${i * 8}%`, y: 0, opacity: 0 }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              width: `${Math.random() * 10 + 5}%`
            }}
          />
        ))}
      </div>
    </footer>
  );
}