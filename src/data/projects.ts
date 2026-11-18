// Case studies. One entry per page under /proyectos/<slug>/.

export type Media = {
  src: string;
  alt: string;
  w: number;
  h: number;
  /** Second source for the dark theme. */
  dark?: string;
  frame?: 'browser' | 'bare';
  /** Muted loop. `src` is its poster and the still shown when motion is reduced. */
  video?: string;
  /** object-position when the media is cropped to fill a box. */
  pos?: string;
};

export type Block =
  | { kind: 'text'; title: string; body?: string[]; points?: string[] }
  | { kind: 'feature'; id?: string; eyebrow?: string; title: string; body: string[]; media: Media[]; tint?: string; flip?: boolean }
  | { kind: 'gallery'; id?: string; title: string; body?: string[]; media: Media[] }
  | { kind: 'index'; title: string; body?: string[]; items: { title: string; text: string; href: string; media: Media }[] }
  | { kind: 'stats'; items: { value: string; label: string }[] }
  | { kind: 'brands'; title: string; body?: string[] }
  | { kind: 'code'; title: string; body: string[]; files: { name: string; code: string }[] };

export type Project = {
  slug: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  title: string;
  lead: string;
  facts: { label: string; value: string }[];
  tags: string[];
  links: { label: string; href: string }[];
  /** Lines of work inside the project, shown as chips on the home card. */
  highlights?: string[];
  /** Headline numbers, shown on the home card. */
  figures?: { value: string; label: string }[];
  hero: Media[];
  heroTint?: string;
  /** Photo with a device in front of it, on a solid brand colour. Replaces `hero`. */
  heroStage?: { photo: Media; device: Media; tint: string };
  blocks: Block[];
};

const mr = (file: string, alt: string, w = 1280, h = 720, extra: Partial<Media> = {}): Media => ({
  src: `/img/mixreal/${file}.webp`,
  alt,
  w,
  h,
  ...extra,
});
const mrVideo = (file: string, alt: string, w: number, h: number, extra: Partial<Media> = {}): Media =>
  mr(file, alt, w, h, { video: `/img/mixreal/${file}.mp4`, ...extra });

// Shared MixReal media.
const mrIndustria = mrVideo('mr-industria', 'Una bomba industrial en 3D, despiezada a tamaño real en una oficina con gafas Meta Quest.', 1280, 720);
const mrHeineken = mrVideo('totem-heineken', 'Tótem interactivo de Heineken: un chico lo activa, elige un juego de baile, responde un trivial y descarga su foto con un QR.', 540, 960, { pos: 'center 30%' });
const mrMarcas = mrVideo('totems-marcas', 'Tótems de la Diputación de Málaga, Sector, Omoda y Grey Goose, con retratos generados con IA.', 540, 960);
const mrFotomaton = mrVideo('fotomaton-ia', 'Panel web del fotomatón: se sube una foto, se elige un estilo, el logo y el color, y sale un retrato generado con IA.', 1280, 720);
const mrProbador = mrVideo('saas-probador', 'Editor web de MixReal: gafas, una gorra y un casco en 3D colocados sobre una cabeza, con controles de escala, posición y rotación.', 1280, 720, { frame: 'browser' });
const mrSaas = mr('saas-anuncio', 'Plataforma de MixReal: la foto de unas zapatillas convertida en un anuncio, con el menú de imagen, vídeo, AR/VR y archivos.', 1024, 1024);
const mrPlaya = mr('vr-avatares-playa', 'Avatares de asistentes en un espacio virtual junto a la playa.');
const iab = (file: string, alt: string, w: number, h: number, frame?: Media['frame']): Media => ({
  src: `/img/iabeauty/${file}.webp`,
  alt,
  w,
  h,
  frame,
});
const vt = (file: string, alt: string, h: number, themed = false): Media => ({
  src: `/img/vitrine/${file}${themed ? '-light' : ''}.svg`,
  dark: themed ? `/img/vitrine/${file}-dark.svg` : undefined,
  alt,
  w: 840,
  h,
});

