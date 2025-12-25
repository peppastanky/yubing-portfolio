import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects | Lim Yu Bing',
  description: 'Explore my portfolio of web development projects and case studies',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-[--container-max-width] mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="mb-4">Projects</h1>
        <p className="text-xl text-[--color-text-secondary] max-w-2xl">
          A collection of projects I've worked on, showcasing my skills in web development, 
          design, and data analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            summary={project.summary}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
}
