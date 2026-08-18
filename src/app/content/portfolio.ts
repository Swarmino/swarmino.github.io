export const siteLinks = {
  email: 'mailto:contact@victorfn.com',
  github: 'https://github.com/Swarmino',
  itch: 'https://swarmino.itch.io/',
  linkedin: 'https://www.linkedin.com/in/victorfn/',
  showreel: 'https://youtu.be/-XIfHc0to2s',
} as const;

type Discipline = Readonly<{
  description: string;
  href: string;
  id: string;
  index: string;
  label: string;
  title: string;
  tools: string;
}>;

export const disciplines = [
  {
    id: 'front-end-ui',
    index: '01',
    title: 'Frontend & systems',
    description:
      'Designing and building interfaces that feel considered, perform reliably, and remain maintainable as the product evolves.',
    tools: 'Angular · React · Next.js · TypeScript · Figma',
    href: siteLinks.github,
    label: 'View code',
  },
  {
    id: 'mobile-products',
    index: '02',
    title: 'Mobile products',
    description:
      'Native and cross-platform experiences shaped around the device, the context, and the person using them.',
    tools: 'SwiftUI · Kotlin · React Native',
    href: siteLinks.github,
    label: 'See projects',
  },
  {
    id: 'games-interaction',
    index: '03',
    title: 'Game design & interaction',
    description:
      'Designing systems, prototypes, and interactive experiences where rules, feedback, and emotion work together.',
    tools: 'Unity · C# · Godot · Unreal',
    href: siteLinks.itch,
    label: 'Play the work',
  },
] satisfies readonly Discipline[];

type ToolkitItem = Readonly<{
  description: string;
  id: string;
  title: string;
}>;

export const toolkit = [
  {
    id: '01',
    title: 'Design',
    description:
      'Turn goals and constraints into clear flows, useful prototypes, and interfaces with a distinct point of view.',
  },
  {
    id: '02',
    title: 'Build',
    description:
      'Ship reliable, maintainable products across Angular, React, Next.js, TypeScript, mobile, and interactive technologies.',
  },
  {
    id: '03',
    title: 'Lead',
    description:
      'Create alignment across design, product, and engineering—and help teams make better decisions with momentum.',
  },
] satisfies readonly ToolkitItem[];

export const facts = [
  { label: 'Current focus', value: 'Front-end & UI leadership' },
  { label: 'Background', value: 'Full-stack development, mobile products & game design' },
  { label: 'Based in', value: 'Oslo, Norway' },
] as const;

export const socialLinks = [
  { href: siteLinks.linkedin, label: 'LinkedIn', shortLabel: 'in' },
  { href: siteLinks.github, label: 'GitHub', shortLabel: 'gh' },
  { href: siteLinks.showreel, label: 'YouTube', shortLabel: 'yt' },
] as const;
