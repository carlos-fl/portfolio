import type { Data } from "../interfaces/interfaces" 

export const data: Data = {
  "languages": {
    "spanish": {
      "navbar": {
        "links": [
          {
            "name": "Inicio",
            "href": "/es/#home"
          },
          {
            "name": "Sobre mi",
            "href": "/es/#about"
          },
          {
            "name": "Proyectos",
            "href": "/es/#projects"
          }
        ]
      },
      "homeDescription": {
        "desc": "Desarrollador de Software"
      },
      "aboutDescription": {
        "desc": "Apasionado por el desarrollo de software, me especializo en crear soluciones Full Stack modernas y funcionales que resuelven necesidades reales de negocio. Desde la comprensión de requerimientos hasta la optimización de procesos mediante tecnología, diseño sistemas que mejoran la eficiencia operativa, permiten una mejor toma de decisiones y conectan datos de forma inteligente entre distintas plataformas",
        "span": "Tecnologías con las que he trabajado"
      },
      "footerDescription": {
        "desc": "construido y diseñado por Juan Carlos Flores",
        "span": "Todos los derechos reservados"
      },
      "projects": 
        [
          {
            title: "Generador de reportes",
            detailURL: "/projects/pokeapi",
            date: "Agosto 2025",
            desc: "Sistema avanzado para la generación y gestión de reportes de Pokémon basado en datos obtenidos de la PokeAPI. La aplicación permite crear reportes enriquecidos con estadísticas base y habilidades, aplicar muestreos aleatorios y eliminar reportes de forma definitiva tanto en base de datos como en almacenamiento en la nube. El frontend fue desarrollado en Next.js con una interfaz intuitiva, el backend en FastAPI gestionando la lógica de negocio y las integraciones, y el procesamiento asíncrono en Azure Functions con Python. Se utilizaron Azure SQL Database y Azure Blob Storage para persistencia y almacenamiento de archivos, respectivamente, con infraestructura desplegada mediante Terraform. Este proyecto destaca por su arquitectura modular, manejo eficiente de datos y uso de servicios en la nube para lograr escalabilidad y robustez.",
            stack: ["Next.js", "FastAPI", "Azure Functions", "Azure SQL", "Blob Storage", "Terraform", "PokeAPI"],
            image: "/portfolio-images/pokeapi.png",
            urls: [
              { title:"Terraform/infra", link: "https://github.com/carlos-fl/terraform-pokeapi" },
              { title:"UI", link: "https://github.com/carlos-fl/pokeapi-ui" }, 
              { title:"segundo plano python", link: "https://github.com/carlos-fl/pokeapi-function" }, 
              { title:"scripts", link: "https://github.com/carlos-fl/pokeapi-scripts" }, 
            ],
            github: "https://github.com/carlos-fl/pokeapi-api"
          },
          {
            title: "API REST con FastAPI, Redis y Despliegue en Azure",
            detailURL: "/projects/redis-api",
            date: "Julio 2025",
            desc: "API REST de alto rendimiento desarrollada con FastAPI, diseñada para manejar solicitudes de forma eficiente gracias a su naturaleza asíncrona. Se integró Redis como sistema de almacenamiento en memoria para mejorar los tiempos de respuesta, permitir el uso de caché y gestionar datos en tiempo real de forma más eficaz. La API incluye funciones como autenticación, manejo de errores y documentación automática con OpenAPI. Todo el sistema fue desplegado en Microsoft Azure utilizando servicios como Azure App Service y Azure Container Registry, garantizando escalabilidad, fiabilidad y disponibilidad continua. Este proyecto demuestra habilidades en desarrollo backend, despliegue en la nube y optimización de sistemas.",
            stack: ["FastAPI", "Redis", "SQL Server", "Azure", "Docker", "Firebase"],
            image: "/portfolio-images/redis.png",
            urls: [{ title: "Recursos de terraform" , link: "https://github.com/carlos-fl/redis-terraform-resources" }],
            github: "https://github.com/carlos-fl/api-with-redis"
          },
          {
            title: "Arquitectura Escalable para Plataforma de Comercio Electrónico en Azure",
            detailURL: "/projects/Ecommerce-terraform",
            date: "Julio 2025",
            desc: "Diseñé e implementé una arquitectura robusta y escalable para una plataforma de comercio electrónico utilizando servicios en la nube de Azure. El sistema soporta altos volúmenes de transacciones, proporciona una experiencia de usuario fluida mediante un portal web centralizado y permite la gestión completa de productos y pedidos a través de un backoffice. Además, incluye capacidades analíticas en tiempo real basadas en los datos de ventas.",
            stack: ["Terraform"],
            image: "/portfolio-images/ecommerce-terraform.png",
            urls: [
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
            github: "https://github.com/carlos-fl/proyecto_ingenieria"
          },
          {
            title: "Sistema de Registro UNAH",
            detailURL: "/projects/registro-unah",
            date: "Abril 2025",
            desc: "Una plataforma web para gestionar procesos académicos y administrativos en la UNAH. Incluye módulos para admisiones, matrícula de estudiantes, acceso a biblioteca y chat interno. Las herramientas para docentes permiten la carga de calificaciones, gestión de recursos del curso y funciones de coordinación. Diseñada para centralizar y optimizar las operaciones universitarias para estudiantes y personal.",
            stack: ["PHP", "MySQL", "Javascript", "HTML", "CSS", "Bootstrap"],
            image: "/portfolio-images/registro.png",
            urls: [],
            github: "https://github.com/carlos-fl/proyecto_ingenieria"
          },
          {
            title: "ETL",
            detailURL: "/projects/etl",
            date: "Diciembre 2024",
            desc: "Una aplicación web para diseñar y ejecutar procesos ETL (Extracción, Transformación, Carga). Ofrece una interfaz visual para construir flujos de datos sin escribir código. Inspirada en Visual Studio Integration Services, proporciona funcionalidad de arrastrar y soltar. Simplifica tareas de integración de datos para usuarios no técnicos.",
            stack: ["Javascript", "HTML", "CSS", "Bootstrap", "NodeJS", "Express"], 
            image: "/portfolio-images/etl.png",
            urls: [],
            github: "https://github.com/carlos-fl/ETL-BASES2"
          },
          {
            title: "CRUD DB",
            detailURL: "/projects/crud-db",
            date: "Julio 2024",
            desc: "Una herramienta de escritorio para gestionar bases de datos a través de una interfaz amigable. Permite asignar roles y permisos, crear bases de datos, tablas y usuarios, así como llenar tablas con datos. Diseñada como una alternativa visual a SQL Workbench, con todas las operaciones realizadas mediante la interfaz gráfica, sin necesidad de comandos.",
            stack: ["Python", "PyQt5", "SQL Server"],
            image: "/portfolio-images/crud-db3.jpeg",
            urls: [], 
            github: "https://github.com/carlos-fl/CRUD-BDI"
          },
          {
            title: "CodeSpace",
            detailURL: "/projects/codespace",
            date: "Diciembre 2023",
            desc: "Una aplicación web Full Stack diseñada para programación en equipo en tiempo real. Ofrece autenticación de usuarios, integración con base de datos y soporte para múltiples lenguajes de programación. Inspirada en plataformas como CodePen, permite la edición colaborativa de código en el navegador. Construida para facilitar el trabajo en equipo y la creación de prototipos.",
            stack: ["Javascript", "HTML", "CSS", "NodeJS", "MongoDB", "Express"],
            image: "/portfolio-images/codeSpace.png",
            urls: [],
            github: "https://github.com/carlos-fl/CodeSpace-app"
          }
        ]
    },
    "english": {
      "navbar": {
        "links": [
          {
            "name": "Home",
            "href": "/en/#home"
          },
          {
            "name": "About",
            "href": "/en/#about"
          },
          {
            "name": "Projects",
            "href": "/en/#projects"
          }
        ]
      },
        "homeDescription": {
          "desc": "Software Developer"
        },
        "aboutDescription": {
          "desc": "Passionate about software development, I specialize in building modern and functional Full Stack solutions that address real business needs. From understanding client requirements to optimizing operations through technology, I design systems that enhance efficiency, enable better decision-making, and seamlessly connect data across different platforms.",
          "span": "Technologies I have worked with"
        },
        "footerDescription": {
          "desc": "built and designed by Juan Carlos Flores",
          "span": "All rights reserved"
        },
        "projects": [
          {
            title: "Report Generator",
            date: "August 2025",
            desc: "Advanced system for generating and managing Pokémon reports based on data retrieved from the PokeAPI. The application allows creating enriched reports with base stats and abilities, applying random sampling, and permanently deleting reports from both the database and cloud storage. The frontend was built with Next.js featuring an intuitive interface, the backend with FastAPI handling business logic and integrations, and asynchronous processing in Azure Functions with Python. Azure SQL Database and Azure Blob Storage were used for persistence and file storage, respectively, with infrastructure deployed via Terraform. This project stands out for its modular architecture, efficient data handling, and use of cloud services to achieve scalability and robustness.",
            stack: ["Next.js", "FastAPI", "Azure Functions", "Azure SQL", "Blob Storage", "Terraform", "PokeAPI"],
            image: "/portfolio-images/pokeapi.png",
            urls: [
              { title:"Terraform/infra", link: "https://github.com/carlos-fl/terraform-pokeapi" },
              { title:"UI", link: "https://github.com/carlos-fl/pokeapi-ui" }, 
              { title:"worker function", link: "https://github.com/carlos-fl/pokeapi-function" }, 
              { title:"scripts", link: "https://github.com/carlos-fl/pokeapi-scripts" }, 
            ],
            github: "https://github.com/carlos-fl/pokeapi-api"
          },
          {
            title: "REST API with FastAPI, Redis, and Azure Deployment",
            date: "July 2025",
            desc: "high-performance RESTful API built using FastAPI, designed to handle requests efficiently with asynchronous capabilities. Redis was integrated as an in-memory data store to enhance response times, enable caching, and manage real-time data more effectively. The API includes features like authentication, error handling, and automatic documentation via OpenAPI. The entire system was deployed on Microsoft Azure using services such as Azure App Service and Azure Container Registry, ensuring scalability, reliability, and continuous availability. This project showcases skills in backend development, cloud deployment, and system optimization.",
            stack: ["FastAPI", "Redis", "SQL Server", "Azure", "Docker", "Firebase"],
            image: "/portfolio-images/redis.png",
            urls: [{ title: "terraform resources" , link: "https://github.com/carlos-fl/redis-terraform-resources" }],
            github: "https://github.com/carlos-fl/api-with-redis"
          },
          {
            title: "Scalable E-commerce Platform Architecture on Azure",
            date: "July 2025",
            desc: "Designed and implemented a robust and scalable architecture for an e-commerce platform using Azure cloud services. The system is capable of handling high transaction volumes, providing a seamless user experience through a centralized web portal, and offering full back-office support for product and order management. Additionally, the platform includes real-time analytics capabilities based on sales data.",
            stack: ["Terraform"],
            image: "/portfolio-images/ecommerce-terraform.png",
            urls: [
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
            github: "https://github.com/carlos-fl/proyecto_ingenieria"
          },
          {
            title: "Academic Management System",
            date: "April 2025",
            desc: "A web-based platform for managing academic and administrative processes at UNAH. Includes modules for admissions, student enrollment, library access, and internal chat.Faculty tools support grade submission, course resource management, and coordination roles. Designed to centralize and streamline university operations for students and staff.",
            stack: ["PHP", "MySQL", "Javascript", "HTML", "CSS", "Bootstrap"],
            image: "/portfolio-images/registro.png",
            urls: [],
            github: "https://github.com/carlos-fl/proyecto_ingenieria"
          },
          {
            title: "ETL",
            date: "December 2024",
            desc: "A web application for designing and executing ETL (Extract, Transform, Load) workflows. Provides a visual interface to build data pipelines without writing code. Inspired by Visual Studio Integration Services, offering drag-and-drop functionality. Simplifies data integration tasks for non-technical users.",
            stack: ["Javascript", "HTML", "CSS", "Bootstrap", "NodeJS", "Express"],
            image: "/portfolio-images/etl.png",
            urls: [],
            github: "https://github.com/carlos-fl/ETL-BASES2"
          },
          {
            title: "CRUD DB",
            date: "July 2024",
            desc: "A desktop tool for managing databases through a user-friendly interface. Allows role and permission assignment, creation of databases, tables, and users, as well as data entry. Designed as a visual alternative to SQL Workbench, with all operations handled via UI—no commands needed.",
            stack: ["Python", "PyQt5", "SQL Server"],
            image: "/portfolio-images/crud-db3.jpeg",
            urls: [],
            github: "https://github.com/carlos-fl/CRUD-BDI"
          },
          {
            title: "CodeSpace",
            date: "December 2023",
            desc: "A Full Stack web application designed for real-time team coding. Features user authentication, database integration, and support for multiple programming languages. Inspired by platforms like CodePen, enabling collaborative code editing in the browser. Built to streamline team-based coding and prototyping.",
            stack: ["Javascript", "HTML", "CSS", "NodeJS", "MongoDB", "Express"],
            image: "/portfolio-images/codeSpace.png",
            urls: [],
            github: "https://github.com/carlos-fl/CodeSpace-app"
          }
        ]
      }
    },
  "stack": {
      "db": [{ name: "MongoDB", icon: "/icons/mongo.svg" }, { name: "MySQL", icon: "/icons/mysql.svg" }, { name: "Oracle", icon: "/icons/oracle.svg" }],
      "languages": [{ name: "Javascript", icon: "/icons/javascript.svg" }, { name: "PHP", icon: "/icons/php.svg" }, { name: "Python", icon: "/icons/python.svg" }, { name: "Java", icon: "/icons/java.svg" }, { name: "C++", icon: "/icons/cplusplus-original.svg" }],
      "tech": [{ name: "HTML", icon: "/icons/html5.svg" }, { name: "CSS", icon: "/icons/css3.svg" }, { name: "Typescript", icon: "/icons/typescript-original.svg" }, { name: "NodeJS", icon: "/icons/Node.js.svg" }, { name: "Express", icon: "/icons/Express.svg" }, { name: "Figma", icon: "/icons/Figma.svg" }],
      "frameworks": [{ name: "VueJS", icon: "/icons/Vue.js.svg" }, { name: "Laravel", icon: "/icons/Laravel.svg" }, { name: "Spring Boot", icon: "/icons/Spring.svg" }]
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
  "productivity",
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

  }
}

