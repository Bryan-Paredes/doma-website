import { Building, Building2, ChartSpline, Factory, Home, ScrollText, Utensils, type AstroComponent } from "@lucide/astro";

export interface ComercialData {
    src: string,
    icon: AstroComponent,
    name: string,
    label: string
    description: string
    list: string[]
}

export interface Benefit {
    icon: AstroComponent,
    name: string
    description: string
}

export const comercialData: ComercialData[] = [
    {
        src: "/commercial/office.webp",
        icon: Building,
        name: "Office Cleaning",
        label: "Clean and Professional Workspaces",
        description: "We keep your workspace clean, healthy, and professional to impress clients and employees, increasing productivity",
        list: [
            "Cleaning of common and private areas",
            "Disinfection of high-touch surfaces",
            "Bathroom and kitchen cleaning",
            "Emptying of trash and recycling bins"
        ]
    },
    {
        src: "/commercial/locales.webp",
        icon: Home,
        name: "Store and Retail Cleaning",
        label: "Clean Environments That Attract Customers",
        description: "We create a clean and welcoming environment that attracts customers and improves the shopping experience, boosting sales",
        list: [
            "Floor and Shelf Cleaning",
            "Glass and Window Cleaning",
            "Disinfection of High - Traffic Areas",
            "Maintenance of Fitting Room Areas"
        ]
    },
    {
        src: "/commercial/restaurantes.webp",
        icon: Utensils,
        name: "Restaurant Cleaning",
        label: "Impeccable Hygiene for Food Establishments",
        description: "We keep your food establishment clean and sanitary, complying with all health and food safety regulations",
        list: [
            "Deep Kitchen Cleaning",
            "Disinfection of Dining Areas",
            "Extractor Hood Cleaning",
            "Slip - Resistant Floor Treatment"
        ]
    },
    {
        src: "/commercial/instalaciones.webp",
        icon: Building2,
        name: "Facility Maintenance",
        label: "Comprehensive services for large spaces",
        description: "Comprehensive maintenance services to keep your facilities in optimal condition, prolonging their lifespan and appearance",
        list: [
            "Common area cleaning",
            "Floor maintenance",
            "Exterior window cleaning",
            "Pest control and prevention"
        ]
    }
]

export const comercialBenefits: Benefit[] = [
    {
        icon: Factory,
        name: "Improves Image",
        description: "A clean and well-maintained space improves your company's image among customers and employees, generating trust and professionalism"
    },
    {
        icon: ChartSpline,
        name: "Increases Productivity",
        description: "A clean and healthy work environment increases productivity and reduces absenteeism, improving your team's performance"
    },
    {
        icon: ScrollText,
        name: "Regulatory Compliance",
        description: "Our services help you comply with current health and safety regulations, avoiding penalties and legal issues"
    }
]