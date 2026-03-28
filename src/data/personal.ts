export interface PersonalData {
  name: string
  title: string
  bio: string
  avatar: string
  skills: SkillCategory[]
  experience: Experience[]
  education: Education[]
  links: SocialLink[]
  contactEmail: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  year: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export const personal: PersonalData = {
  name: 'Ryan Stewart',
  title: 'Senior Backend Engineer',
  bio: '5+ years building backend systems and APIs. Outside of work I like to build things and learn new tech.',
  avatar: '/images/avatar.jpg',
  skills: [
    {
      category: 'Languages & Frameworks',
      items: ['PHP (Symfony 7)', 'Go', 'Python', 'C# / .NET', 'JavaScript', 'Vue.js', 'Kotlin', 'Jetpack Compose'],
    },
    {
      category: 'Architecture & APIs',
      items: ['REST APIs', 'Microservices', 'Service-oriented architecture'],
    },
    {
      category: 'Databases',
      items: ['MariaDB', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Vertica'],
    },
    {
      category: 'DevOps & Infrastructure',
      items: ['Docker', 'Kubernetes', 'Nginx', 'AWS', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Linux'],
    },
    {
      category: 'Testing & Monitoring',
      items: ['PHPUnit', 'Sentry', 'Grafana'],
    },
    {
      category: 'AI & Developer Productivity',
      items: ['Agentic coding workflows', 'Claude Code', 'Codex', 'Playwright', 'LLM integration', 'Prompt engineering'],
    },
    {
      category: 'Messaging & Queues',
      items: ['RabbitMQ', 'SQS'],
    },
    {
      category: 'Tools & Project Management',
      items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira'],
    },
  ],
  experience: [
    {
      role: 'Senior Backend Engineer',
      company: 'Nourish Care',
      period: 'Oct 2024 — Present',
      description: 'Migrating a legacy Drupal monolith to a Symfony-based PHP API. Building internal tooling in Go. Halved CI/CD test suite runtime. Working full-stack across Vue.js frontend and backend API.',
    },
    {
      role: 'Software Engineer',
      company: 'Maru',
      period: 'Jan 2023 — Sep 2024',
      description: 'Owned multiple applications including an AI-powered survey generator (C#/.NET) and several greenfield PHP services. Led PHP 8.3 upgrades and shipped production code in the first week.',
    },
    {
      role: 'Software Developer',
      company: 'Essential-Net',
      period: 'Feb 2021 — Jan 2023',
      description: 'Built a custom Online Charging System for telecoms. Worked across PHP, Python, and infrastructure. Promoted from Junior within a year. Introduced monitoring with Grafana and handled production database management.',
    },
  ],
  education: [
    {
      degree: 'Self-taught Programming',
      institution: 'Self-directed',
      year: '2020 — 2021',
    },
    {
      degree: 'BSc (Hons.) Biological and Medicinal Chemistry — 1st Class',
      institution: 'University of Exeter',
      year: '2012 — 2017',
    },
  ],
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/ryanstewart1233',
      icon: 'github',
    },
    {
      label: 'GitHub (Work)',
      url: 'https://github.com/ryan-stewart1233',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/ryan-stewart-80a975146',
      icon: 'linkedin',
    },
  ],
  contactEmail: 'ryansramblings93@gmail.com',
}
