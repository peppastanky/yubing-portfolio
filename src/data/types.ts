export interface Project {
  slug: string;
  title: string;
  role: string;
  organization: string;
  dates: string;
  grade?: string;
  tech: string[];
  summary: string;
  description: string[];
  features: string[];
  links?: {
    live?: string;
    github?: string;
  };
  image?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Leadership {
  title: string;
  organization: string;
  period: string;
}

export interface Skill {
  category: string;
  items: string[];
}
