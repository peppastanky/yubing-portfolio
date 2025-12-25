import { ExperienceCard } from '@/components/ExperienceCard';
import { LeadershipList } from '@/components/LeadershipList';
import { experiences, leadership } from '@/data/experience';

export const metadata = {
  title: 'Experience | Lim Yu Bing',
  description: 'My professional experience, leadership roles, and community involvement',
};

export default function ExperiencePage() {
  return (
    <div className="max-w-[--container-max-width] mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="mb-4">Experience</h1>
        <p className="text-xl text-[--color-text-secondary] max-w-2xl">
          My journey through professional work, leadership roles, and community involvement.
        </p>
      </div>

      {/* Professional Experience */}
      <section className="mb-16">
        <h2 className="mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </section>

      {/* Leadership & Community */}
      <section>
        <h2 className="mb-8">Leadership & Community</h2>
        <LeadershipList items={leadership} />
      </section>
    </div>
  );
}
