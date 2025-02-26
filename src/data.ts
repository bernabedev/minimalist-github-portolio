import GithubIcon from '@icons/socials/github-icon.astro'
import LinkedinIcon from '@icons/socials/linkedin-icon.astro'
import TwitterIcon from '@icons/socials/twitter-icon.astro'

export const data = {
  en: {
    profile: {
      name: 'Freilyn Bernabe',
      title: 'Software Engineer',
      description:
        'I am a software engineer with a passion for building scalable and efficient web applications.',
      location: 'Santiago, Dominican Republic',
      contact: {
        link: 'https://cal.com/freilyn-bernabe-aooipq/15min',
        label: 'Contact Me'
      },
      email: 'freilyn@bernabe.dev',
      socials: [
        {
          name: 'Github',
          link: 'https://github.com/bernabedev',
          icon: GithubIcon
        },
        {
          name: 'LinkedIn',
          link: 'https://linkedin.com/in/bernabedev',
          icon: LinkedinIcon
        },
        {
          name: 'X (Twitter)',
          link: 'https://x.com/bernabedev',
          icon: TwitterIcon
        }
      ]
    },
    aboutMe: {
      title: 'About Me',
      description:
        "I love turning ideas into powerful, scalable web applications. As a Software Engineer, I work with Next.js, NestJS, Vue.js, and Astro to create seamless, high-performing user experiences. 🚀 Let's build something amazing together!"
    },
    projects: [
      {
        title: 'Marketplace Store Web',
        description:
          'A modern marketplace platform developed using Next.js, enabling seamless buying and selling of products with advanced features.',
        tech: 'Next.js',
        link: 'https://www.bernalux.com'
      },
      {
        title: 'Marketplace Backend',
        description:
          'A robust backend system for a marketplace platform built with NestJS, providing scalable APIs and efficient data handling.',
        tech: 'NestJS',
        link: 'https://api.bernalux.com/reference'
      },
      {
        title: 'Marketplace Admin',
        description:
          'An admin panel for managing marketplace operations, developed with Next.js for a seamless user experience.',
        tech: 'Next.js',
        link: 'https://admin.bernalux.com'
      },
      {
        title: 'E-commerce Platform',
        description:
          'An intuitive and responsive e-commerce platform built using Vue.js, designed for efficient online shopping experiences.',
        tech: 'Vue.js',
        link: 'https://ecommerce.mundomovil.com.do'
      },
      {
        title: 'GemCommit',
        description:
          'VS Code extension that generates commit messages automatically using Google Gemini AI, following the Conventional Commits specification.',
        tech: 'TypeScript',
        link: 'https://marketplace.visualstudio.com/items?itemName=bernabe.gemcommit',
        expand: true,
        thumbnail: '/projects/gem-commit.webp'
      }
    ],
    jobs: [
      {
        role: 'Senior Developer Web',
        company: 'Minicode SRL',
        logo: '/companies/minicode.svg',
        duration: '2021 - Present',
        description:
          'Lead developer for multiple high-impact projects, mentoring junior developers, and implementing best practices.',
        link: 'https://mincode.com.do',
        images: [],
        class: 'p-2'
      },
      {
        role: 'Developer Web',
        company: 'ADGSystems E.I.R.L.',
        logo: '/companies/adg-systems.png',
        duration: '2020 - 2020 (4 months)',
        description:
          'Assisted in the development of web applications, gained experience in agile methodologies and version control.',
        link: 'https://startupventures.com',
        images: ['/devvault.png', '/devvault.png']
      },
      {
        role: 'Freelancer',
        company: 'Self-Employed',
        logo: '/companies/freelancer.svg',
        duration: '2019 - 2020',
        description:
          'Delivered web development services for diverse clients, specializing in creating responsive websites, optimizing performance, and developing custom solutions tailored to client needs.',
        link: '',
        images: []
      }
    ],
    githubStats: {
      title: 'GitHub Contributions',
      githubUser: 'bernabedev',
      onGithub: 'On GitHub',
      contributionDesc: 'contributions in the last year',
      less: 'Less',
      more: 'More'
    },
    chatBot: {
      title: 'Chat with Freilyn',
      placeholder: 'Ask me anything',
      btnClear: 'Clear',
      inputPlaceholder: 'Ask a question...'
    },
    footer: {
      powered: 'Built with',
      by: 'by',
      githubBtn: 'View on GitHub'
    }
  },
  es: {
    profile: {
      name: 'Freilyn Bernabe',
      title: 'Ingeniero de Software',
      description:
        'Soy un ingeniero de software con pasión por construir aplicaciones web escalables y eficientes.',
      location: 'Santiago, República Dominicana',
      contact: {
        link: 'https://cal.com/freilyn-bernabe-aooipq/15min',
        label: 'Contáctame'
      },
      email: 'freilyn@bernabe.dev',
      socials: [
        {
          name: 'Github',
          link: 'https://github.com/bernabedev',
          icon: GithubIcon
        },
        {
          name: 'LinkedIn',
          link: 'https://linkedin.com/in/bernabedev',
          icon: LinkedinIcon
        },
        {
          name: 'X (Twitter)',
          link: 'https://x.com/bernabedev',
          icon: TwitterIcon
        }
      ]
    },
    aboutMe: {
      title: 'Sobre Mí',
      description:
        'Me encanta convertir ideas en aplicaciones web potentes y escalables. Como Ingeniero de Software, trabajo con Next.js, NestJS, Vue.js y Astro para crear experiencias de usuario fluidas y de alto rendimiento. 🚀 ¡Construyamos algo increíble juntos!'
    },
    projects: [
      {
        title: 'Marketplace Store Web',
        description:
          'Una plataforma de mercado moderna desarrollada con Next.js, que permite la compra y venta de productos de forma fluida con características avanzadas.',
        tech: 'Next.js',
        link: 'https://www.bernalux.com'
      },
      {
        title: 'Marketplace Backend',
        description:
          'Un sistema backend robusto para una plataforma de mercado construido con NestJS, que proporciona APIs escalables y manejo eficiente de datos.',
        tech: 'NestJS',
        link: 'https://api.bernalux.com/reference'
      },
      {
        title: 'Marketplace Admin',
        description:
          'Un panel de administración para gestionar operaciones de mercado, desarrollado con Next.js para una experiencia de usuario fluida.',
        tech: 'Next.js',
        link: 'https://admin.bernalux.com'
      },
      {
        title: 'Plataforma de E-commerce',
        description:
          'Una plataforma de e-commerce intuitiva y responsive construida con Vue.js, diseñada para experiencias de compra en línea eficientes.',
        tech: 'Vue.js',
        link: 'https://ecommerce.mundomovil.com.do'
      },
      {
        title: 'GemCommit',
        description:
          'Extensión de VS Code que genera mensajes de commit automáticamente utilizando Google Gemini AI, siguiendo la especificación de Commits Convencionales.',
        link: 'https://marketplace.visualstudio.com/items?itemName=bernabe.gemcommit',
        expand: true,
        tech: 'TypeScript',
        thumbnail: '/projects/gem-commit.webp'
      }
    ],
    jobs: [
      {
        role: 'Desarrollador Web Senior',
        company: 'Minicode SRL',
        logo: '/companies/minicode.svg',
        duration: '2021 - Presente',
        description:
          'Desarrollador principal en múltiples proyectos de alto impacto, mentor de desarrolladores junior e implementación de mejores prácticas.',
        link: 'https://mincode.com.do',
        images: [],
        class: 'p-2'
      },
      {
        role: 'Desarrollador Web',
        company: 'ADGSystems E.I.R.L.',
        logo: '/companies/adg-systems.png',
        duration: '2020 - 2020 (4 meses)',
        description:
          'Asistió en el desarrollo de aplicaciones web, ganando experiencia en metodologías ágiles y control de versiones.',
        link: 'https://startupventures.com',
        images: ['/devvault.png', '/devvault.png']
      },
      {
        role: 'Freelancer',
        company: 'Independiente',
        logo: '/companies/freelancer.svg',
        duration: '2019 - 2020',
        description:
          'Proporcioné servicios de desarrollo web para diversos clientes, especializándome en la creación de sitios web responsivos, optimización de rendimiento y desarrollo de soluciones personalizadas adaptadas a las necesidades de los clientes.',
        link: '',
        images: []
      }
    ],
    githubStats: {
      title: 'Contribuciones en GitHub',
      githubUser: 'bernabedev',
      onGithub: 'En GitHub',
      contributionDesc: 'contribuciones en el ultimo año',
      less: 'Menos',
      more: 'Más'
    },
    chatBot: {
      title: 'Chatea con Freilyn',
      placeholder: 'Preguntame cualquier cosa',
      btnClear: 'Limpiar',
      inputPlaceholder: 'Pregunta una pregunta...'
    },
    footer: {
      powered: 'Hecho con',
      by: 'por',
      githubBtn: 'Ver en GitHub'
    }
  },
  skills: [
    {
      name: 'Node.js',
      color: '417e38',
      icon: 'nodejs.svg'
    },
    {
      name: 'Express.js',
      color: '000000',
      icon: 'expressjs.svg'
    },
    {
      name: 'Nest.js',
      color: 'ea2845',
      icon: 'nestjs.svg'
    },
    {
      name: 'React',
      color: '60c7de',
      icon: 'react.svg'
    },
    {
      name: 'Next.js',
      color: '000000',
      icon: 'nextjs.svg'
    },
    {
      name: 'Astro',
      color: 'ff5d00',
      icon: 'astro.svg'
    },
    {
      name: 'Tailwind CSS',
      color: '0ea5e9',
      icon: 'tailwindcss.svg'
    },
    {
      name: 'TypeScript',
      color: '#3178c6',
      icon: 'typescript.svg'
    },
    {
      name: 'JavaScript',
      color: 'f0dc4e',
      icon: 'javascript.svg'
    },
    {
      name: 'Bun',
      color: '000000',
      icon: 'bun.svg'
    },
    {
      name: 'Vue.js',
      color: '42b883',
      icon: 'vuejs.svg'
    }
  ]
}
