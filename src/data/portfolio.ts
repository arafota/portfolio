export interface Project {
    title: string;
    subtitle: string;
    tech: string[];
    description: string;
    enDescription?: string;
    github?: string;
    demoUrl?: string;
    image?: string;
}

export interface PortfolioData {
    profile: {
        name: string;
        title: string;
        location: string;
        email: string;
        phone: string;
        github: string;
        linkedin: string;
        profileImage: string;
        cvUrl?: string;
        about: string;
        enAbout?: string;
    };
    skills: {
        languages: string[];
        frontend: string[];
        backend: string[];
        ia: string[];
        robotics: string[];
        tools: string[];
        networks: string[];
    };
    projects: Project[];
    experience: {
        role: string;
        company: string;
        period: string;
        enPeriod?: string;
        description: string;
        enDescription?: string;
    }[];
    education: {
        degree: string;
        enDegree?: string;
        school: string;
        period: string;
        enPeriod?: string;
    }[];
    certifications: {
        title: string;
        issuer: string;
        date: string;
        enDate?: string;
        image?: string;
    }[];
    languages: {
        name: string;
        enName?: string;
        level: string;
        enLevel?: string;
    }[];
    testimonials: {
        name: string;
        role: string;
        company: string;
        image?: string;
        content: string;
        enContent?: string;
        linkedIn?: string;
    }[];
}

