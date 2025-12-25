import { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'eventurer',
    title: 'Eventurer',
    role: 'Developer',
    organization: 'Web Application Development II (SMU)',
    dates: 'Sep 2025 – Nov 2025',
    grade: 'A',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    summary: 'Event Discovery & Team-Matching Web App',
    description: [
      'Developed a comprehensive event discovery platform that helps users find events, bookmark favorites, RSVP, and connect with potential teammates.',
      'Focused on user-centered design principles to create an intuitive and engaging experience.',
      'Implemented real-time features using Firebase for seamless event updates and team matching.',
    ],
    features: [
      'Event discovery with advanced filtering',
      'Bookmark and RSVP system',
      'Team matching algorithm',
      'Real-time updates',
      'Responsive design',
      'User authentication',
    ],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    slug: 'hdb-resale-analysis',
    title: 'HDB Resale Price Analysis Model',
    role: 'Member',
    organization: 'Modelling and Data Analytics (SMU)',
    dates: 'Jan 2025 – May 2025',
    tech: ['Excel', 'Tableau'],
    summary: 'Dynamic model using scenario analysis on resale data',
    description: [
      'Built a comprehensive analytical model to predict and analyze HDB resale prices using historical data.',
      'Implemented scenario analysis techniques to forecast price trends under different market conditions.',
      'Created interactive dashboards for data visualization and insights presentation.',
    ],
    features: [
      'Dynamic pricing model',
      'Scenario analysis',
      'Historical data analysis',
      'Interactive dashboards',
      'Market trend forecasting',
    ],
  },
];
