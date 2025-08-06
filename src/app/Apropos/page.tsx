'use client';
import { motion } from 'framer-motion';
import { PrimeIcons } from 'primereact/api';

const timelineData = [
  {
    year: "2021",
    title: "Formation Intensive",
    description: "Apprentissage des bases du web (HTML/CSS/JS) et premiers projets freelance.",
    icon: PrimeIcons.CHECK,
    color: "text-purple-400"
  },
  {
    year: "2022",
    title: "Développeur Frontend Junior",
    description: "Intégration en agence web. Développement de sites vitrines et e-commerce.",
    icon: PrimeIcons.BRIEFCASE,
    color: "text-blue-400"
  },
  {
    year: "2023",
    title: "Spécialisation Frameworks",
    description: "Expertise sur React/Next.js et Angular. Gestion d'état avancée (Redux/NgRx).",
    icon: PrimeIcons.COG,
    color: "text-green-400"
  },
  {
    year: "2024",
    title: "Lead Frontend",
    description: "Management d'équipe et optimisation des performances web (Lighthouse 95+).",
    icon: PrimeIcons.SEND,
    color: "text-orange-400"
  }
];

export default function AboutSection() {
  return (
    <section id="apropos" className="relative py-24 overflow-hidden bg-dark-950">
      {/* Fond animé */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute w-64 h-64 rounded-full top-1/3 left-1/2 bg-purple-500/20 blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Mon Parcours
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            {`De passionné à expert : mon évolution dans l'écosystème frontend`}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne de timeline */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400" />

          {/* Éléments */}
          <div className="pl-12 space-y-12 md:pl-0">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto md:pl-12"}`}
              >
                {/* Point */}
                <div className={`absolute top-0 -left-9 w-6 h-6 rounded-full ${item.color} bg-dark-800 border-2 border-current flex items-center justify-center`}>
                  <i className={`${item.icon} text-xs`} />
                </div>

                {/* Carte */}
                <div className="p-6 transition-all duration-300 border shadow-lg bg-dark-800/50 backdrop-blur-md rounded-xl border-dark-700 hover:border-primary/30">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-mono ${item.color} bg-dark-900`}>
                      {item.year}
                    </span>
                  </div>
                  <p className="mb-4 text-gray-400">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Angular"].slice(0, index + 2).map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs text-gray-300 rounded-full bg-dark-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}