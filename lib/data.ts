export const siteConfig = {
  name: 'Piyush Shivam',
  title: 'Implementation Engineer · FinTech SaaS',
  description:
    'Implementation Engineer with 5 years at ION Group building bank connectivity solutions, founding TechOps teams, and automating enterprise operations workflows in FinTech SaaS.',
  email: 'pishivam009@gmail.com',
  linkedin: 'https://linkedin.com/in/piyush-shivam',
  github: 'https://github.com/pishivam009',
  location: 'Bengaluru, India',
  openToRelocation: 'Open to relocation: Singapore · UK · Netherlands',
}

export const heroTagline =
  'I build the systems that keep enterprise payments moving — and the teams that run them.'

export const summary = `5 years at ION Group, a global FinTech SaaS platform serving banks and corporates. I identified a gap in how the company handled SaaS operations, proposed a structure, and built the Coral TechOps team from zero — training 7 engineers to full operational independence in 3 months. That same pattern-recognition now drives how I approach enterprise client migrations on NextGen bank connectivity infrastructure.

My edge: deep technical execution combined with the ability to build teams and present to C-suite. Documented in a 5/5 performance review — "goes far beyond expectations" — in 2024.`

export const heroStats = [
  { value: '5', unit: 'years', label: 'at ION Group' },
  { value: '7', unit: 'engineers', label: 'founded & trained' },
  { value: '18+', unit: 'hrs/sprint', label: 'automated away' },
  { value: '5/5', unit: 'rating', label: 'performance (2024)' },
]

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
    tagline: 'Executing enterprise treasury client migrations to NextGen bank connectivity platform.',
    bullets: [
      'Delivered end-to-end migrations for 7+ enterprise treasury clients from legacy to NextGen bank connectivity infrastructure',
      'Writing and modifying migration scripts; diagnosing payment format issues across pain001, MT101, camt052/053, BAI2',
      'Resolved recurring migration blockers and embedded fixes into team runbooks — preventing recurrence across future client go-lives',
      'Coordinating across banks, clients, Dev, and DevOps teams during high-stakes production cutover windows',
      'Supporting certificate provisioning for bank connectivity clients across 5+ TMS platforms',
    ],
  },
  {
    id: 'agile-lead',
    title: 'Agile Team Lead / Product Owner — NextGen Squad',
    company: 'ION Group',
    period: 'Jun 2025 – Apr 2026',
    tagline: 'Led sprint delivery for one NextGen squad; owned backlog and UAT sign-off.',
    type: 'past',
    bullets: [
      'Managed sprint backlog and ran all Agile ceremonies for a 6-person delivery squad',
      'Wrote user stories and acceptance criteria for Admin UI features shipped to enterprise clients',
      'Coordinated UAT sign-off with external TMS integration teams, shortening sign-off cycles',
      'Introduced shift-left testing practices — catching integration defects earlier in the delivery pipeline',
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
      'Identified that P1/P2 incidents and BAU operations were falling to senior engineers with no dedicated ownership — proposed and built the Coral TechOps structure from scratch',
      'Recruited and onboarded 7 engineers; designed a structured 3-month training programme across all critical ops workflows',
      'Team reached full operational independence within 3 months — handling all P1/P2 incidents, DR execution, and BAU independently',
      'Authored 10+ operational runbooks (COMMS, DNC, EBICS, OpenSearch, DR) — still the team\'s primary reference',
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
      'Built Flask/Docker alert deduplicator against AWS OpenSearch — significantly reduced redundant alert volume and eliminated alert fatigue across the ops team',
      'Designed and maintained 20+ OpenSearch dashboards and monitors with automated Jira ticket creation on threshold breach',
      'Automated MDS calendar reconciliation in Python/pandas — saving 18+ hours per sprint (confirmed measurement)',
      'Contributed to CEO-level bank connectivity taxonomy initiative spanning 5 TMS platforms',
      'Built SQL pipelines and PowerBI dashboards for legacy migration analysis; built Certificate Expiry Notification tool',
      'Contributed Grafana dashboard templates subsequently adopted by multiple product teams',
      'Parallelised E2E payment test suite (Java/JUnit) — 30% faster execution, 40% shorter regression window',
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
    label: 'Zero to full operational independence',
    description:
      'Founded the Coral TechOps team from scratch — recruited, trained, and got 7 engineers handling P1/P2 incidents, DR, and BAU independently.',
    icon: 'Users',
  },
  {
    id: 'sprint-savings',
    metric: '18+',
    unit: 'hrs/sprint',
    label: 'Recurring manual work eliminated',
    description:
      'Python/pandas automation of the MDS calendar reconciliation process. Confirmed measurement — every sprint, permanently.',
    icon: 'Clock',
  },
  {
    id: 'test-speed',
    metric: '30%',
    unit: 'faster',
    label: 'Test suite execution time',
    description:
      'Parallelised and parameterised the E2E payment test suite (Java/JUnit) — 30% faster runs, 40% shorter regression window. Measured.',
    icon: 'Zap',
  },
  {
    id: 'clients-migrated',
    metric: '7+',
    unit: 'clients',
    label: 'Enterprise treasury migrations delivered',
    description:
      'End-to-end NextGen bank connectivity migrations for enterprise treasury clients — coordinating across banks, DevOps, and TMS integration teams.',
    icon: 'ArrowRight',
  },
  {
    id: 'runbooks',
    metric: '10+',
    unit: 'runbooks',
    label: 'Operational playbooks authored',
    description:
      'Wrote 10+ operational runbooks (COMMS, DNC, EBICS, OpenSearch, DR) — the foundational docs that enabled TechOps team independence.',
    icon: 'BookOpen',
  },
  {
    id: 'perf-review',
    metric: '5/5',
    unit: '',
    label: 'Performance review, 2024',
    description:
      '"Goes far beyond expectations" — Ravi Visveswaran, ION Group. Progression: 4/5 in 2022, 4/5 in 2023, 5/5 in 2024.',
    icon: 'Star',
  },
]

export interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core Languages',
    icon: 'Code',
    skills: ['Python', 'SQL', 'Java', 'PowerShell', 'Bash'],
  },
  {
    category: 'Observability & Monitoring',
    icon: 'Activity',
    skills: ['AWS OpenSearch / ELK', 'Grafana', 'AWS CloudWatch'],
  },
  {
    category: 'Automation & Infrastructure',
    icon: 'Settings',
    skills: ['Docker', 'Flask', 'Jenkins', 'Boto3 / AWS SDK', 'Power Automate'],
  },
  {
    category: 'Data & Reporting',
    icon: 'BarChart',
    skills: ['Pandas', 'PowerBI', 'SQLAlchemy', 'Excel Automation'],
  },
  {
    category: 'FinTech Domain',
    icon: 'Building',
    skills: [
      'Bank Connectivity (SaaS)',
      'ISO 20022 · pain001 · camt052/053',
      'MT101 · BAI2 · SWIFT',
      'TMS Integration (5+ platforms)',
      'Enterprise Treasury Operations',
    ],
  },
  {
    category: 'Delivery & Leadership',
    icon: 'Users',
    skills: [
      'Agile / Scrum',
      'P1/P2 Incident Management',
      'Disaster Recovery',
      'Team Building & Training',
      'Risk-Based Testing',
    ],
  },
]

export interface Certification {
  name: string
  issuer: string
  date: string
  badge: string
  description: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    badge: 'AWS',
    description: 'Cloud fundamentals, AWS services, security, architecture, pricing.',
  },
  {
    name: 'On-the-Spot Award',
    issuer: 'ION Group',
    date: 'Dec 2023',
    description: 'Awarded for automation and monitoring contributions to ION Corporates platform.',
    badge: 'Award',
  },
  {
    name: 'Oracle Certified Java Associate SE 8',
    issuer: 'Oracle',
    date: 'Apr 2021',
    badge: 'Oracle',
    description: 'Java SE 8 fundamentals — foundational to E2E payment test automation work.',
  },
]
