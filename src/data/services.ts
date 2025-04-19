import { Building, Construction, House, TriangleAlert, type AstroComponent } from "@lucide/astro"

export interface Service {
    id: number
    icon: AstroComponent
    src: string
    title: string
    description: string
    list: string[]
    link?: string
    color: string
}

export const serviceList: Service[] = [
    {
        id: 1,
        icon: House,
        src: "/services/residential-cleaning.webp",
        title: "Residential cleaning",
        description: "Transform your home with residential cleaning services, from regular and deep cleaning",
        list: ["Regular and deep cleaning", "Mudanza cleaning", "Alfombras cleaning"],
        link: "/residential",
        color: "teal"
    },
    {
        id: 2,
        icon: Building,
        src: "/services/commercial-cleaning.webp",
        title: "Commercial cleaning",
        description: "Keep your business impeccable with commercial cleaning services.",
        list: ["Oficinas cleaning", "Tiendas and local cleaning", "Maintenance of installations"],
        link: "/commercial",
        color: "blue"
    },
    {
        id: 3,
        icon: TriangleAlert,
        src: "/services/janitorial-cleaning.webp",
        title: "Janitorial cleaning",
        description: "Offer specialized services for specific needs with the highest standards.",
        list: ["Post-construction cleaning", "Professional desinfection", "Surface treatment"],
        color: "purple"
    },
    {
        id: 4,
        icon: Construction,
        src: "/services/post-construction.webp",
        title: "Post Construction",
        description: "Offer specialized services for specific needs with the highest standards.",
        list: ["Post-construction cleaning", "Professional desinfection", "Surface treatment"],
        color: "yellow"
    }
]