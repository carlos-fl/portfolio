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
        "desc": "Entusiasta del software, Actualmente enfocado en el desarrollo Full Stack"
      },
      "aboutDescription": {
        "desc": "Estudiante por egresar de la carrera de Ingeniería en Sistemas. Interesado en el desarrollo web, y sistemas más bajo nivel como ser creación de herramientas.",
        "span": "Tecnologías con las que he trabajado"
      },
      "footerDescription": {
        "desc": "construido y diseñado por Juan Carlos Flores",
        "span": "Todos los derechos reservados"
      },
      "projects": 
        [
          {
            "title": "Sistema de Registro UNAH",
            "desc": "Una plataforma web para gestionar procesos académicos y administrativos en la UNAH. Incluye módulos para admisiones, matrícula de estudiantes, acceso a biblioteca y chat interno. Las herramientas para docentes permiten la carga de calificaciones, gestión de recursos del curso y funciones de coordinación. Diseñada para centralizar y optimizar las operaciones universitarias para estudiantes y personal.",
            "stack": ["PHP", "MySQL", "Javascript", "HTML", "CSS", "Bootstrap"],
            "link": "/portfolio-images/registro.png",
            "urls": ["https://github.com/carlos-fl/proyecto_ingenieria"]
          },
          {
            "title": "CodeSpace",
            "desc": "Una aplicación web Full Stack diseñada para programación en equipo en tiempo real. Ofrece autenticación de usuarios, integración con base de datos y soporte para múltiples lenguajes de programación. Inspirada en plataformas como CodePen, permite la edición colaborativa de código en el navegador. Construida para facilitar el trabajo en equipo y la creación de prototipos.",
            "stack": ["Javascript", "HTML", "CSS", "NodeJS", "MongoDB", "Express"],
            "link": "/portfolio-images/codeSpace.png",
            "urls": ["https://github.com/carlos-fl/CodeSpace-app"]
          },
          {
            "title": "CRUD DB",
            "desc": "Una herramienta de escritorio para gestionar bases de datos a través de una interfaz amigable. Permite asignar roles y permisos, crear bases de datos, tablas y usuarios, así como llenar tablas con datos. Diseñada como una alternativa visual a SQL Workbench, con todas las operaciones realizadas mediante la interfaz gráfica, sin necesidad de comandos.",
            "stack": ["Python", "PyQt5", "SQL Server"],
            "link": "/portfolio-images/crud-db3.jpeg",
            "urls": ["https://github.com/carlos-fl/CRUD-BDI"]
          },
          {
            "title": "ETL",
            "desc": "Una aplicación web para diseñar y ejecutar procesos ETL (Extracción, Transformación, Carga). Ofrece una interfaz visual para construir flujos de datos sin escribir código. Inspirada en Visual Studio Integration Services, proporciona funcionalidad de arrastrar y soltar. Simplifica tareas de integración de datos para usuarios no técnicos.",
            "stack": ["Javascript", "HTML", "CSS", "Bootstrap", "NodeJS", "Express"], 
            "link": "/portfolio-images/etl.png",
            "urls": ["https://github.com/carlos-fl/ETL-BASES2"]
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
          "desc": "Software enthusiast, currently focused on Full Stack development."
        },
        "aboutDescription": {
          "desc": "Soon-to-be graduate in Systems Engineering. Interested in web development and lower-level systems such as tool creation.",
          "span": "Technologies I have worked with"
        },
        "footerDescription": {
          "desc": "built and designed by Juan Carlos Flores",
          "span": "All rights reserved"
        },
        "projects": [
          {
            "title": "Academic Management System",
            "desc": "A web-based platform for managing academic and administrative processes at UNAH. Includes modules for admissions, student enrollment, library access, and internal chat.Faculty tools support grade submission, course resource management, and coordination roles. Designed to centralize and streamline university operations for students and staff.",
            "stack": ["PHP", "MySQL", "Javascript", "HTML", "CSS", "Bootstrap"],
            "link": "/portfolio-images/registro.png",
            "urls": ["https://github.com/carlos-fl/proyecto_ingenieria"]
          },
          {
            "title": "CodeSpace",
            "desc": "A Full Stack web application designed for real-time team coding. Features user authentication, database integration, and support for multiple programming languages. Inspired by platforms like CodePen, enabling collaborative code editing in the browser. Built to streamline team-based coding and prototyping.",
            "stack": ["Javascript", "HTML", "CSS", "NodeJS", "MongoDB", "Express"],
            "link": "/portfolio-images/codeSpace.png",
            "urls": ["https://github.com/carlos-fl/CodeSpace-app"]
          },
          {
            "title": "CRUD DB",
            "desc": "A desktop tool for managing databases through a user-friendly interface. Allows role and permission assignment, creation of databases, tables, and users, as well as data entry. Designed as a visual alternative to SQL Workbench, with all operations handled via UI—no commands needed.",
            "stack": ["Python", "PyQt5", "SQL Server"],
            "link": "/portfolio-images/crud-db3.jpeg",
            "urls": ["https://github.com/carlos-fl/CRUD-BDI"]
          },
          {
            "title": "ETL",
            "desc": "A web application for designing and executing ETL (Extract, Transform, Load) workflows. Provides a visual interface to build data pipelines without writing code. Inspired by Visual Studio Integration Services, offering drag-and-drop functionality. Simplifies data integration tasks for non-technical users.",
            "stack": ["Javascript", "HTML", "CSS", "Bootstrap", "NodeJS", "Express"],
            "link": "/portfolio-images/etl.png",
            "urls": ["https://github.com/carlos-fl/ETL-BASES2"]
          }
        ]
      }
    },
  "stack": {
      "db": ["MongoDB", "MySQL", "Oracle", "SQL Server"],
      "languages": ["Javascript", "PHP", "Python", "Java", "C++"],
      "tech": ["HTML", "CSS", "Typescript", "NodeJS", "Express", "Figma", "Cisco PKT"],
      "frameworks": ["VueJS", "Laravel", "Spring Boot"]
    }
}

