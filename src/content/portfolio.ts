export const siteLinks = {
  email: 'mailto:contact@victorfn.com',
  github: 'https://github.com/Swarmino',
  itch: 'https://swarmino.itch.io/',
  linkedin: 'https://www.linkedin.com/in/victorfn/',
  showreel: 'https://youtu.be/-XIfHc0to2s',
} as const

type Discipline = Readonly<{
  description: string
  href: string
  id: string
  index: string
  label: string
  title: string
  tools: string
}>

export const disciplines = [
  {
    id: 'front-end-ui',
    index: '01',
    title: 'Front-end & UI',
    description:
      'Interfaces with a strong visual point of view, thoughtful interaction and maintainable systems behind them.',
    tools: 'React · Next.js · TypeScript · Figma',
    href: siteLinks.github,
    label: 'Explore code',
  },
  {
    id: 'mobile-products',
    index: '02',
    title: 'Mobile products',
    description:
      'Native and cross-platform experiences shaped around the device, the context and the person holding it.',
    tools: 'SwiftUI · Kotlin · React Native',
    href: siteLinks.github,
    label: 'See projects',
  },
  {
    id: 'games-interaction',
    index: '03',
    title: 'Games & interaction',
    description:
      'Playful systems, rapid prototypes and digital worlds where code, art direction and feel meet.',
    tools: 'Unity · C# · Godot · Unreal',
    href: siteLinks.itch,
    label: 'Play the work',
  },
] satisfies readonly Discipline[]

type ToolkitItem = Readonly<{
  description: string
  id: string
  title: string
}>

export const toolkit = [
  {
    id: '01',
    title: 'Design',
    description: 'UI direction, prototyping, design systems, accessibility',
  },
  {
    id: '02',
    title: 'Build',
    description: 'React, Next.js, TypeScript, SwiftUI, Kotlin, C#',
  },
  {
    id: '03',
    title: 'Lead',
    description: 'Product thinking, collaboration, critique, team process',
  },
] satisfies readonly ToolkitItem[]

export const facts = [
  { label: 'Current focus', value: 'Front-end & UI leadership' },
  { label: 'Education', value: "Two bachelor's degrees" },
  { label: 'Perspective', value: 'Design + engineering' },
] as const

export const socialLinks = [
  { href: siteLinks.linkedin, label: 'LinkedIn', shortLabel: 'in' },
  { href: siteLinks.github, label: 'GitHub', shortLabel: 'gh' },
  { href: siteLinks.showreel, label: 'YouTube', shortLabel: 'yt' },
] as const
