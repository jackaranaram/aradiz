# Arqdiz - Sitio Web Corporativo

Sitio web corporativo B2B para Arqdiz Grupo Corporativo, especializado en fabricación, ejecución e instalación de soluciones a medida para proyectos de interior y obra.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Firebase Firestore
- **Hosting**: Vercel

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd arqdiz-web

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local
# Edita .env.local con tus credenciales de Firebase

# Ejecutar servidor de desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 🔧 Configuración de Firebase

Sigue la guía en `firebase-setup.md` para configurar Firebase Firestore y habilitar el formulario de contacto.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx          # Home
│   │   ├── servicios/        # Página de Servicios
│   │   ├── proyectos/        # Portafolio
│   │   ├── nosotros/         # Sobre Nosotros
│   │   └── contacto/         # Contacto con formulario
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                   # Componentes base (Shadcn)
│   ├── sections/             # Secciones de página
│   └── layouts/              # Navbar, Footer, WhatsApp
├── lib/
│   ├── firebase.ts           # Configuración Firebase
│   └── utils.ts
├── config/
│   ├── site.ts               # Configuración del sitio
│   └── theme.ts              # Design tokens
└── public/
    └── images/               # Imágenes y logo
```

## 🎨 Paleta de Colores

- **Primario**: #0E6F73 (Teal corporativo)
- **Secundario**: #4F6F3E (Verde oliva)
- **Acento**: #4FB6B1 (Teal claro)
- **Texto**: #2E2E2E
- **Fondo**: #E6ECEB

## 📄 Páginas

- **Home** (`/`) - Hero, Servicios, Proyectos, CTA
- **Servicios** (`/servicios`) - Detalle de cada servicio
- **Proyectos** (`/proyectos`) - Portafolio completo
- **Nosotros** (`/nosotros`) - Información institucional
- **Contacto** (`/contacto`) - Formulario + Firebase

## 🚀 Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Configurar las variables de entorno de Firebase en Vercel Dashboard.

## ✅ Características

- ✅ Diseño responsive
- ✅ Animaciones suaves con Framer Motion
- ✅ SEO optimizado
- ✅ Dark mode (preparado)
- ✅ Formulario de contacto con Firebase
- ✅ Botón flotante de WhatsApp
- ✅ Imágenes optimizadas con next/image

## 📝 Próximos Pasos

- [ ] Configurar Firebase
- [ ] Actualizar información de contacto real en `src/config/site.ts`
- [ ] Reemplazar imágenes de proyectos por fotos reales
- [ ] Configurar dominio personalizado
- [ ] Deploy a producción

## 📞 Contacto

Para más información sobre este proyecto, contacta a [email@arqdiz.com](mailto:email@arqdiz.com)
