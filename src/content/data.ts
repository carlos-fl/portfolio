import type { Data } from "../interfaces/interfaces" 

export const data: Data = {
  "languages": {
    "spanish": {
      "navbar": {
        "links": [
          {
            "name": "Inicio",
            "href": "#home"
          },
          {
            "name": "Sobre mi",
            "href": "#about"
          },
          {
            "name": "Proyectos",
            "href": "#projects"
          }
        ]
      },
      "homeDescription": {
        "desc": "Apasionado por el desarrollo de software, me especializo en crear soluciones Full Stack modernas y funcionales que resuelven necesidades reales de negocio. Desde la comprensión de requerimientos hasta la optimización de procesos mediante tecnología, diseño sistemas que mejoran la eficiencia operativa, permiten una mejor toma de decisiones y conectan datos de forma inteligente entre distintas plataformas"
      },
      "aboutDescription": {
        "desc": "Me apasiona el desarrollo de software y las infinitas posibilidades que ofrece para crear soluciones innovadoras. Me especializo en desarrollo web, y también me interesa trabajar en sistemas de más bajo nivel, como la creación de herramientas personalizadas, automatización de procesos o utilidades que optimicen el rendimiento y la productividad.",
        "span": "Tecnologías con las que he trabajado"
      },
      "footerDescription": {
        "desc": "construido y diseñado por Juan Carlos Flores",
        "span": "Todos los derechos reservados"
      },
      "projects": 
        [
          {
            "title": "Arquitectura Escalable para Plataforma de Comercio Electrónico en Azure",
            "date": "Julio 2025",
            "desc": "Diseñé e implementé una arquitectura robusta y escalable para una plataforma de comercio electrónico utilizando servicios en la nube de Azure. El sistema soporta altos volúmenes de transacciones, proporciona una experiencia de usuario fluida mediante un portal web centralizado y permite la gestión completa de productos y pedidos a través de un backoffice. Además, incluye capacidades analíticas en tiempo real basadas en los datos de ventas.",
            "stack": ["Terraform"],
            "image": "/portfolio-images/ecommerce-terraform.png",
            "urls": [
              { 
                title: "Segundo Repositorio",
                link: "https://github.com/carlos-fl/ecommerce-experts-etl-repo"
              },
              { 
                title: "Tercer Repositorio",
                link: "https://github.com/carlos-fl/ecommerce-infra-nginx-erp-db"
              },
              { 
                title: "Diagrama",
                link: "https://app.diagrams.net/?splash=0#G1xz6bgtVmvRx2ZHQc4uHk-_j3QGtZ91sW#%7B%22pageId%22%3A%223ryXmbK_fZ9IIqpPYdSw%22%7D"
              }
            ],
            "github": "https://github.com/carlos-fl/proyecto_ingenieria"
          },
          {
            "title": "Sistema de Registro UNAH",
            "date": "Abril 2025",
            "desc": "Una plataforma web para gestionar procesos académicos y administrativos en la UNAH. Incluye módulos para admisiones, matrícula de estudiantes, acceso a biblioteca y chat interno. Las herramientas para docentes permiten la carga de calificaciones, gestión de recursos del curso y funciones de coordinación. Diseñada para centralizar y optimizar las operaciones universitarias para estudiantes y personal.",
            "stack": ["PHP", "MySQL", "Javascript", "HTML", "CSS", "Bootstrap"],
            "image": "/portfolio-images/registro.png",
            "urls": [],
            "github": "https://github.com/carlos-fl/proyecto_ingenieria"
          },
          {
            "title": "ETL",
            "date": "Diciembre 2024",
            "desc": "Una aplicación web para diseñar y ejecutar procesos ETL (Extracción, Transformación, Carga). Ofrece una interfaz visual para construir flujos de datos sin escribir código. Inspirada en Visual Studio Integration Services, proporciona funcionalidad de arrastrar y soltar. Simplifica tareas de integración de datos para usuarios no técnicos.",
            "stack": ["Javascript", "HTML", "CSS", "Bootstrap", "NodeJS", "Express"], 
            "image": "/portfolio-images/etl.png",
            "urls": [],
            "github": "https://github.com/carlos-fl/ETL-BASES2"
          },
          {
            "title": "CRUD DB",
            "date": "Julio 2024",
            "desc": "Una herramienta de escritorio para gestionar bases de datos a través de una interfaz amigable. Permite asignar roles y permisos, crear bases de datos, tablas y usuarios, así como llenar tablas con datos. Diseñada como una alternativa visual a SQL Workbench, con todas las operaciones realizadas mediante la interfaz gráfica, sin necesidad de comandos.",
            "stack": ["Python", "PyQt5", "SQL Server"],
            "image": "/portfolio-images/crud-db3.jpeg",
            "urls": [], 
            "github": "https://github.com/carlos-fl/CRUD-BDI"
          },
          {
            "title": "CodeSpace",
            "date": "Diciembre 2023",
            "desc": "Una aplicación web Full Stack diseñada para programación en equipo en tiempo real. Ofrece autenticación de usuarios, integración con base de datos y soporte para múltiples lenguajes de programación. Inspirada en plataformas como CodePen, permite la edición colaborativa de código en el navegador. Construida para facilitar el trabajo en equipo y la creación de prototipos.",
            "stack": ["Javascript", "HTML", "CSS", "NodeJS", "MongoDB", "Express"],
            "image": "/portfolio-images/codeSpace.png",
            "urls": [],
            "github": "https://github.com/carlos-fl/CodeSpace-app"
          }
        ]
    },
    "english": {
      "navbar": {
        "links": [
          {
            "name": "Home",
            "href": "#home"
          },
          {
            "name": "About",
            "href": "#about"
          },
          {
            "name": "Projects",
            "href": "#projects"
          }
        ]
      },
        "homeDescription": {
          "desc": "Passionate about software development, I specialize in building modern and functional Full Stack solutions that address real business needs. From understanding client requirements to optimizing operations through technology, I design systems that enhance efficiency, enable better decision-making, and seamlessly connect data across different platforms"
        },
        "aboutDescription": {
          "desc": "I'm passionate about software development and the endless possibilities it offers to create innovative solutions. I specialize in web development and also have a strong interest in lower-level systems, such as building custom tools, automating processes, and developing utilities that improve performance and productivity.",
          "span": "Technologies I have worked with"
        },
        "footerDescription": {
          "desc": "built and designed by Juan Carlos Flores",
          "span": "All rights reserved"
        },
        "projects": [
          {
            "title": "Scalable E-commerce Platform Architecture on Azure",
            "date": "July 2025",
            "desc": "Designed and implemented a robust and scalable architecture for an e-commerce platform using Azure cloud services. The system is capable of handling high transaction volumes, providing a seamless user experience through a centralized web portal, and offering full back-office support for product and order management. Additionally, the platform includes real-time analytics capabilities based on sales data.",
            "stack": ["Terraform"],
            "image": "/portfolio-images/ecommerce-terraform.png",
            "urls": [
              { 
                title: "second repository",
                link: "https://github.com/carlos-fl/ecommerce-experts-etl-repo"
              },
              { 
                title: "Third repository",
                link: "https://github.com/carlos-fl/ecommerce-infra-nginx-erp-db"
              },
              { 
                title: "Diagram",
                link: "https://app.diagrams.net/?splash=0#G1xz6bgtVmvRx2ZHQc4uHk-_j3QGtZ91sW#%7B%22pageId%22%3A%223ryXmbK_fZ9IIqpPYdSw%22%7D"
              }
            ],
            "github": "https://github.com/carlos-fl/proyecto_ingenieria"
          },
          {
            "title": "Academic Management System",
            "date": "April 2025",
            "desc": "A web-based platform for managing academic and administrative processes at UNAH. Includes modules for admissions, student enrollment, library access, and internal chat.Faculty tools support grade submission, course resource management, and coordination roles. Designed to centralize and streamline university operations for students and staff.",
            "stack": ["PHP", "MySQL", "Javascript", "HTML", "CSS", "Bootstrap"],
            "image": "/portfolio-images/registro.png",
            "urls": [],
            "github": "https://github.com/carlos-fl/proyecto_ingenieria"
          },
          {
            "title": "ETL",
            "date": "December 2024",
            "desc": "A web application for designing and executing ETL (Extract, Transform, Load) workflows. Provides a visual interface to build data pipelines without writing code. Inspired by Visual Studio Integration Services, offering drag-and-drop functionality. Simplifies data integration tasks for non-technical users.",
            "stack": ["Javascript", "HTML", "CSS", "Bootstrap", "NodeJS", "Express"],
            "image": "/portfolio-images/etl.png",
            "urls": [],
            "github": "https://github.com/carlos-fl/ETL-BASES2"
          },
          {
            "title": "CRUD DB",
            "date": "July 2024",
            "desc": "A desktop tool for managing databases through a user-friendly interface. Allows role and permission assignment, creation of databases, tables, and users, as well as data entry. Designed as a visual alternative to SQL Workbench, with all operations handled via UI—no commands needed.",
            "stack": ["Python", "PyQt5", "SQL Server"],
            "image": "/portfolio-images/crud-db3.jpeg",
            "urls": [],
            "github": "https://github.com/carlos-fl/CRUD-BDI"
          },
          {
            "title": "CodeSpace",
            "date": "December 2023",
            "desc": "A Full Stack web application designed for real-time team coding. Features user authentication, database integration, and support for multiple programming languages. Inspired by platforms like CodePen, enabling collaborative code editing in the browser. Built to streamline team-based coding and prototyping.",
            "stack": ["Javascript", "HTML", "CSS", "NodeJS", "MongoDB", "Express"],
            "image": "/portfolio-images/codeSpace.png",
            "urls": [],
            "github": "https://github.com/carlos-fl/CodeSpace-app"
          }
        ]
      }
    },
  "stack": {
      "db": ["MongoDB", "MySQL", "Oracle", "SQL Server"],
      "languages": ["Javascript", "PHP", "Python", "Java", "C++"],
      "tech": ["HTML", "CSS", "Typescript", "NodeJS", "Express", "Figma", "Cisco PKT"],
      "frameworks": ["VueJS", "Laravel", "Spring Boot"]
    },
  "highlights": {
    "home": [
  "Full Stack",
  "desarrollo de software",
  "necesidades",
  "negocio",
  "tecnología",
  "eficiencia operativa",
  "mejor",
  "decisiones",
  "software development",
  "Full Stack",
  "software development",
  "needs",
  "business",
  "technology",
  "optimizing operations",
  "better",
  "decisions",
  "software development"
]
,
    "about": [
  "apasiona",
  "software",
  "soluciones innovadoras",
  "Desarrollo web",
  "innovative solutions",
  "web development",
  "automatización de procesos",
  "rendimiento",
  "productividad",
  "passionate",
  "software",
  "innovative solutions",
  "web development",
  "innovative solutions",
  "web development",
  "automating processes",
  "performance",
  "productivity"
]

  }
}

