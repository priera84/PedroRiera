import React, { useState, useEffect } from 'react';
import { 
  Terminal, Server, Cloud, Database, Cpu, 
  Mail, Phone, MapPin, Linkedin, Github, 
  ExternalLink, Calendar, Award, BookOpen, 
  Globe, ChevronDown, Download, Code, Briefcase, User, Layers, Send, CheckCircle2, Copy
} from 'lucide-react';

const translations = {
  es: {
    banner: "Disponible para roles remotos en EE. UU. y Canadá (Contratista Independiente / B2B) • Ciudadano UE (España)",
    navAbout: "Sobre mí",
    navCompetencies: "Competencias",
    navExperience: "Experiencia",
    navEducation: "Educación",
    navRepos: "Repositorios",
    navContact: "Contacto",
    heroBadge: "17+ Años de Experiencia en Ingeniería de Software",
    heroTitle: "Senior Backend .NET Engineer",
    heroDesc: "Especialista en arquitecturas de alta concurrencia .NET 8 / Core, optimización de rendimiento en SQL Server y procesamiento asíncrono en la nube con Azure. Sólida trayectoria en e-commerce, logística multi-transportista y aviación en Norteamérica.",
    location: "Lima, Perú (EST / UTC-5)",
    euCitizen: "Ciudadano UE (España)",
    contactBtn: "Contactar",
    contactNow: "Contactar Ahora",
    viewExp: "Ver Experiencia",
    execSummary: "Resumen Ejecutivo",
    techStack: "Stack Tecnológico Principal",
    techStackDesc: ".NET 8, C#, Azure Functions, WebJobs, T-SQL, SQL Server, Vue.js, gRPC, Microservicios.",
    specialties: "Áreas de Especialización",
    specialtiesDesc: "Procesadores asíncronos en segundo plano, optimización de bases de datos, resolución de deadlocks y modernización de plataformas.",
    languagesLabel: "Idiomas",
    languagesDesc: "Español (Nativo), Catalán (Nativo), Inglés (Nivel B2 - Colaboración ágil diaria).",
    competenciesTitle: "Competencias Principales",
    competenciesSub: "Desglose detallado de tecnologías empresariales y áreas de especialización dominadas durante más de 17 años de carrera.",
    expTitle: "Experiencia Profesional",
    expSub: "Trayectoria probada en la construcción y optimización de sistemas de alta criticidad en mercados de América del Norte y Europa.",
    eduTitle: "Educación, Certificaciones e Idiomas",
    eduSub: "Formación académica formal, acreditaciones técnicas y competencias lingüísticas para equipos globales.",
    eduHeading: "Educación",
    eduDegree: "Associate's Degree in Systems Administration",
    certHeading: "Certificaciones",
    langHeading: "Idiomas",
    reposTitle: "Repositorios y Muestras de Código Destacadas",
    reposSub: "Esta sección está reservada para los enlaces a repositorios públicos que muestran arquitecturas empresariales, procesadores asíncronos en .NET 8 con TPL y Channels, funciones de Azure y patrones avanzados de optimización T-SQL.",
    comingSoon: "Próximamente",
    repo1Desc: "Framework de procesamiento asíncrono en segundo plano utilizando System.Threading.Channels y TPL.",
    repo2Desc: "Scripts de análisis de planes de ejecución T-SQL, registro de bloqueos y estrategias de indexación.",
    githubProfile: "Visitar Perfil de GitHub",
    contactTitle: "Contacto Directo",
    contactSub: "¿Interesado en colaborar en proyectos de alta concurrencia o roles B2B remotos? Envíame un mensaje o comunícate por correo.",
    emailLabel: "Correo Electrónico",
    phoneLabel: "Teléfono / WhatsApp",
    linkedinLabel: "LinkedIn Profesional",
    formName: "Nombre",
    formEmail: "Correo Electrónico",
    formMsg: "Mensaje",
    formPlaceholderName: "Tu Nombre o Empresa",
    formPlaceholderEmail: "correo@empresa.com",
    formPlaceholderMsg: "Detalles sobre la propuesta o rol remoto B2B...",
    formSubmit: "Enviar Mensaje a Pedro Riera",
    formSuccessTitle: "¡Mensaje Enviado con Éxito!",
    formSuccessDesc: "Gracias por ponerte en contacto. Pedro Riera responderá a tu solicitud a la brevedad posible.",
    footerSub: "Disponible para contratos remotos B2B en EE. UU. y Canadá • Lima, Perú."
  },
  en: {
    banner: "Available for U.S. & Canada Remote Roles (Independent Contractor / B2B) • EU Citizen (Spain)",
    navAbout: "About",
    navCompetencies: "Competencies",
    navExperience: "Experience",
    navEducation: "Education",
    navRepos: "Repositories",
    navContact: "Contact",
    heroBadge: "17+ Years of Software Engineering Experience",
    heroTitle: "Senior Backend .NET Engineer",
    heroDesc: "Specialist in high-concurrency .NET 8 / Core architectures, SQL Server performance optimization, and asynchronous cloud workloads on Azure. Proven track record across North American e-commerce, multi-carrier logistics, and aviation.",
    location: "Lima, Peru (EST / UTC-5)",
    euCitizen: "EU Citizen (Spain)",
    contactBtn: "Contact",
    contactNow: "Get in Touch",
    viewExp: "View Experience",
    execSummary: "Executive Summary",
    techStack: "Core Technology Stack",
    techStackDesc: ".NET 8, C#, Azure Functions, WebJobs, T-SQL, SQL Server, Vue.js, gRPC, Microservices.",
    specialties: "Areas of Expertise",
    specialtiesDesc: "Asynchronous background workers, database query tuning, deadlock resolution, and legacy platform modernization.",
    languagesLabel: "Languages",
    languagesDesc: "Spanish (Native), Catalan (Native), English (B2 Upper-Intermediate - Daily Agile Collaboration).",
    competenciesTitle: "Core Competencies",
    competenciesSub: "Detailed breakdown of enterprise technologies and specialized domains mastered over 17+ years.",
    expTitle: "Professional Experience",
    expSub: "Proven track record in building and optimizing mission-critical systems across North American and European markets.",
    eduTitle: "Education, Certifications & Languages",
    eduSub: "Formal academic foundation, technical accreditations, and linguistic skills for global engineering teams.",
    eduHeading: "Education",
    eduDegree: "Associate's Degree in Systems Administration",
    certHeading: "Certifications",
    langHeading: "Languages",
    reposTitle: "Featured Repositories & Code Samples",
    reposSub: "This section is reserved for upcoming public repository links showcasing enterprise architectures, .NET 8 asynchronous workers with TPL & Channels, Azure functions, and advanced T-SQL optimization patterns.",
    comingSoon: "Coming Soon",
    repo1Desc: "Asynchronous background processing framework using System.Threading.Channels and TPL.",
    repo2Desc: "T-SQL execution plan analysis scripts, deadlock logging, and advanced indexing strategies.",
    githubProfile: "Visit GitHub Profile",
    contactTitle: "Direct Contact",
    contactSub: "Interested in collaborating on high-concurrency projects or remote B2B roles? Send me a message or reach out directly.",
    emailLabel: "Email Address",
    phoneLabel: "Phone / WhatsApp",
    linkedinLabel: "Professional LinkedIn",
    formName: "Name",
    formEmail: "Email Address",
    formMsg: "Message",
    formPlaceholderName: "Your Name or Company",
    formPlaceholderEmail: "email@company.com",
    formPlaceholderMsg: "Details regarding the proposal or remote B2B role...",
    formSubmit: "Send Message to Pedro Riera",
    formSuccessTitle: "Message Sent Successfully!",
    formSuccessDesc: "Thank you for reaching out. Pedro Riera will get back to your inquiry shortly.",
    footerSub: "Available for U.S. & Canada Remote B2B Contracts • Lima, Peru."
  }
};