export const portfolioData: PortfolioData = {
    profile: {
        name: "Saad Arafet Ben Mahfoudh",
        title: "5th-Year Software Engineering Student – Front-End Developer",
        location: "Monastir, Tunisie",
        email: "arafetmahfoudh29@gmail.com",
        phone: "+216 52 001 676",
        github: "https://github.com/arafota",
        linkedin: "https://www.linkedin.com/in/arafetbenmahfoudh/",
        profileImage: "/profile.jpg",
        cvUrl: "/Saad_Arafet_CV.pdf",
        about: "Étudiant en 5ᵉ année d’ingénierie logicielle, spécialisé en front-end development, passionné par l’électronique et la robotique. Solide expérience dans la conception d’interfaces web modernes, ergonomiques et performantes. Curieux, analytique et adaptable, je cherche une opportunité de PFE au sein d’une entreprise innovante pour appliquer mes compétences techniques et analytiques.",
        enAbout: "5th-year software engineering student, specialized in front-end development, with a strong passion for electronics and robotics. Solid experience in designing modern, user-friendly, and high-performance web interfaces. Curious, analytical, and adaptable, I am looking for a graduation project opportunity in an innovative company to apply my technical and analytical skills.",
    },
    skills: {
        languages: ["Java", "PHP (Laravel)", "Python", "C++", "Dart", "Kotlin", "Swift", "SQL", "TypeScript"],
        frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "React.js", "Next.js", "Bootstrap", "Tailwind CSS", "WordPress", "Flutter", "UI/UX Design"],
        backend: ["Laravel", "Nest.js", "MySQL", "MongoDB", "SQLite", "Supabase"],
        ia: ["Machine Learning", "Data Analysis", "Data Visualization (pandas, NumPy, scikit-learn, matplotlib)"],
        robotics: ["Arduino", "Raspberry Pi", "microcontrôleurs", "capteurs/actionneurs"],
        tools: ["Git/GitHub", "VS Code", "Laragon", "Figma", "Android Studio", "XCode", "Arduino IDE", "Proteus", "Wokwi"],
        networks: ["Bases des réseaux informatiques"],
    },
    projects: [
        {
            title: "SmartResto",
            subtitle: "Intelligent Restaurant Management System",
            tech: ["Vue.js", "Laravel", "IA"],
            description: "Gestion des commandes, des stocks et module IA pour prédiction de charge. Dashboard en temps réel.",
            enDescription: "Order and stock management with AI module for load prediction. Real-time dashboard.",
            github: "https://github.com/arafota/Smartresto",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Microservices Ecosystem",
            subtitle: "Full Stack Service Architecture",
            tech: ["Spring Boot", "MySQL", "JWT", "Docker"],
            description: "Architecture microservices complète gérant Clients, Livreurs et Commandes avec sécurité JWT et communication synchrone/asynchrone.",
            enDescription: "Complete microservices architecture managing Clients, Couriers, and Orders with JWT security and synchronous/asynchronous communication.",
            github: "https://github.com/arafota/microservices",
            demoUrl: "https://www.youtube.com/watch?v=66m8kV6SMwE",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "NLP Translation Colab",
            subtitle: "AI Translation Tool",
            tech: ["Python", "NLP", "PyTorch"],
            description: "Projet de traitement du langage naturel pour la traduction automatisée utilisant des modèles de deep learning.",
            enDescription: "Natural Language Processing project for automated translation using deep learning models.",
            github: "https://github.com/arafota/nlp-translation-colab",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Tales of a Tunisian Campus",
            subtitle: "Interactive Narrative Game",
            tech: ["Java", "Game Dev"],
            description: "Jeu de conversation immersif se déroulant dans un campus tunisien, axé sur la narration et les choix du joueur.",
            enDescription: "Immersive conversation game set in a Tunisian campus, focused on storytelling and player choices.",
            github: "https://github.com/7louu/Tales-of-a-Tunisian-Campus",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Movies Search Engine",
            subtitle: "Web Application",
            tech: ["React.js", "API Rest", "Tailwind CSS"],
            description: "Application de recherche de films permettant de consulter les détails et les notes via une interface fluide.",
            enDescription: "Movie search application allowing users to view details and ratings via a smooth interface.",
            github: "https://github.com/arafota/movies-",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Mini Electric Wheelchair",
            subtitle: "PFE Licence Project",
            tech: ["Arduino", "Proteus", "Bluetooth"],
            description: "Contrôle joystick & Bluetooth, énergie solaire photovoltaïque pour fauteuil roulant autonome.",
            enDescription: "Joystick & Bluetooth control, photovoltaic solar energy for an autonomous wheelchair.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Ceramic Store Website",
            subtitle: "Freelance Project",
            tech: ["WordPress", "UI/UX Design"],
            description: "Site vitrine pour une entreprise de céramique. Thème personnalisé et expérience de navigation fluide.",
            enDescription: "Showcase website for a ceramic company. Custom theme and smooth navigation experience.",
            demoUrl: "https://outlet-ceramic.ch/catalogue-interieur/",
            image: "/ceramic_demo.png",
        },
        {
            title: "Library Management App",
            subtitle: "Mobile Application",
            tech: ["Flutter", "Dart", "SQLite", "Mobile Dev"],
            description: "Application mobile complète de gestion de bibliothèque avec base de données SQLite. Fonctionnalités CRUD, recherche avancée et appels directs.",
            enDescription: "Complete mobile library management application with SQLite database. CRUD features, advanced search, and direct calls.",
            github: "https://github.com/arafota/bib",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Software Testing Project",
            subtitle: "Web Automation & QA",
            tech: ["Java", "Selenium", "JUnit", "Test Automation"],
            description: "Projet d'automatisation de tests pour sites web. Validation des fonctionnalités et de l'interface utilisateur via Selenium.",
            enDescription: "Website test automation project. Validation of features and user interface using Selenium.",
            github: "https://github.com/arafota/test-logiciel",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
        },
    ],
    experience: [
        {
            role: "Front-End Intern",
            company: "AC Time International",
            period: "Juil – Août 2025",
            enPeriod: "Jul – Aug 2025",
            description: "Développement front-end avec Vue.js, HTML, CSS. Interfaces responsives et amélioration UX.",
            enDescription: "Front-end development with Vue.js, HTML, CSS. Responsive interfaces and UX improvement.",
        },
        {
            role: "Final-Year Project Intern",
            company: "Farhat Hached Hospital",
            period: "Fév – Juin 2023",
            enPeriod: "Feb – Jun 2023",
            description: "Projet biomédical : fauteuil roulant électrique autonome.",
            enDescription: "Biomedical project: autonomous electric wheelchair.",
        },
    ],
    education: [
        {
            degree: "Diplôme d’ingénieur en Génie Logiciel",
            enDegree: "Software Engineering Degree",
            school: "EPI Digital School",
            period: "2023 – Présent",
            enPeriod: "2023 – Present",
        },
        {
            degree: "Licence en Génie Électrique & Énergies Renouvelables",
            enDegree: "Bachelor in Electrical Engineering & Renewable Energies",
            school: "ESSTHS",
            period: "2023",
        },
        {
            degree: "Baccalauréat Sciences Techniques",
            enDegree: "Technical Sciences Baccalaureate",
            school: "Lycée Technique",
            period: "2019",
        },
    ],
    certifications: [
        {
            title: "Microsoft Azure Fundamentals",
            issuer: "Microsoft",
            date: "2024",
        },
        {
            title: "CCNA 1 & CCNA 2",
            issuer: "Cisco",
            date: "2023",
        },
        {
            title: "Fundamentals of Deep Learning",
            issuer: "NVIDIA",
            date: "Avril 2026",
            enDate: "April 2026",
            image: "/nvidia certif.png",
        },
        {
            title: "AI for Beginners",
            issuer: "HP LIFE",
            date: "Décembre 2025",
            enDate: "December 2025",
            image: "/cert_hp.png",
        },
        {
            title: "Hackathon AI WAVE - 3rd Edition",
            issuer: "GDG Sousse / EPI",
            date: "Avril 2025",
            enDate: "April 2025",
            image: "/cert_aiwave.png",
        },
    ],
    languages: [
        { name: "Arabe", enName: "Arabic", level: "Natif", enLevel: "Native" },
        { name: "Français", enName: "French", level: "Courant", enLevel: "Fluent" },
        { name: "Anglais", enName: "English", level: "Technique", enLevel: "Technical" },
    ],
    testimonials: [
        {
            name: "Noureddine Ghenam",
            role: "Responsable",
            company: "Carthago Time & Security Systems",
            image: "/attestation_carthago.png",
            content: "Saad a effectué un stage d'été au sein de notre entreprise avec sérieux et engagement. Il a su mettre en pratique ses connaissances académiques et s'intégrer rapidement à l'environnement professionnel.",
            enContent: "Saad completed a summer internship at our company with seriousness and commitment. He successfully applied his academic knowledge and quickly integrated into the professional environment.",
        }
    ]
};
