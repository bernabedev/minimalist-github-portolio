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
      location: 'Bengaluru, India',
      contact: {
        link: 'https://cal.com/freilyn-bernabe-aooipq/15min',
        label: 'Contact Me'
      },
      socials: [
        {
          name: 'Github',
          link: 'https://github.com/bernabedev',
          icon: GithubIcon
        },
        {
          name: 'LinkedIn',
          link: 'https://linkedin.com/in/freilyn-bernabe',
          icon: LinkedinIcon
        },
        {
          name: 'X (Twitter)',
          link: 'https://x.com/bernabedev',
          icon: TwitterIcon
        }
      ]
    },
    skills: [
      {
        name: 'Node.js',
        color: '417e38'
      },
      {
        name: 'Express.js',
        color: '000000'
      },
      {
        name: 'Nest.js',
        color: 'ea2845'
      },
      {
        name: 'React',
        color: '60c7de'
      },
      {
        name: 'Next.js',
        color: '000000'
      },
      {
        name: 'Astro',
        color: 'ff5d00'
      },
      {
        name: 'Tailwind CSS',
        color: '0ea5e9'
      },
      {
        name: 'TypeScript',
        color: '#3178c6'
      },
      {
        name: 'JavaScript',
        color: 'f0dc4e'
      }
    ],
    aboutMe: {
      title: 'About Me',
      description:
        'I am a software engineer with a passion for building scalable and efficient web applications.'
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
    ]
  },
  es: {
    profile: {
      name: 'Freilyn Bernabe',
      title: 'Ingeniero de Software',
      description:
        'Soy un ingeniero de software con pasión por construir aplicaciones web escalables y eficientes.',
      location: 'Bengaluru, India',
      contact: {
        link: 'https://cal.com/freilyn-bernabe-aooipq/15min',
        label: 'Contáctame'
      },
      socials: [
        {
          name: 'Github',
          link: 'https://github.com/freidev',
          icon: GithubIcon
        },
        {
          name: 'LinkedIn',
          link: 'https://linkedin.com/in/freilyn-bernabe',
          icon: LinkedinIcon
        },
        {
          name: 'X (Twitter)',
          link: 'https://x.com/bernabedev',
          icon: TwitterIcon
        }
      ]
    },
    skills: [
      {
        name: 'Node.js',
        color: '417e38'
      },
      {
        name: 'Express.js',
        color: '000000'
      },
      {
        name: 'Nest.js',
        color: 'ea2845'
      },
      {
        name: 'React',
        color: '60c7de'
      },
      {
        name: 'Next.js',
        color: '000000'
      },
      {
        name: 'Astro',
        color: 'ff5d00'
      },
      {
        name: 'Tailwind CSS',
        color: '0ea5e9'
      },
      {
        name: 'TypeScript',
        color: '#3178c6'
      },
      {
        name: 'JavaScript',
        color: 'f0dc4e'
      }
    ],
    aboutMe: {
      title: 'Sobre Mí',
      description:
        'Soy un ingeniero de software con pasión por construir aplicaciones web escalables y eficientes.'
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
    ]
  }
}
