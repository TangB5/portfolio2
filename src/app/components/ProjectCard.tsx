import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  tags,
  image,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-dark rounded-xl border border-gray-800 overflow-hidden hover:border-accent transition-all"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="#"
          className="inline-flex items-center text-accent hover:underline"
        >
          Voir le projet <i className="fas fa-arrow-right ml-2" />
        </Link>
      </div>
    </motion.div>
  );
}