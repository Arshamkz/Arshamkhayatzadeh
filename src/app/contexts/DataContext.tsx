import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface Skill {
  id: string;
  category: string;
  skills: { name: string; level: number }[];
}

export interface Experience {
  id: string;
  company: string;
  period: string;
  role: string;
  achievements: string[];
}

interface DataContextType {
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  updateSkills: (skills: Skill[]) => void;
  updateExperiences: (experiences: Experience[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const initialSkills: Skill[] = [
  {
    id: '1',
    category: 'Design Tools',
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'FigJam', level: 85 },
      { name: 'Adobe Creative Suite', level: 75 },
      { name: 'Principle (Prototyping)', level: 70 },
    ],
  },
  {
    id: '2',
    category: 'Research & Analytics',
    skills: [
      { name: 'Google Analytics (GA4)', level: 85 },
      { name: 'Microsoft Clarity', level: 90 },
      { name: 'Hotjar', level: 75 },
      { name: 'User Testing', level: 80 },
      { name: 'A/B Testing', level: 85 },
    ],
  },
  {
    id: '3',
    category: 'Collaboration & PM',
    skills: [
      { name: 'Slack', level: 90 },
      { name: 'Jira', level: 85 },
      { name: 'Notion', level: 85 },
      { name: 'Miro', level: 75 },
    ],
  },
  {
    id: '4',
    category: 'Design Systems & Development',
    skills: [
      { name: 'Atomic Design Methodology', level: 90 },
      { name: 'Design Tokens', level: 90 },
      { name: 'HTML/CSS (Basics)', level: 70 },
      { name: 'React (for Design Systems)', level: 60 },
    ],
  },
];

const initialExperiences: Experience[] = [
  {
    id: '1',
    company: 'IranHotelOnline',
    period: 'October 2024 - Present',
    role: 'Product Designer (Contract)',
    achievements: [
      'Promoted from UI/UX Designer role to Product Designer, leading end-to-end product design for hotel booking platform serving 500K+ monthly users',
      'Designed and implemented scalable Design System using Atomic Design principles - increased design velocity by 40%',
      'Redesigned complete reservation flow - reduced booking time by 57% and increased completion rate by 20%',
      'Led UX research initiatives using Google Analytics and Microsoft Clarity, collaborating with PM and Engineering to align designs with business KPIs',
    ],
  },
  {
    id: '2',
    company: 'IranHotelOnline',
    period: 'December 2023 - October 2024',
    role: 'UI/UX Designer',
    achievements: [
      'Led user interface design and UX research for IranHotelOnline booking platform',
      'Optimized mobile experience, increasing mobile conversions by 28% and app rating from 3.8 to 4.6 stars',
      'Redesigned search and filter system, improving search-to-booking rate by 35%',
      'Collaborated with cross-functional teams to deliver data-driven design improvements',
    ],
  },
  {
    id: '3',
    company: 'CtRiA',
    period: 'September 2023 - October 2024',
    role: 'User Interface Designer (Contract)',
    achievements: [
      'Designed enterprise analytics dashboard, reducing time-to-insight by 60% for business users',
      'Created user interfaces and wireframes for complex data visualization products',
      'Developed proficiency in Figma and modern UI design workflows',
      'Collaborated with development teams to ensure pixel-perfect implementation',
    ],
  },
  {
    id: '4',
    company: 'Tehran Technical Complex',
    period: 'October 2022 - August 2023',
    role: 'UI/UX Design Student (Apprenticeship)',
    achievements: [
      'Completed comprehensive UI/UX design training program',
      'Learned fundamentals of user experience design and advanced UI design techniques',
      'Built foundation in design thinking, prototyping, and user research methodologies',
      'Developed skills in Figma, wireframing, and interface design best practices',
    ],
  },
  {
    id: '5',
    company: 'Reza Translation Office',
    period: 'July 2019 - October 2022',
    role: 'English Translator',
    achievements: [
      'Full-time English to Persian translation across various content types',
      'Developed strong communication skills and attention to detail',
      'Enhanced proficiency in cross-cultural communication and ESL',
      'Built foundation for international collaboration and client communication',
    ],
  },
];

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences);

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    const savedSkills = localStorage.getItem('skills');
    const savedExperiences = localStorage.getItem('experiences');
    
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
    if (savedExperiences) setExperiences(JSON.parse(savedExperiences));
  }, []);

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Date.now().toString() };
    const updated = [...projects, newProject];
    setProjects(updated);
    localStorage.setItem('projects', JSON.stringify(updated));
  };

  const updateProject = (project: Project) => {
    const updated = projects.map((p) => (p.id === project.id ? project : p));
    setProjects(updated);
    localStorage.setItem('projects', JSON.stringify(updated));
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    localStorage.setItem('projects', JSON.stringify(updated));
  };

  const updateSkills = (newSkills: Skill[]) => {
    setSkills(newSkills);
    localStorage.setItem('skills', JSON.stringify(newSkills));
  };

  const updateExperiences = (newExperiences: Experience[]) => {
    setExperiences(newExperiences);
    localStorage.setItem('experiences', JSON.stringify(newExperiences));
  };

  return (
    <DataContext.Provider
      value={{
        projects,
        skills,
        experiences,
        addProject,
        updateProject,
        deleteProject,
        updateSkills,
        updateExperiences,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
}