export default function App() {
  const [lang, setLang] = useState('es');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.title = "Pedro Riera | Senior Backend .NET Engineer | Portfolio & Resume";
    
    const updateMeta = (name, property, content) => {
      let element = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', null, 'Pedro Riera - Senior Backend .NET Engineer with 17+ years of experience in .NET 8, SQL Server optimization, and Azure cloud workloads. Available for U.S. and Canada remote B2B roles.');
    updateMeta('keywords', null, 'Pedro Riera, Senior Backend .NET Engineer, C#, .NET 8, .NET Core, Azure, SQL Server, Lima Peru, Remote Software Engineer, T-SQL Optimization, B2B Contractor, .NET Developer');
    updateMeta(null, 'og:title', 'Pedro Riera | Senior Backend .NET Engineer');
    updateMeta(null, 'og:description', 'Explore Pedro Riera’s professional portfolio, 17+ years of .NET enterprise experience, architecture skills, and remote availability.');
    updateMeta(null, 'og:type', 'website');
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pedrorieracortes@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const experiences = [
    {
      company: "Cymax Group Technologies",
      role: lang === 'es' ? "Software Engineer (Senior Scope)" : "Software Engineer (Senior Scope)",
      period: "Aug 2022 - Present",
      location: "Remote (U.S./Canada)",
      description: lang === 'es' 
        ? "Diseñó y mantuvo APIs RESTful en .NET 8, Azure Functions y Azure WebJobs utilizando TPL y System.Threading.Channels para procesar volúmenes masivos diarios de cadenas de suministro y cargas EDI (204, 210, 214), eliminando retrasos en colas durante ventanas de pedidos pico."
        : "Designed and maintained .NET 8 RESTful APIs, Azure Functions, and Azure WebJobs using TPL and System.Threading.Channels to process high-volume daily supply-chain and EDI freight payloads (204, 210, 214), eliminating message-queue backlogs during peak order windows.",
      highlights: lang === 'es' ? [
        "Refactorización de procedimientos almacenados T-SQL complejos, planes de ejecución e índices recubiertos en tablas de millones de filas, reduciendo consultas lentas a tiempos sub-segundo.",
        "Liderazgo en análisis de causa raíz (RCA) e implementación de soluciones arquitectónicas permanentes (reintentos idempotentes, ajuste de tiempos de espera, corrección de fugas de memoria) para incidentes críticos P1/P2.",
        "Desarrollo y mantenimiento de módulos operacionales en Vue.js y desacoplamiento de llamadas sincrónicas pesadas en trabajadores de segundo plano para prevenir tiempos de espera en UI."
      ] : [
        "Refactored complex T-SQL stored procedures, execution plans, and covering indexes on multi-million-row tables, bringing multi-second queries down to sub-second execution.",
        "Led root-cause analysis (RCA) and implemented permanent architectural fixes (idempotent retries, timeout tuning, memory-leak remediation) for critical P1/P2 incidents.",
        "Built and maintained responsive operational modules in Vue.js and decoupled heavy synchronous API calls into background workers to prevent UI timeouts."
      ],
      tech: [".NET 8", "Azure Functions", "Azure WebJobs", "SQL Server", "Vue.js", "TPL", "EDI Freight"]
    },
    {
      company: "Logistyx Technologies / E2Open",
      role: "Senior Software Engineer",
      period: "Jan 2019 - Jul 2022",
      location: "Lima, Peru",
      description: lang === 'es'
        ? "Ingeniería de microservicios en .NET Core 2.1 y WebJobs asíncronos en Azure para soporte de envíos de paquetes empresariales de alto volumen (cálculo de tarifas, generación de etiquetas y eventos de rastreo) bajo estrictos SLAs."
        : "Engineered .NET Core 2.1 microservices and asynchronous Azure WebJobs supporting high-volume enterprise parcel shipping (rate calculation, label generation, and tracking events) under strict operational SLAs.",
      highlights: lang === 'es' ? [
        "Migración progresiva de módulos legados Classic ASP a APIs modernas en .NET Core y componentes en Vue.js.",
        "Estandarización de flujos Git y automatización de pipelines CI/CD, eliminando despliegues manuales propensos a errores.",
        "Optimización de consultas T-SQL complejas y procedimientos por lotes en SQL Server, reduciendo ventanas de sincronización de datos."
      ] : [
        "Spearheaded the progressive migration of legacy Classic ASP modules into modern .NET Core APIs and Vue.js components.",
        "Standardized Git workflows and automated CI/CD deployment pipelines, transitioning the team from manual deployments to repeatable automated releases.",
        "Optimized complex T-SQL queries and batch-processing procedures in SQL Server, significantly reducing execution windows for data-sync jobs."
      ],
      tech: [".NET Core", "Azure WebJobs", "SQL Server", "Microservices", "Vue.js", "CI/CD"]
    },
    {
      company: "Santex Group",
      role: "Full Stack Developer",
      period: "Aug 2018 - Dec 2018",
      location: "Lima, Peru",
      description: lang === 'es'
        ? "Desarrollo de lógica de negocio backend y capas de acceso a datos para la plataforma de educación superior Ilumno usando C# .NET 4.5 y Entity Framework 4.6."
        : "Developed backend business logic and data-access layers for the Ilumno higher-education platform using C# .NET 4.5 and Entity Framework 4.6.",
        highlights: lang === 'es' ? [
        "Creación de vistas frontend responsivas en AngularJS y Bootstrap.",
        "Optimización de consultas de recuperación de datos para paneles administrativos clave."
      ] : [
        "Built responsive frontend views in AngularJS and Bootstrap.",
        "Optimized data-retrieval queries for key administrative dashboards."
      ],
      tech: ["C# .NET 4.5", "Entity Framework", "AngularJS", "Bootstrap", "SQL Server"]
    },
    {
      company: "Enghouse Interactive (Presence Technology)",
      role: "Software Developer",
      period: "Dec 2015 - Jul 2017",
      location: "Barcelona, Spain",
      description: lang === 'es'
        ? "Ingeniería de Servicios Windows multi-hilo en C# (TPL, System.Threading) e integración de protocolos Avaya DMCC/SNMP para procesar miles de eventos de centros de contacto en tiempo real."
        : "Engineered multi-threaded C# Windows Services (TPL, System.Threading) and integrated Avaya DMCC/SNMP protocols to process thousands of concurrent real-time contact-center events with high availability.",
      highlights: lang === 'es' ? [
        "Ejecución de migraciones de versiones en entornos C# y Delphi (7-XE7).",
        "Resolución de fugas de memoria prolongadas y mejora de la estabilidad del servicio bajo carga continua."
      ] : [
        "Executed version migrations across C# and Delphi (7-XE7) environments.",
        "Resolved long-standing memory leaks and improved service stability under continuous load."
      ],
      tech: ["C#", "Delphi", "Windows Services", "TPL", "Avaya DMCC", "Multi-threading"]
    },
    {
      company: "Globalia Sistemas (Air Europa)",
      role: "Senior Programmer",
      period: "Nov 2012 - Nov 2015",
      location: "Palma de Mallorca, Spain",
      description: lang === 'es'
        ? "Desarrollo de aplicaciones backend en C# de alta concurrencia (TPL) y optimización de paquetes PL/SQL en Oracle para el Sistema de Gestión de Tripulación de Cabina de Air Europa."
        : "Built high-concurrency C# (TPL) backend applications and optimized Oracle PL/SQL packages for Air Europa's Cabin Crew Management System, supporting real-time daily flight and crew roster operations.",
      highlights: lang === 'es' ? [
        "Mantenimiento de alta fiabilidad en plataformas críticas de programación de tripulación aérea.",
        "Optimización de paquetes de base de datos para manejar consultas concurrentes de alta frecuencia."
      ] : [
        "Maintained high reliability for mission-critical airline crew scheduling platforms.",
        "Optimized database packages to handle high-frequency concurrent queries."
      ],
      tech: ["C#", "Oracle PL/SQL", "TPL", "Aviation Systems", "Enterprise Architecture"]
    },
    {
      company: lang === 'es' ? "Carrera Anterior en España (2006-2012)" : "Earlier Career in Spain (2006-2012)",
      role: "Software Engineer / Technical Consultant",
      period: "2006 - 2012",
      location: "Spain",
      description: lang === 'es'
        ? "Ingeniero de Software en Apparly (2012), Analista Programador Senior en Axisdata (2008-2009) y Consultor Técnico en Dome Consulting & Solutions (2006-2008)."
        : "Software Engineer at Apparly (2012), Senior Analyst Programmer at Axisdata (2008-2009), and Technical Consultant at Dome Consulting & Solutions (2006-2008).",
      highlights: lang === 'es' ? [
        "Entrega de aplicaciones empresariales en C# .NET y automatización de despliegues ClickOnce/MSI.",
        "Liderazgo en implementaciones in situ de plataformas para clientes hoteleros destacados (Grupo Barceló)."
      ] : [
        "Delivered C# .NET enterprise applications and automated ClickOnce/MSI deployments.",
        "Led on-site platform rollouts for prominent hospitality clients like Grupo Barceló."
      ],
      tech: ["C# .NET", "SQL Server", "ClickOnce", "Enterprise Software"]
    }
  ];

  const coreCompetencies = [
    {
      category: lang === 'es' ? "Backend y Concurrencia" : "Backend & Concurrency",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      skills: ["C#", ".NET 8", ".NET Core", ".NET Framework", "RESTful APIs", "Microservices", "gRPC", "Entity Framework", lang === 'es' ? "Multi-hilos (TPL, Channels, Async/Await)" : "Multi-threading (TPL, Channels, Async/Await)", "Windows Services"]
    },
    {
      category: lang === 'es' ? "Cloud y Sistemas Distribuidos" : "Cloud & Distributed",
      icon: <Cloud className="w-6 h-6 text-indigo-400" />,
      skills: ["Azure Functions", "Azure WebJobs", lang === 'es' ? "Arquitectura Orientada a Eventos" : "Event-Driven Architecture", lang === 'es' ? "Procesadores Asíncronos" : "Asynchronous Background Workers", "EDI Freight Integrations (204, 210, 214)"]
    },
    {
      category: lang === 'es' ? "Bases de Datos y Rendimiento" : "Databases & Performance",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      skills: ["Microsoft SQL Server", lang === 'es' ? "Optimización T-SQL" : "T-SQL Query Optimization", lang === 'es' ? "Análisis de Planes de Ejecución" : "Execution Plan Analysis", lang === 'es' ? "Estrategias de Indexación" : "Indexing Strategies", lang === 'es' ? "Resolución de Bloqueos" : "Deadlock Resolution", "Stored Procedures", "Oracle PL/SQL"]
    },
    {
      category: lang === 'es' ? "Frontend y DevOps" : "Frontend & DevOps",
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      skills: ["Vue.js", "TypeScript", "Git", "CI/CD Pipelines", "PowerShell", "Visual Studio 2022", "AngularJS", "Bootstrap"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Banner & Language Switcher */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-blue-200 text-xs sm:text-sm py-2 px-4 border-b border-blue-800/40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-center sm:text-left flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
            <span>{t.banner}</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-950/40 p-1 rounded-lg border border-blue-500/30">
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all ${lang === 'es' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              🇪🇸 ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              🇺🇸 EN
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-500/20">
              PR
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block text-white">Pedro Riera</span>
              <span className="text-xs text-slate-400 block">{t.heroTitle}</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">{t.navAbout}</a>
            <a href="#competencies" className="hover:text-blue-400 transition-colors">{t.navCompetencies}</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">{t.navExperience}</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">{t.navEducation}</a>
            <a href="#repos" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <Github className="w-4 h-4" /> {t.navRepos}
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">{t.navContact}</a>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="mailto:pedrorieracortes@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-md shadow-blue-600/20"
            >
              <Mail className="w-4 h-4 mr-2" /> {t.contactBtn}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>{t.heroBadge}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Pedro Riera - <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-clip-text text-transparent">{t.heroTitle}</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                {t.heroDesc}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center text-slate-300 text-sm bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800">
                  <MapPin className="w-4 h-4 text-blue-400 mr-2" />
                  <span>{t.location}</span>
                </div>
                <div className="flex items-center text-slate-300 text-sm bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800">
                  <Globe className="w-4 h-4 text-indigo-400 mr-2" />
                  <span>{t.euCitizen}</span>
                </div>
                <div className="flex items-center text-slate-300 text-sm bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800">
                  <Phone className="w-4 h-4 text-emerald-400 mr-2" />
                  <span>+51 963 411 776</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25"
                >
                  <Mail className="w-4 h-4 mr-2" /> {t.contactNow}
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-all border border-slate-700 shadow-sm"
                >
                  <Briefcase className="w-4 h-4 mr-2 text-blue-400" /> {t.viewExp}
                </a>
                <a
                  href="https://linkedin.com/in/pedrorieracortes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all border border-slate-800"
                >
                  <Linkedin className="w-4 h-4 mr-2 text-blue-400" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative">
                <div className="absolute -top-3 -right-3 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                  B2B Contractor
                </div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-400" /> {t.execSummary}
                </h3>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white block">{t.techStack}</strong>
                      {t.techStackDesc}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white block">{t.specialties}</strong>
                      {t.specialtiesDesc}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white block">{t.languagesLabel}</strong>
                      {t.languagesDesc}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section id="competencies" className="py-20 bg-slate-900/50 border-t border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">{t.competenciesTitle}</h2>
            <p className="mt-4 text-slate-400 text-base">{t.competenciesSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreCompetencies.map((group, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="p-3 bg-slate-800 rounded-xl border border-slate-700/50">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 text-xs font-medium hover:bg-slate-800 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">{t.expTitle}</h2>
            <p className="mt-4 text-slate-400 text-base">{t.expSub}</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-slate-800">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 z-10 group-hover:border-blue-500/50 transition-colors shadow-lg">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1 bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl hover:border-slate-700/80 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="text-blue-400 font-semibold text-base mt-0.5">{exp.company}</div>
                    </div>
                    <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
                      <span className="inline-flex items-center text-xs font-medium text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700/50">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" /> {exp.period}
                      </span>
                      <span className="text-xs text-slate-400 mt-1">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start text-xs sm:text-sm text-slate-300">
                        <span className="text-blue-400 mr-2 font-bold">›</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded bg-slate-800/80 text-blue-300 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education, Certifications & Languages Section */}
      <section id="education" className="py-20 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">{t.eduTitle}</h2>
            <p className="mt-4 text-slate-400 text-base">{t.eduSub}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Education */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700/50">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t.eduHeading}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white text-base">{t.eduDegree}</h4>
                    <p className="text-xs text-blue-400 mt-1 font-medium">EQF Level 5</p>
                    <p className="text-xs text-slate-400 mt-1">Colegio San José Obrero, Palma de Mallorca, España</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700/50">
                    <Award className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t.certHeading}</h3>
                </div>
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/40">
                    <strong className="text-white block">MCTS: .NET Framework 4.0</strong>
                    <span className="text-xs text-slate-400">Microsoft Certified Technology Specialist</span>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/40">
                    <strong className="text-white block">Full Stack Web Development</strong>
                    <span className="text-xs text-slate-400">HKUST (Hong Kong University of Science and Technology)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700/50">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t.langHeading}</h3>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex justify-between items-center p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/30">
                    <span className="font-medium text-white">{lang === 'es' ? "Inglés (B2)" : "English (B2)"}</span>
                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">{lang === 'es' ? "Colaboración ágil diaria" : "Daily Agile Collaboration"}</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/30">
                    <span className="font-medium text-white">{lang === 'es' ? "Español" : "Spanish"}</span>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">{lang === 'es' ? "Nativo" : "Native"}</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 bg-slate-800/40 rounded-lg border border-slate-700/30">
                    <span className="font-medium text-white">{lang === 'es' ? "Catalán" : "Catalan"}</span>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">{lang === 'es' ? "Nativo" : "Native"}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GitHub Repositories Placeholder Section */}
      <section id="repos" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Github className="w-64 h-64 text-white" />
            </div>
            
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repositories</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t.reposTitle}</h2>
              <p className="text-slate-300 text-base mb-6 leading-relaxed">
                {t.reposSub}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 border-dashed">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold text-blue-400">dotnet-high-concurrency-worker</span>
                    <span className="text-xs px-2 py-0.5 bg-slate-800 rounded text-slate-400">{t.comingSoon}</span>
                  </div>
                  <p className="text-xs text-slate-400">{t.repo1Desc}</p>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 border-dashed">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold text-blue-400">sql-performance-toolkit</span>
                    <span className="text-xs px-2 py-0.5 bg-slate-800 rounded text-slate-400">{t.comingSoon}</span>
                  </div>
                  <p className="text-xs text-slate-400">{t.repo2Desc}</p>
                </div>
              </div>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-all border border-slate-700 shadow-md group"
              >
                <Github className="w-4 h-4 mr-2" /> {t.githubProfile} <ExternalLink className="w-3.5 h-3.5 ml-2 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">{t.contactTitle}</h2>
            <p className="mt-3 text-slate-400 text-base">{t.contactSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:pedrorieracortes@gmail.com"
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all text-center group flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{t.emailLabel}</h3>
              <span className="text-xs text-slate-400 break-all">pedrorieracortes@gmail.com</span>
            </a>

            <div 
              onClick={handleCopyEmail}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all text-center cursor-pointer group flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {copiedEmail ? <CheckCircle2 className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{t.phoneLabel}</h3>
              <span className="text-xs text-slate-400">+51 963 411 776</span>
            </div>

            <a 
              href="https://linkedin.com/in/pedrorieracortes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all text-center group flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{t.linkedinLabel}</h3>
              <span className="text-xs text-slate-400">linkedin.com/in/pedrorieracortes</span>
            </a>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{t.formSuccessTitle}</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">{t.formSuccessDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{t.formName}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder={t.formPlaceholderName} 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{t.formEmail}</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder={t.formPlaceholderEmail} 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{t.formMsg}</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={t.formPlaceholderMsg}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 mr-2" /> <span>{t.formSubmit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <p className="text-slate-400 font-medium">Pedro Luis Riera Cortés • Senior Backend .NET Engineer</p>
            <p className="text-xs text-slate-400 mt-1">{t.footerSub}</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-6 text-xs text-slate-400">
            <a href="mailto:pedrorieracortes@gmail.com" className="hover:text-blue-400 transition-colors">pedrorieracortes@gmail.com</a>
            <span>•</span>
            <a href="https://linkedin.com/in/pedrorieracortes" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}