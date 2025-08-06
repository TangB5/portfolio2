import SkillCard from '../components/Skill';
import { skills } from '../config/skills';

export default function CompetencesPage() {
  return (
    <section className="py-24 bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Mon <span className="text-primary">Expertise</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}