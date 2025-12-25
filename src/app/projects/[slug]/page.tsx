import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Award } from 'lucide-react';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Lim Yu Bing`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-[--container-max-width] mx-auto px-6 lg:px-8 py-16 md:py-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-[--color-text-secondary] hover:text-[--color-accent] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </Link>

      <div className="mb-8">
        <h1 className="mb-4">{project.title}</h1>
        <p className="text-xl text-[--color-text-secondary] mb-6">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-accent] text-white rounded-lg hover:bg-[--color-accent-hover] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-surface] border border-[--color-border] rounded-lg hover:border-[--color-accent] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="mb-4">Overview</h2>
            <div className="space-y-4 text-[--color-text-secondary]">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-3 text-[--color-text-secondary]">
                  <span className="text-[--color-accent] mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[--color-surface] border border-[--color-border] rounded-2xl p-6">
            <h3 className="mb-4">Project Details</h3>
            <div className="space-y-4 text-[--color-text-secondary]">
              <div>
                <p className="text-sm text-[--color-text-secondary] mb-1">Role</p>
                <p className="text-[--color-text-primary]">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-[--color-text-secondary] mb-1">Organization</p>
                <p className="text-[--color-text-primary]">{project.organization}</p>
              </div>
              <div>
                <p className="text-sm text-[--color-text-secondary] mb-1">Timeline</p>
                <p className="text-[--color-text-primary]">{project.dates}</p>
              </div>
              {project.grade && (
                <div className="flex items-center gap-2 pt-2 border-t border-[--color-border]">
                  <Award className="w-4 h-4 text-[--color-accent]" />
                  <p className="text-[--color-accent]">Grade: {project.grade}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[--color-surface] border border-[--color-border] rounded-2xl p-6">
            <h3 className="mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[--color-background] border border-[--color-border] rounded-full text-sm text-[--color-text-secondary]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
