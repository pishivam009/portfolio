export const siteConfig = {
  name: 'Piyush Shivam',
  title: 'Implementation Engineer · FinTech SaaS',
  description:
    'Implementation Engineer with 5 years at ION Group building bank connectivity solutions, founding TechOps teams, and automating enterprise operations workflows in FinTech SaaS.',
  email: 'pishivam009@gmail.com',
  linkedin: 'https://linkedin.com/in/piyush-shivam',
  github: 'https://github.com/piyush-shivam',
  location: 'Bengaluru, India',
  openToRelocation: 'Open to relocation: Singapore · UK · Netherlands',
}

export const heroTagline =
  'I build the systems that keep enterprise payments moving — and the teams that run them.'

export const summary = `Implementation Engineer with 5 years at ION Group, a global FinTech SaaS platform serving banks, corporates, and treasury teams. I started in QA automation, built observability tooling that eliminated alert fatigue across multiple product lines, then founded ION's Corporates SaaS TechOps team from the ground up — training 7 engineers to full operational independence in 3 months. Today I execute enterprise client migrations on NextGen bank connectivity infrastructure, coordinating across banks, DevOps, and TMS integration teams to move treasury clients safely to production.

My edge is the combination of deep technical execution and the ability to build, run, and present to C-suite leadership — documented in a 5/5 performance review in 2024.`

export interface Role {
  id: string
  title: string
  company: string
  period: string
  type: 'current' | 'past'
  tagline: string
  bullets: string[]
  highlight?: string
}

