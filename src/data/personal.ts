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
  title: 'Senior Software Engineer',
  bio: 'Backend engineer with experience across PHP, C#, Python, and more. I build and ship things — APIs, Android apps, tools, whatever solves the problem. Currently working on side projects in Kotlin and Vue while doing backend work professionally.',
  avatar: '/images/avatar.jpg',
  skills: [
    {
      category: 'Languages & Frameworks',
      items: ['PHP (Symfony 7)', 'Python', 'C# / .NET', 'JavaScript', 'Vue.js', 'Kotlin', 'Jetpack Compose'],
    },
    {
      category: 'Databases',
      items: ['MariaDB', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Vertica'],
    },
    {
      category: 'DevOps & Infrastructure',
      items: ['Docker', 'AWS', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Linux', 'k9s'],
    },
    {
      category: 'Messaging & Monitoring',
      items: ['RabbitMQ', 'SQS', 'Grafana'],
    },
    {
      category: 'AI & Emerging Tech',
      items: ['Prompt engineering', 'LLM integration', 'AI-assisted tooling'],
    },
  ],
  experience: [
    {
      role: 'Backend API Developer',
      company: 'Nourish Care',
      period: 'Oct 2024 — Present',
      description: 'Migrating a legacy Drupal monolith to a Symfony-based PHP API. Halved CI/CD test suite runtime. Mentoring junior developers and contributing to a Vue.js frontend migration.',
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
  ],
  contactEmail: 'ryansramblings93@gmail.com',
}
