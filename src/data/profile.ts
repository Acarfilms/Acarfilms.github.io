// Copy for the home page. Case studies live in projects.ts.

export const profile = {
  name: 'Ángel Carrascosa',
  fullName: 'Ángel Carrascosa Nombela',
  role: 'Senior Software Engineer',
  headline: 'Senior Software Engineer · ex-CTO',
  location: 'Toledo, España',
  availability: 'Disponible para nuevos proyectos',
  description:
    'Soy Ángel Carrascosa, Senior Software Engineer y ex-CTO de MixReal AI. Construyo apps, webs y productos de IA de la primera idea a producción, con un proceso propio de revisión, seguridad y privacidad.',
  links: {
    linkedin: 'https://www.linkedin.com/in/angel-carrascosa-nombela-ab7b72151/',
    github: 'https://github.com/Acarfilms',
    instagram: 'https://www.instagram.com/acarfilms19/',
    source: 'https://github.com/Acarfilms/Acarfilms.github.io',
  },
};

export const heroWidgets = [
  { label: 'Último puesto', value: 'Senior Software Engineer', detail: 'IABeauty · 2026' },
  { label: 'Antes', value: 'Cofundador y CTO', detail: 'MixReal AI · 2023 – 2025' },
  { label: 'Especialidad', value: 'Full stack · Web y móvil', detail: 'React, Flutter, Node.js e IA' },
];

// Logo wall of mixreal.com. Sizes are the trimmed mask files in public/img/brands.
export const brands = [
  { name: 'Heineken', file: 'heineken', w: 640, h: 92 },
  { name: 'Bayer', file: 'bayer', w: 160, h: 160 },
  { name: 'Alcampo', file: 'alcampo', w: 640, h: 155 },
  { name: "L'Oréal", file: 'loreal', w: 640, h: 117 },
  { name: 'Samsung', file: 'samsung', w: 640, h: 98 },
  { name: 'Lidl', file: 'lidl', w: 182, h: 160 },
  { name: 'Johnnie Walker', file: 'johnniewalker', w: 250, h: 160 },
  { name: 'Vogue', file: 'vogue', w: 617, h: 160 },
  { name: 'La Roche-Posay', file: 'laroche', w: 373, h: 160 },
  { name: 'Fanta', file: 'fanta', w: 217, h: 160 },
  { name: 'Eroski', file: 'eroski', w: 640, h: 140 },
  { name: 'Oriflame', file: 'oriflame', w: 640, h: 121 },
  { name: 'IMC Toys', file: 'imc', w: 160, h: 160 },
  { name: 'IFP', file: 'ifp', w: 548, h: 160 },
];

export const stats = [
  { value: '4 años', label: 'liderando la tecnología de MixReal AI e IABeauty' },
  { value: `${brands.length} marcas`, label: 'entre los clientes de MixReal AI' },
  { value: '10.000+', label: 'personas usan hoy la plataforma de IA de MixReal' },
  { value: 'Web + móvil', label: 'apps en producción con React, Next.js, Flutter y React Native' },
];

export const experience = [
  {
    period: '2026',
    role: 'Senior Software Engineer',
    place: 'IABeauty · Remoto',
    note: 'Una plataforma de gestión para salones de belleza: web en Next.js y apps en Flutter y React Native, de la arquitectura a producción.',
    href: '/proyectos/iabeauty/',
  },
  {
    period: '2023 – 2025',
    role: 'Cofundador y CTO',
    place: 'MixReal AI · Madrid',
    note: 'Dirigí el equipo, la hoja de ruta y la arquitectura de todo lo que construíamos, del producto propio a los proyectos para clientes.',
    href: '/proyectos/mixreal/',
  },
  {
    period: '2022',
    role: 'Modelador y texturizador 3D',
    place: 'Innovae · Usurbil',
    note: 'Además, completé un curso de Unity para realidad virtual de 100 horas.',
  },
  {
    period: '2020 – 2021',
    role: 'CFGS Animación 3D, Juegos y Entornos Interactivos',
    place: 'IES Puerta Bonita · Madrid',
    note: '',
  },
  {
    period: '2019 – 2023',
    role: 'Videógrafo y artista 3D freelance',
    place: 'ACARFILMS · Toledo',
    note: 'Rodaje, montaje y etalonaje en DaVinci Resolve, modelado en Maya y escenas en Unity. De ahí viene mi ojo para el detalle visual.',
  },
];

// Icons are simple-icons slugs; items without one render as text.
export const stack = [
  { label: 'Móvil', items: [['Flutter', 'flutter'], ['Dart', 'dart'], ['React Native', 'react']] },
  { label: 'Web', items: [['React', 'react'], ['Next.js', 'nextdotjs'], ['TypeScript', 'typescript'], ['Astro', 'astro']] },
  {
    label: 'Backend y datos',
    items: [['Node.js', 'nodedotjs'], ['Python', 'python'], ['Supabase', 'supabase'], ['Firebase', 'firebase'], ['MongoDB', 'mongodb'], ['GraphQL', 'graphql']],
  },
  { label: 'IA', items: [['Claude Code', 'claude'], ['Subagentes y MCP'], ['IA generativa de imagen y vídeo']] },
  { label: '3D y XR', items: [['Unity', 'unity'], ['C++', 'cplusplus'], ['Maya', 'autodeskmaya'], ['Meta Quest', 'meta'], ['Effect House']] },
  {
    label: 'Herramientas',
    items: [['Git', 'git'], ['GitHub Actions', 'githubactions'], ['Docker', 'docker'], ['Jira', 'jira'], ['Notion', 'notion'], ['DaVinci Resolve', 'davinciresolve']],
  },
  {
    label: 'Proceso y calidad',
    items: [['Conventional Commits', 'conventionalcommits'], ['release-please'], ['Feature flags'], ['ADRs'], ['Dependabot', 'dependabot'], ['OWASP ASVS', 'owasp']],
  },
] as { label: string; items: [string, string?][] }[];