export const roles: Role[] = [
  {
    id: 'impl-eng',
    title: 'Implementation Engineer — NextGen Bank Connectivity',
    company: 'ION Group',
    period: 'Apr 2026 – Present',
    type: 'current',
    tagline: 'Enterprise treasury client migrations to NextGen bank connectivity platform.',
    bullets: [
      'Executing end-to-end enterprise client migrations from legacy to NextGen bank connectivity platform',
      'Writing and modifying migration scripts; troubleshooting payment format issues across pain001, MT101, camt052/053, BAI2 formats',
      'Delivered migrations for 7–10 enterprise treasury clients across go-live windows',
      'Identified and resolved recurring migration blockers; built fixes into team runbooks to prevent recurrence',
      'Coordinating across banks, clients, Dev, and DevOps teams during high-stakes go-live windows',
      'Supporting certificate provisioning for bank connectivity clients across 5+ TMS platforms',
    ],
  },
  {
    id: 'agile-lead',
    title: 'Agile Team Lead / Acting Product Owner — NextGen Squad',
    company: 'ION Group',
    period: 'Jun 2025 – Apr 2026',
    type: 'past',
    tagline: 'Led delivery for one NextGen squad within the larger product organisation.',
    bullets: [
      'Managed sprint backlog and ran all Agile ceremonies for a 6-person NextGen delivery squad',
      'Wrote user stories and acceptance criteria for Admin UI features shipped to enterprise clients',
      'Coordinated UAT sign-off with external TMS integration teams — reduced sign-off cycles',
      'Introduced shift-left testing practices, catching integration defects earlier in the delivery pipeline',
    ],
  },
  {
    id: 'coral-lead',
    title: 'Technical Operations Lead — Coral SaaS TechOps Team (Founded)',
    company: 'ION Group',
    period: 'Mar 2024 – Jun 2025',
    type: 'past',
    tagline: 'Identified a gap, proposed a solution, and built a functioning team from zero.',
    highlight:
      "Founded ION Corporates' first dedicated SaaS TechOps team — not an appointed role, a self-initiated proposal that received executive buy-in.",
    bullets: [
      'Identified that BAU operations, monitoring, and P1/P2 incidents were falling to senior engineers with no dedicated team — proposed and built the Coral TechOps structure from scratch',
      'Recruited and onboarded 7 engineers; designed a structured 3-month training programme covering all critical ops workflows',
      'Team reached full operational independence within 3 months — handling P1/P2 incidents, DR execution, and BAU independently',
      'Authored 10+ operational runbooks (COMMS, DNC, EBICS, OpenSearch, DR) — still in active use',
      'Ran Agile ceremonies for the 8-person centralised SaaS ops team spanning multiple product lines',
      'Delivered 3 operational reports directly to CTO, CPO, and CEO',
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Observability Engineer',
    company: 'ION Group',
    period: 'Aug 2021 – Mar 2024',
    type: 'past',
    tagline: 'Built the monitoring and automation layer for ION Corporates SaaS operations.',
    bullets: [
      'Built Flask/Docker alert deduplicator connecting to AWS OpenSearch — significantly reduced redundant alert volume and eliminated alert fatigue across the ops team',
      'Designed and maintained 20+ OpenSearch dashboards and monitors with automated Jira ticket creation on threshold breach',
      'Automated MDS calendar reconciliation in Python/pandas — saving 18+ hours per sprint (measured and confirmed)',
      'Contributed to bank connectivity taxonomy initiative across 5 TMS platforms, a CEO-level strategic project',
      'Built SQL pipelines and PowerBI dashboards for legacy migration analysis',
      'Built Certificate Expiry Notification tool adopted for bank connectivity certificate lifecycle management',
      'Contributed Grafana dashboard templates subsequently adopted by multiple product teams',
      'Trained 8 BizOps and TechOps team members on observability tooling',
    ],
  },
]

export interface Achievement {
  id: string
  metric: string
  unit: string
  label: string
  description: string
  icon: string
}

export const achievements: Achievement[] = [
  {
    id: 'team-founding',
    metric: '3',
    unit: 'months',
    label: 'Zero to operational independence',
    description:
      'Founded Coral TechOps team from scratch and trained 7 engineers to handle P1/P2 incidents, DR, and BAU independently — in 3 months.',
    icon: 'Users',
  },
  {
    id: 'sprint-savings',
    metric: '18+',
    unit: 'hrs/sprint',
    label: 'Automated away',
    description:
      'Python/pandas automation of the MDS calendar reconciliation process eliminated 18+ hours of manual work every sprint — confirmed and measured.',
    icon: 'Clock',
  },
  {
    id: 'test-speed',
    metric: '30%',
    unit: 'faster',
    label: 'Test suite execution',
    description:
      'Parallelised and parameterised the E2E payment test suite (Java/JUnit) — 30% faster execution, 40% shorter regression window.',
    icon: 'Zap',
  },
  {
    id: 'clients-migrated',
    metric: '7–10',
    unit: 'clients',
    label: 'Enterprise migrations delivered',
    description:
      'Executed end-to-end NextGen bank connectivity migrations for 7–10 enterprise treasury clients, coordinating across banks, DevOps, and TMS teams.',
    icon: 'ArrowRight',
  },
  {
    id: 'runbooks',
    metric: '10+',
    unit: 'runbooks',
    label: 'Operational playbooks authored',
    description:
      'Wrote 10+ operational runbooks covering COMMS, DNC, EBICS, OpenSearch, and DR workflows — foundational to the TechOps team independence.',
    icon: 'BookOpen',
  },
  {
    id: 'perf-review',
    metric: '5/5',
    unit: '',
    label: 'Performance review (2024)',
    description:
      '"Goes far beyond expectations" — Ravi Visveswaran, ION Group. Consistent improvement: 4/5 in 2022 and 2023, reaching top rating in 2024.',
    icon: 'Star',
  },
]

export interface SkillGroup {
  category: string
  skills: { name: string; level: 'expert' | 'proficient' | 'working' }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 'expert' },
      { name: 'SQL', level: 'expert' },
      { name: 'Java', level: 'proficient' },
      { name: 'PowerShell', level: 'proficient' },
      { name: 'Bash', level: 'proficient' },
    ],
  },
  {
    category: 'Observability & Monitoring',
    skills: [
      { name: 'AWS OpenSearch / ELK', level: 'expert' },
      { name: 'Grafana', level: 'expert' },
      { name: 'CloudWatch', level: 'proficient' },
    ],
  },
  {
    category: 'Automation & DevOps',
    skills: [
      { name: 'Docker', level: 'proficient' },
      { name: 'Flask', level: 'proficient' },
      { name: 'Jenkins', level: 'proficient' },
      { name: 'Power Automate', level: 'proficient' },
      { name: 'Boto3', level: 'proficient' },
    ],
  },
  {
    category: 'Cloud & Data',
    skills: [
      { name: 'AWS (CCP certified)', level: 'proficient' },
      { name: 'PowerBI', level: 'proficient' },
      { name: 'Pandas', level: 'expert' },
      { name: 'SQLAlchemy', level: 'proficient' },
    ],
  },
  {
    category: 'FinTech Domain',
    skills: [
      { name: 'Bank Connectivity (SaaS)', level: 'expert' },
      { name: 'ISO 20022 / pain001 / camt', level: 'working' },
      { name: 'MT101 / BAI2 / SWIFT', level: 'working' },
      { name: 'TMS Integration', level: 'proficient' },
      { name: 'Treasury Operations', level: 'working' },
    ],
  },
  {
    category: 'Process & Leadership',
    skills: [
      { name: 'Agile / Scrum', level: 'expert' },
      { name: 'P1/P2 Incident Management', level: 'expert' },
      { name: 'Disaster Recovery', level: 'proficient' },
      { name: 'Team Training & Onboarding', level: 'expert' },
      { name: 'Risk-Based Testing', level: 'proficient' },
    ],
  },
]

export interface Certification {
  name: string
  issuer: string
  date: string
  badge: string
  url?: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    badge: 'AWS',
  },
  {
    name: 'Oracle Certified Java Associate SE 8',
    issuer: 'Oracle',
    date: 'Apr 2021',
    badge: 'Oracle',
  },
  {
    name: 'On-the-Spot Award',
    issuer: 'ION Group',
    date: 'Dec 2023',
    badge: 'Award',
  },
]
