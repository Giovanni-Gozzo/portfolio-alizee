import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Alizée',
    lastName: 'Beaudrillard',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Étudiante en communication',
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
        icon: 'document',
        link: '/images/CV.pdf'
    }
];


const home = {
    label: 'Accueil',
    title: `Portfolio de ${person.name}`,
    description: `Site web de portfolio présentant mon profil d'${person.role}`,
    headline: <>Étudiante en communication / <br /> Future Chargée de Communication</>,
    subline: <>Je suis Alizée, une étudiante curieuse, dynamique et créative, fraîchement diplômée d'une licence Information et Communication.<br /> À la recherche d'une alternance en communication pour la rentrée 2026, j'ai à cœur de participer activement aux projets et d'apporter des idées nouvelles au sein d'une équipe.</>
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
        description: <>
            <span>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Qui suis-je ?</strong>
                <span style={{ fontSize: '1.1rem', fontWeight: '500', display: 'block', marginBottom: '8px', color: 'var(--neutral-weak)' }}>
                    Future communicante & alternante passionnée
                </span>
                Dès la rentrée 2026, je rejoins les bancs de l'EFAP pour un cursus de deux ans. Pour accompagner cette formation, je suis à la recherche d'une opportunité en alternance dans le secteur de la communication et de l'événementiel, selon un rythme idéal de <strong>3 semaines en entreprise pour 1 semaine à l'école</strong>.
            </span>
            <span>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Ma vision & Ce que j'apporte</strong>
                Curieuse de nature, dynamique et rigoureuse dans mon travail, je vois chaque projet comme un défi à relever en équipe. Intégrer votre structure, c'est pour moi l'opportunité de mettre mon énergie et ma créativité au service de vos ambitions, tout en apportant un regard neuf et des idées innovantes.
            </span>
            <span>
                Prête à m'investir pleinement, collaborons pour faire rayonner vos prochains événements et campagnes !
            </span>
        </>
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
                role: 'Stagiaire Communication & Evènementiel',
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
                name: 'EFAP',
                description: <>Mastère manager de la communication (Rentrée 2026)</>,
            },
            {
                name: 'Université Paul Valéry Montpellier 3',
                description: <>Licence Information - Communication (2023-2026).</>,
            },
            {
                name: 'Lycée Jean Vilar - Villeneuve-lez-Avignon',
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
                description: <>Utilisation avancée de Canva / Canva Pro, Mojo et de CapCut pour la production de contenus numériques rapides et percutants.</>,
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
    label: 'Ma vie',
    title: 'Ma vie',
    description: `Un aperçu de la vie d'Alizée en dehors du travail et des cours`,
    images: [
        { src: '/images/gallery/ski.jpg', alt: 'Ski', orientation: 'vertical' },
        { src: '/images/gallery/majorque-plage.jpg', alt: 'Majorque', orientation: 'vertical' },
        { src: '/images/gallery/disneyland.jpg', alt: 'Disneyland', orientation: 'horizontal' },
        { src: '/images/gallery/via-ferrata.jpg', alt: 'Via ferrata', orientation: 'vertical' },
        { src: '/images/gallery/canyoning.jpg', alt: 'Canyoning', orientation: 'vertical' },
        { src: '/images/gallery/avignon.jpg', alt: 'Festival d\'Avignon', orientation: 'vertical' },
        { src: '/images/gallery/majorque-famille.jpg', alt: 'Majorque', orientation: 'horizontal' },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };