'use client';
import { motion } from 'framer-motion';
import { PrimeIcons } from 'primereact/api';
import { useState } from 'react'; // Import useState

const projects = [
  {
    title: "Dashboard Analytique",
    description: "Visualisation de données temps réel avec Next.js et Chart.js",
    tags: ["Next.js", "TypeScript", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    title: "Plateforme E-commerce",
    description: "Solution complète avec panier et paiement Stripe",
    tags: ["Angular", "NgRx", "Stripe"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1780&q=80",
    link: "#"
  },
  {
    title: "Réseau Social",
    description: "Plateforme avec authentification et posts temps réel",
    tags: ["React", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    link: "#"
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Tous"); // État pour le filtre actif

  // Fonction de filtrage
  const filteredProjects = projects.filter(project => {
    if (activeFilter === "Tous") return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="projets" className="relative py-24 bg-dark-950">
      {/* Fond dynamique */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Mes Réalisations
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Sélection de projets récents mettant en valeur mon expertise
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["Tous", "Next.js", "Angular", "React", "Fullstack"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)} // Ajout du onClick
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                activeFilter === filter // Utilisation de activeFilter au lieu de "Tous"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-dark-700 hover:border-primary/50 text-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => ( // Utilisation de filteredProjects
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden transition-all duration-500 border group rounded-xl border-dark-700 hover:border-primary/50"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent" />
              </div>

              {/* Contenu */}
              <div className="p-6 bg-dark-800/50 backdrop-blur-md">
                <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs text-gray-300 rounded-full bg-dark-700">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bouton */}
                <a
                  href={project.link}
                  className="inline-flex items-center transition-colors text-accent group-hover:text-primary"
                >
                  <span>Voir le projet</span>
                  <i className={`${PrimeIcons.ARROW_RIGHT} ml-2 transition-transform group-hover:translate-x-1`} />
                </a>
              </div>

              {/* Effet hover */}
              <div className="absolute inset-0 transition-opacity opacity-0 pointer-events-none group-hover:opacity-100">
                <div className="absolute inset-0 border-2 border-primary/30 rounded-xl" />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 font-bold transition-all rounded-lg bg-gradient-to-r from-primary to-secondary text-dark-900 hover:shadow-lg"
          >
            <span>Discutons de votre projet</span>
            <i className={`${PrimeIcons.ARROW_RIGHT} ml-3`} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}