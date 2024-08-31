import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, WheatOffIcon, X, Instagram, LucidePhone } from "lucide-react";

export const socialNetworks = [
    
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "#!",
    },
    
   
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre nosotros",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Portafolio",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Contactos",
        icon: <LucidePhone size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarollo FullStack",
        subtitle: "Empresa",
        description: "Descripción",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Desarollo FrontEnd",
        subtitle: "Empresa",
        description: "Descripción",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Desarrollo BackEnd",
        subtitle: "Empresa",
        description: "Descripción",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Desarrollo FullStack",
        subtitle: "Empresa",
        description: "descripción",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    }
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Proyecto 1",
        image: "/image-1.",
        urlGithub: "url",
        urlDemo: "url",
    },
    {
        id: 2,
        title: "Proyecto 2",
        image: "/image-2.",
        urlGithub: "url",
        urlDemo: "url",
    },
    {
        id: 3,
        title: "Proyecto 3",
        image: "/image-3.",
        urlGithub: "url",
        urlDemo: "url",
    },
    {
        id: 4,
        title: "Proyecto 4",
        image: "/image-4.",
        urlGithub: "url",
        urlDemo: "url",
    },
    {
        id: 5,
        title: "Proyecto 5",
        image: "/image-5.",
        urlGithub: "url",
        urlDemo: "url",
    },
    {
        id: 6,
        title: "Proyecto 6",
        image: "/image-6.",
        urlGithub: "url",
        urlDemo: "url",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];