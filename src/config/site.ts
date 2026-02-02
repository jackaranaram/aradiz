/**
 * aradiz - Site Configuration
 * Configuración centralizada del sitio web
 */

export const siteConfig = {
  name: "aradiz",
  tagline: "Grupo Corporativo",
  description:
    "Ejecución profesional de soluciones a medida para proyectos de interior y obra. Desde fabricación hasta instalación, con foco en cumplimiento técnico y eficiencia.",
  url: "https://aradiz.com",
  author: "aradiz Grupo Corporativo",

  // SEO
  keywords: [
    "cortinas técnicas",
    "mobiliario a medida",
    "sistemas de vidrio",
    "instalación profesional",
    "proyectos de interior",
    "obra corporativa",
    "fabricación a medida",
    "soluciones arquitectónicas",
  ] as string[],

  // Contacto
  contact: {
    phone: "+51 XXX XXX XXX", // Reemplazar con número real
    email: "contacto@aradiz.com",
    whatsapp: "+51XXXXXXXXX", // Número de WhatsApp sin espacios
    whatsappMessage: "Hola, me interesa solicitar una cotización para un proyecto.",
    address: "Lima, Perú", // Reemplazar con dirección real
  },

  // Redes sociales (si aplica)
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
  },

  // Navegación principal
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ],

  // Servicios
  services: [
    {
      id: "cortinas-tecnicas",
      title: "Cortinas Técnicas",
      description: "Soluciones funcionales para control de luz y privacidad en espacios corporativos y comerciales.",
      icon: "Blinds",
    },
    {
      id: "mobiliario-medida",
      title: "Mobiliario a Medida",
      description: "Fabricación de mobiliario en melamina diseñado específicamente para las necesidades de cada proyecto.",
      icon: "Armchair",
    },
    {
      id: "sistemas-vidrio",
      title: "Sistemas de Vidrio",
      description: "Instalación de sistemas de vidrio para obras, divisiones y acabados arquitectónicos.",
      icon: "PanelTop",
    },
    {
      id: "instalacion-profesional",
      title: "Instalación Profesional",
      description: "Ejecución técnica con precisión y cumplimiento de plazos en todos los proyectos.",
      icon: "Wrench",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
