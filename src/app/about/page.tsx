import { SkillChip } from '@/components/SkillChip';
import { skills } from '@/data/skills';
import { Mail, Linkedin, Github } from 'lucide-react';

export const metadata = {
  title: 'About | Lim Yu Bing',
  description: 'Learn more about my background, skills, and what drives me',
};

export default function AboutPage() {
  return (
    <div className="max-w-[--container-max-width] mx-auto px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="mb-4">About Me</h1>
        <p className="text-xl text-[--color-text-secondary] max-w-2xl">
          Information Systems undergraduate with a passion for creating user-focused web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-6 text-[--color-text-secondary]">
          <p>
            I'm Lim Yu Bing, currently pursuing my degree in Information Systems at Singapore Management University (SMU). 
            My journey in tech has been driven by a deep curiosity about how technology can solve real-world problems and 
            improve people's lives.
          </p>
          <p>
            I specialize in building user-focused web applications using modern technologies like React, TypeScript, and 
            Tailwind CSS. My approach combines technical expertise with a strong emphasis on user experience and design 
            thinking.
          </p>
          <p>
            Beyond coding, I'm actively involved in leadership and community activities at SMU, where I've had the 
            opportunity to develop my communication and organizational skills while giving back to the community.
          </p>
          <p>
            When I'm not coding or studying, you can find me exploring new technologies, playing basketball, or 
            working on side projects that interest me.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-[--color-surface] border border-[--color-border] rounded-2xl p-6">
            <h3 className="mb-4">Quick Facts</h3>
            <div className="space-y-3 text-[--color-text-secondary]">
              <div>
                <p className="text-sm text-[--color-text-secondary] mb-1">Location</p>
                <p className="text-[--color-text-primary]">Singapore</p>
              </div>
              <div>
                <p className="text-sm text-[--color-text-secondary] mb-1">Education</p>
                <p className="text-[--color-text-primary]">Singapore Management University</p>
              </div>
              <div>
                <p className="text-sm text-[--color-text-secondary] mb-1">Major</p>
                <p className="text-[--color-text-primary]">Information Systems</p>
              </div>
            </div>
          </div>

          <div className="bg-[--color-surface] border border-[--color-border] rounded-2xl p-6">
            <h3 className="mb-4">Let's Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:yyubingg@gmail.com"
                className="flex items-center gap-3 text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[--color-text-secondary] hover:text-[--color-accent] transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section>
        <h2 className="mb-8">Skills & Technologies</h2>
        <div className="space-y-8">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 text-[--color-text-secondary]">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
