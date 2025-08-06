'use client';
import { motion } from 'framer-motion';
import { PrimeIcons } from 'primereact/api';

const skills = [
  { name: "Next.js", level: 95, icon: PrimeIcons.CODE, color: "bg-blue-400" },
  { name: "TypeScript", level: 90, icon: PrimeIcons.CODE, color: "bg-blue-500" },
  { name: "React", level: 88, icon: PrimeIcons.REPLAY, color: "bg-cyan-400" },
  { name: "Angular", level: 85, icon: PrimeIcons.PLAY, color: "bg-red-400" },
  { name: "Tailwind", level: 93, icon: PrimeIcons.PALETTE, color: "bg-teal-400" },
  { name: "Node.js", level: 75, icon: PrimeIcons.SERVER, color: "bg-green-400" },
  { name: "GraphQL", level: 80, icon: PrimeIcons.DATABASE, color: "bg-pink-400" },
  { name: "Framer Motion", level: 85, icon: PrimeIcons.BOLT, color: "bg-purple-400" }
];

export default function SkillsSection() {
  return (
    <section id="expertise" className="relative py-24 bg-dark-900">
      {/* Effet de particules */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Mes Compétences
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Technologies que je maîtrise pour créer des expériences exceptionnelles
          </p>
        </motion.div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 transition-all duration-300 border bg-dark-800/50 backdrop-blur-md rounded-xl border-dark-700 hover:border-primary/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg ${skill.color} flex items-center justify-center text-white`}>
                  <i className={`${skill.icon} text-xl`} />
                </div>
                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              </div>
              <div className="w-full h-2 rounded-full bg-dark-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className={`h-2 rounded-full ${skill.color}`}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>Maîtrise</span>
                <span className="font-mono">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Méthodologie */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 overflow-hidden border bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl border-dark-600"
        >
          <div className="md:flex">
            <div className="p-8 md:w-1/3 bg-gradient-to-br from-primary to-secondary md:p-12">
              <h3 className="mb-6 text-2xl font-bold text-dark-900">Process Créatif</h3>
              <p className="mb-6 text-dark-800">Approche structurée pour des résultats optimaux</p>
              <div className="w-16 h-1 mb-6 bg-dark-900"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <i className={`${PrimeIcons.STAR} text-xl`} />
                  <span className="text-dark-900">100% sur-mesure</span>
                </div>
                <div className="flex items-center gap-4">
                  <i className={`${PrimeIcons.CHECK} text-xl`} />
                  <span className="text-dark-900">Tests rigoureux</span>
                </div>
              </div>
            </div>
            <div className="p-8 md:w-2/3 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  { icon: PrimeIcons.SEARCH, title: "Analyse", desc: "Audit technique & besoins clients" },
                  { icon: PrimeIcons.PALETTE, title: "Design", desc: "Prototypage haute-fidélité" },
                  { icon: PrimeIcons.COG, title: "Développement", desc: "Code propre et documenté" },
                  { icon: PrimeIcons.SEND, title: "Livraison", desc: "Optimisation & déploiement" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-primary">
                      <i className={`${item.icon} text-2xl`} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-white">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}