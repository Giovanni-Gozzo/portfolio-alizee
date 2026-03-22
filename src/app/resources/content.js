import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Alizée',
    lastName: 'Beaudrillard',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Étudiante Info-com',
    avatar: '/images/avatar.jpg',
    location: 'Europe/Paris',
    languages: ['Français', 'Espagnol', 'Anglais']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Abonnez vous a la Newsletter de {person.firstName}</>,
    description: <>J'écris occasionnellement sur la communication, le design, et les nouvelles idées.</>
}

const social = [
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:alizeebeaudrillard@gmail.com',
    },
    {
        name: 'CV',
        link: '/images/CV.pdf'
    }
];


const home = {
    label: 'Accueil',
    title: `Portfolio de ${person.name}`,
    description: `Site web de portfolio présentant mon profil d'${person.role}`,
    headline: <>Étudiante Info-com / <br /> Future Chargée de Communication</>,
    subline: <>Je suis Alizée, une étudiante curieuse, dynamique et créative en dernière année de licence Information et Communication.<br /> À la recherche d'une alternance en communication pour la rentrée 2026, j'ai à cœur de participer activement aux projets et d'apporter des idées nouvelles au sein d'une équipe.</>
}

const about = {
    label: 'A propos',
    title: 'A propos de moi',
    description: `Rencontrez ${person.name}, ${person.role} de ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Actuellement étudiante en dernière année de licence Information et Communication à l'Université Paul-Valéry Montpellier 3, j'intègre, pour la rentrée 2026, l'école de communication Sup de Com. De ce fait, je suis à la recherche d'une alternance en communication. Curieuse, dynamique et créative, j'ai à cœur de participer activement aux projets de communication et d'apporter des idées nouvelles au sein d'une équipe.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Expérience Professionnelle',
        experiences: [
            {
                company: 'CLEAN VITRAGE 34',
                timeframe: 'octobre 2025 - aujourd\'hui',
                role: 'Chargé de communication',
                achievements: [
                    <>Gestion des réseaux sociaux</>,
                    <>Prospection</>,
                    <>Prise de Rendez-vous</>
                ],
                images: [] // No images for this experience
            },
            {
                company: 'Agence Attrape Rêves',
                timeframe: 'janvier 2026 - février 2026',
                role: 'Stagiaire',
                achievements: [
                    <>Gestion de projets évènementiels</>,
                    <>Création de contenus Numériques</>,
                    <>Relation client</>,
                    <>Veille Stratégique</>
                ],
                images: [] // No images for this experience
            },
            {
                company: 'Eat Salad',
                timeframe: 'novembre 2024 - octobre 2025',
                role: 'Employé polyvalent',
                achievements: [
                    <>Préparation cuisine</>,
                    <>Service client</>,
                    <>Gestion de la caisse</>,
                    <>Nettoyage</>
                ],
                images: [] // No images for this experience
            }
        ]
    },
    studies: {
        display: true,
        title: 'Formation',
        institutions: [
            {
                name: 'Sup de Com',
                description: <>Mastère manager de la communication (Rentrée 2026)</>,
            },
            {
                name: 'Université Paul Valéry Montpellier 3',
                description: <>Licence Information - Communication (2023-2026).<br /> - Organisation d'un évènement (Loto caritatif).<br /> - Création d'une campagne de Pub.<br /> - Veille Marketing.<br /> - Création de contenus Numériques Prints (Flyer, Carte de visite, dépliant).</>,
            },
            {
                name: 'Lycée Jean Vilar - Villeneuve',
                description: <>Baccalauréat général (2021-2022).</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Compétences',
        skills: [
            {
                title: 'Suite Adobe',
                description: <>Maîtrise d'Indesign, Photoshop, Première Pro, et Illustrator pour la création de supports visuels et de montages vidéo.</>,
                images: []
            },
            {
                title: 'Outils de Création & Vidéo',
                description: <>Utilisation avancée de Canva / Canva Pro et de CapCut pour la production de contenus numériques rapides et percutants.</>,
                images: []
            },
            {
                title: 'Veille & Organisation',
                description: <>Mise en place d'outils de veille tels que Google Alerte et FEEDLY.<br /><br /><i>Permis B + véhiculée.</i></>,
                images: []
            }
        ]
    },
}

const blog = {
    label: 'News',
    title: 'Mes actualités et publications récentes.',
    description: `Lisez ce que ${person.name} a fait récemment`
}

const work = {
    label: 'Projects',
    title: 'Mes projets',
    description: `Une sélection de projets par ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'Ma galerie',
    description: `Une collection de créations par ${person.name}`,
    images: []
}

export { person, social, newsletter, home, about, blog, work, gallery };