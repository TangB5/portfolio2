'use client';
import { motion } from 'framer-motion';
import { PrimeIcons } from 'primereact/api';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Fond gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary/20 to-secondary/20 opacity-90">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Travaillons Ensemble
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-300"
          >
            Discutons de votre projet et voyons comment je peux vous aider
          </motion.p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 transition-all border lg:w-1/2 bg-dark-800/50 backdrop-blur-md border-dark-700/50 rounded-2xl hover:border-primary/30"
          >
            <h3 className="mb-8 text-2xl font-bold text-white">Coordonnées</h3>
            
            <div className="space-y-6">
              {[
                { icon: PrimeIcons.ENVELOPE, label: "Email", value: "contact@kingtang.dev" },
                { icon: PrimeIcons.PHONE, label: "Téléphone", value: "+XX XXX XXX XXX" },
                { icon: PrimeIcons.MAP_MARKER, label: "Localisation", value: "Disponible en remote" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl ${i === 0 ? "text-accent" : i === 1 ? "text-primary" : "text-secondary"}`}>
                    <i className={item.icon} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.label}</h4>
                    <a 
                      href={i === 0 ? `mailto:${item.value}` : i === 1 ? `tel:${item.value}` : '#'} 
                      className="text-gray-300 transition-colors hover:text-accent"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-12">
              <h4 className="mb-6 font-semibold text-white">Mes Réseaux</h4>
              <div className="flex gap-4">
                {[
                  { icon: PrimeIcons.GITHUB, color: "bg-dark-700 hover:bg-dark-600", link: "#" },
                  { icon: PrimeIcons.LINKEDIN, color: "bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20", link: "#" },
                  { icon: PrimeIcons.TWITTER, color: "bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/20", link: "#" },
                  { icon: PrimeIcons.DISCORD, color: "bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20", link: "#" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${social.color} transition-all`}
                  >
                    <i className={social.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 transition-all border lg:w-1/2 bg-dark-800/50 backdrop-blur-md border-dark-700/50 rounded-2xl hover:border-primary/30"
          >
            <h3 className="mb-8 text-2xl font-bold text-white">Envoyez un message</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 text-white placeholder-gray-500 border rounded-lg bg-dark-700/50 border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 text-white placeholder-gray-500 border rounded-lg bg-dark-700/50 border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-300">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 text-white placeholder-gray-500 border rounded-lg bg-dark-700/50 border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="De quoi souhaitez-vous discuter ?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 text-white placeholder-gray-500 border rounded-lg bg-dark-700/50 border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-3 px-6 py-4 font-bold transition-all rounded-lg bg-gradient-to-r from-primary to-secondary text-dark-900"
              >
                <span>Envoyer le message</span>
                <i className={PrimeIcons.SEND} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}