export const projects: Project[] = [
  {
    slug: 'iabeauty',
    name: 'IABeauty',
    role: 'Senior Software Engineer',
    period: '2026',
    summary:
      'Completo y en producción: agenda, reservas online, avisos por WhatsApp y análisis del negocio, con la web en React y Next.js y las apps en Flutter y React Native.',
    title: 'Un SaaS para gestionar salones de belleza.',
    lead: 'Me incorporé a IABeauty en 2026 como Senior Software Engineer. Aunque el cargo no era de CTO, asumí todo el desarrollo y las decisiones técnicas del producto: la arquitectura, la web en React y Next.js y las apps móviles en Flutter y React Native. Hoy lo usan más de 600 salones, y su app de clientes supera las 20.000 descargas entre App Store y Google Play.',
    figures: [
      { value: '600+', label: 'salones lo usan hoy' },
      { value: '20.000+', label: 'descargas de la app de clientes' },
    ],
    facts: [
      { label: 'Rol', value: 'Senior Software Engineer, al frente de la tecnología' },
      { label: 'Periodo', value: 'Enero – noviembre de 2026' },
      { label: 'Modalidad', value: 'Remoto, jornada completa' },
      { label: 'Plataformas', value: 'Web, iOS y Android' },
    ],
    tags: ['React', 'Next.js', 'Flutter', 'React Native', 'TypeScript', 'REST', 'GraphQL'],
    links: [{ label: 'iabeauty.es', href: 'https://iabeauty.es' }],
    hero: [],
    heroStage: {
      photo: { ...iab('salon-barberia', 'Un barbero prepara a un cliente en una barbería con luz cálida.', 1080, 1349), pos: 'center 30%' },
      device: iab('app-salon', 'App de IABeauty en dos iPhone: la agenda del día y las estadísticas del salón.', 1400, 1738, 'bare'),
      tint: '#01241B',
    },
    blocks: [
      {
        kind: 'text',
        title: 'El producto',
        body: [
          'IABeauty reúne lo que necesita un salón para funcionar: agenda, ficha de clientes, recordatorios automáticos por WhatsApp, reservas online las 24 horas, control horario del equipo, marketing y análisis del negocio.',
          'El equipo trabaja desde la app y la web, y los clientes tienen su propia app para reservar.',
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '600+', label: 'salones trabajan con IABeauty' },
          { value: '20.000+', label: 'descargas de la app de clientes en App Store y Google Play' },
        ],
      },
      {
        kind: 'feature',
        eyebrow: 'App del salón',
        title: 'La agenda del día, en el bolsillo.',
        body: [
          'Las citas de cada profesional, la ficha de cada cliente y las cifras del salón, con las mismas funciones en iOS y Android.',
          'Todo se sincroniza en tiempo real con la web: si recepción mueve una cita, el móvil de la estilista ya lo sabe.',
        ],
        media: [iab('peluqueria', 'Una peluquera trabajando con una clienta en el salón.', 736, 1104)],
      },
      {
        kind: 'feature',
        eyebrow: 'Clientes',
        title: 'Menos citas perdidas, más reservas.',
        body: [
          'Avisos por WhatsApp antes de cada cita y una app para que los clientes encuentren su salón, reserven y repitan servicio en un toque.',
        ],
        media: [
          iab('recordatorio', 'Recordatorio de cita en la pantalla de bloqueo de un iPhone.', 1000, 1273, 'bare'),
          iab('app-clientes', 'App de clientes de IABeauty: mapa de salones y reserva.', 1400, 1521, 'bare'),
        ],
        tint: '#01241B',
        flip: true,
      },
      {
        kind: 'feature',
        eyebrow: 'Panel web',
        title: 'El negocio, de un vistazo.',
        body: ['Facturación, servicios y productos desde el navegador, con informes para entender cómo va el salón mes a mes.'],
        media: [iab('panel-facturacion', 'Panel web de IABeauty con la gráfica de facturación mensual.', 1024, 663, 'browser')],
      },
      {
        kind: 'text',
        title: 'Mi trabajo',
        points: [
          'Elección del stack, de las herramientas y de las prioridades técnicas.',
          'Arquitectura y desarrollo full stack de la web con React y Next.js, cuidando el SEO y los tiempos de carga.',
          'Apps multiplataforma en Flutter y React Native, sincronizadas al instante con la web.',
          'Patrones de diseño limpios, gestión de estado compleja e integración de APIs REST y GraphQL.',
          'Scrum y Kanban junto a producto y diseño, y revisión de código en cada cambio.',
        ],
      },
    ],
  },
  {
    slug: 'mixreal',
    name: 'MixReal AI',
    role: 'CTO',
    period: '2023 – 2025',
    summary:
      'Entré como programador y terminé como CTO. Por el camino saqué adelante la plataforma de IA generativa de la empresa y proyectos muy distintos para marcas como Heineken, Bayer o Alcampo.',
    title: 'Software, IA y realidad extendida para grandes marcas.',
    lead: 'Durante casi tres años llevé la tecnología de MixReal AI. Allí desarrollé la plataforma de IA generativa de la empresa y una larga lista de proyectos para clientes: tótems interactivos, realidad mixta para la industria, metaversos y filtros de realidad aumentada para marcas como Heineken, Bayer o Alcampo.',
    facts: [
      { label: 'Rol', value: 'CTO. Antes, programador.' },
      { label: 'Periodo', value: 'Febrero de 2023 – diciembre de 2025' },
      { label: 'Equipo', value: 'Dirigí el equipo de ingeniería' },
      { label: 'Base', value: 'Madrid · Híbrido' },
    ],
    tags: ['Unity', 'C++', 'Meta Quest', 'Effect House', 'Spark AR', 'Python', 'Node.js', 'IA generativa', 'Cloud'],
    links: [{ label: 'mixreal.com', href: 'https://mixreal.com' }],
    highlights: [
      'SaaS de IA generativa',
      'Tótems interactivos',
      'Fotomatón con IA',
      'Realidad mixta industrial',
      'Probador virtual 3D',
      'Metaversos',
      'Filtros AR',
    ],
    hero: [mrIndustria, mrHeineken],
    blocks: [
      {
        kind: 'text',
        title: 'Mi papel',
        body: [
          'Empecé en febrero de 2023 como programador: experiencias de realidad virtual en Unity, filtros de realidad aumentada y backend en Node.js.',
          'En pocos meses pasé a dirigir la tecnología de la compañía como CTO. Me encargué del equipo de ingeniería, de la hoja de ruta técnica y de la arquitectura de todo lo que construíamos, hasta diciembre de 2025.',
          'Siempre con dos frentes abiertos: los encargos de cada cliente y nuestro propio SaaS.',
        ],
      },
      {
        kind: 'index',
        title: 'Lo que construí en MixReal.',
        body: ['Estos son los principales, del producto propio a los encargos para clientes.'],
        items: [
          { title: 'El SaaS de MixReal', text: 'Plataforma web de IA generativa de imagen y vídeo.', href: '#saas', media: mrSaas },
          { title: 'Tótems interactivos', text: 'Juegos y fotos para activaciones de marca.', href: '#totems', media: { ...mrHeineken, pos: 'center 38%' } },
          { title: 'Fotomatón con IA', text: 'Retratos generados al momento, con la imagen de cada marca.', href: '#fotomaton', media: mrFotomaton },
          { title: 'Realidad mixta industrial', text: 'Formación con maquinaria virtual en Meta Quest.', href: '#industria', media: mrIndustria },
          { title: 'Probador virtual 3D', text: 'Gafas, gorras y cascos en 3D para tiendas online.', href: '#ar', media: mrProbador },
          { title: 'Metaversos', text: 'Espacios con avatares para congresos y clases.', href: '#metaversos', media: mrPlaya },
        ],
      },
      {
        kind: 'brands',
        title: 'Marcas con las que trabajé',
        body: ['Del gran consumo a la cosmética, la moda o la formación profesional.'],
      },
      {
        kind: 'feature',
        id: 'saas',
        eyebrow: 'Producto propio',
        title: 'El SaaS de MixReal.',
        body: [
          'Construí el producto de la empresa: una web donde cualquiera convierte la foto de un producto en anuncios, imágenes y vídeos generados con IA, y gestiona sus proyectos de AR y VR desde el mismo panel.',
          'Investigué, integré y optimicé los modelos de imagen y vídeo, con pipelines de procesamiento multimedia en Python y Node.js sobre infraestructura cloud.',
        ],
        media: [mrSaas],
      },
      {
        kind: 'feature',
        id: 'totems',
        eyebrow: 'Software a medida',
        title: 'Tótems interactivos para marcas.',
        body: [
          'Aplicaciones para pantallas táctiles en eventos y puntos de venta: juegos de baile y de ritmo que se controlan con el cuerpo, trivial, fotos y vídeos con IA, y el resultado se descarga con un QR.',
          'Cada cliente tenía su versión: Heineken, Grey Goose, Sector, Omoda o la Diputación de Málaga.',
        ],
        media: [mrHeineken, mrMarcas],
        flip: true,
      },
      {
        kind: 'feature',
        id: 'fotomaton',
        eyebrow: 'IA generativa',
        title: 'Un fotomatón con IA.',
        body: [
          'Un panel web para preparar el fotomatón de cada evento: la marca sube su logo y su fondo, elige los estilos y su color corporativo, y el tótem convierte la foto de cada asistente en un retrato al estilo elegido.',
        ],
        media: [mrFotomaton],
      },
      {
        kind: 'feature',
        id: 'industria',
        eyebrow: 'Realidad mixta',
        title: 'Maquinaria a tamaño real con Meta Quest.',
        body: [
          'Apps de formación y mantenimiento: una bomba industrial aparece en tu propia sala y la desmontas pieza a pieza.',
          'El modelo se prepara en Unity y se ve en las gafas sin perder de vista el entorno real.',
        ],
        media: [mrIndustria],
        flip: true,
      },
      {
        kind: 'feature',
        id: 'ar',
        eyebrow: 'Realidad aumentada',
        title: 'Probador virtual y filtros AR.',
        body: [
          'Un editor web para tiendas online: subes gafas, gorras o cascos en 3D, los ajustas sobre una cabeza (escala, posición y rotación) y quedan listos para que el cliente se los pruebe.',
          'Además, filtros para campañas en Instagram y TikTok, hechos con Effect House y Spark AR.',
        ],
        media: [mrProbador],
      },
      {
        kind: 'gallery',
        id: 'metaversos',
        title: 'Metaversos para congresos y formación.',
        body: [
          'Espacios compartidos con avatares donde una marca reúne a su público sin que nadie se mueva de casa: salas, auditorios, escenarios al aire libre y laboratorios para clases prácticas.',
        ],
        media: [
          mrPlaya,
          mr('vr-formacion', 'Laboratorio virtual con un avatar con bata y piezas de equipo para una clase práctica.'),
          mr('vr-sistema-solar', 'Asistentes con avatar frente a un sistema solar en un aula virtual.'),
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '3 años', label: 'al frente de la tecnología' },
          { value: '14 marcas', label: 'entre nuestros clientes' },
          { value: '10.000+', label: 'usuarios en la plataforma' },
          { value: 'CDTI', label: 'I+D subvencionado en realidad mixta e IA' },
        ],
      },
      {
        kind: 'text',
        title: 'I+D con el CDTI',
        body: [
          'MixReal desarrolló el proyecto «Constructor de proyectos basados en Realidad Mixta de forma escalable y haciendo uso de Inteligencia Artificial», subvencionado por el CDTI. Unía las dos líneas en las que trabajaba mi equipo: la realidad mixta y la IA.',
        ],
      },
    ],
  },
  {
    slug: 'vitrine',
    name: 'Vitrine',
    role: 'Autor · open source',
    period: '2026',
    summary:
      'Una GitHub Action de código abierto: escribes un YAML y genera las tarjetas de tu perfil, en modo claro y oscuro y sin depender de servicios externos.',
    title: 'Tarjetas Liquid Glass para tu perfil de GitHub.',
    lead: 'Vitrine es una GitHub Action open source que convierte un archivo YAML en las tarjetas de tu perfil: una portada de cristal, un bento de lo que haces, una tabla de tecnologías, tu actividad del año y un botón para cada enlace.',
    facts: [
      { label: 'Rol', value: 'Autor y mantenedor' },
      { label: 'Lanzamiento', value: 'v1.0.0, octubre de 2026' },
      { label: 'Licencia', value: 'MIT' },
      { label: 'Stack', value: 'Node.js, GitHub Actions, SVG, esbuild' },
    ],
    tags: ['Node.js', 'GitHub Actions', 'SVG', 'esbuild', 'Python'],
    links: [
      { label: 'Repositorio', href: 'https://github.com/Acarfilms/vitrine' },
      { label: 'Verlo en mi perfil', href: 'https://github.com/Acarfilms' },
    ],
    hero: [vt('hero', 'Portada de Vitrine: mi nombre, rol y tres widgets de cristal sobre un fondo azul de olas.', 390)],
    blocks: [
      {
        kind: 'code',
        title: 'Un YAML y cero servicios externos.',
        body: [
          'Describes tu perfil en vitrine.yml y la Action renderiza los SVG dentro de tu propio repositorio. No depende de ningún servicio de tarjetas alojado: si mañana cierra uno, tus tarjetas siguen ahí.',
          'Se ejecuta a diario y cada vez que editas la configuración, y solo hace commit si hay cambios.',
        ],
        files: [
          {
            name: 'vitrine.yml',
            code: `hero:
  name: Angel Carrascosa
  role: Full-stack developer
  tagline: Apps, web and AI products.
  widgets:
    - { icon: location, label: Based in, value: Madrid }
    - { icon: code, label: Focus, value: Apps · Web · AI }

specs:
  rows:
    - label: Mobile
      items: [flutter, dart]

activity: true`,
          },
          {
            name: '.github/workflows/vitrine.yml',
            code: `on:
  push:
    paths: [vitrine.yml]
  schedule:
    - cron: '0 6 * * *'

jobs:
  render:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: Acarfilms/vitrine@v1`,
          },
        ],
      },
      {
        kind: 'feature',
        eyebrow: 'Diseño',
        title: 'Cristal de verdad, dentro de un SVG.',
        body: [
          'Los paneles refractan el fondo con filtros SVG, como el Liquid Glass de Apple, y la tipografía Inter va embebida en cada tarjeta, recortada a los caracteres que se usan. Se ve igual en cualquier navegador.',
        ],
        media: [vt('expertise', 'Tarjeta de expertise de Vitrine: un bento con apps y web, IA autónoma y liderazgo.', 596, true)],
      },
      {
        kind: 'gallery',
        title: 'Claro y oscuro, como GitHub.',
        body: ['Las tarjetas de tecnologías y actividad salen en versión clara y oscura y siguen el tema de quien visita el perfil.'],
        media: [
          vt('specs', 'Tarjeta de tecnologías de Vitrine con móvil, web, backend, DevOps y planificación.', 416, true),
          vt('activity', 'Tarjeta de actividad de Vitrine con las contribuciones de los últimos doce meses.', 374, true),
        ],
      },
      {
        kind: 'text',
        title: 'Ingeniería',
        points: [
          'CLI y Action en Node.js (ESM), empaquetados con esbuild en un solo archivo.',
          'La CI falla si el bundle no corresponde al código, así que lo publicado es siempre lo que hay en el repo.',
          'Tests del renderizado, de la validación de la configuración y de la lectura de la API de GitHub.',
          'Subconjuntos de Inter generados con un script de Python para que cada tarjeta pese lo mínimo.',
          'Versionado semántico con etiquetas fijas y una etiqueta v1 que avanza con cada versión.',
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)!;
