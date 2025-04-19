import { Truck, WashingMachine, type AstroComponent } from "@lucide/astro"
import Couch from "@/assets/couch.svg";
import DeepClean from "@/assets/deepClean.svg";

export interface ResidentialData {
    src: string,
    icon: AstroComponent,
    name: string,
    label: string
    description: string
    list: string[]
}

export interface Benefit {
    number: number
    name: string
    description: string
}

export const residencialData: ResidentialData[] = [
    {
        src: "/residencial/regular.webp",
        icon: WashingMachine,
        name: "Regular Cleaning",
        label: "Keep your home spotless with scheduled visits",
        description: "Our regular cleaning service keeps your home spotless with scheduled weekly, bi-weekly, or monthly visits, depending on your needs",
        list: ["Cleaning all rooms",
            "Vacuuming and mopping floors",
            "Bathroom and kitchen cleaning",
            "Dust removal from surfaces"]
    },
    {
        src: "/residencial/deep.webp",
        icon: DeepClean,
        name: "Deep Cleaning",
        label: "Intensive cleaning for every corner of your home",
        description: "Our deep cleaning service reaches every corner of your home, removing accumulated dirt and germs for a completely renewed environment",
        list: [
            "Cleaning behind and under furniture",
            "Cleaning appliances inside and out",
            "Cleaning interior windows",
            "Complete disinfection of bathrooms and kitchen"
        ]
    },
    {
        src: "/residencial/mudanza.webp",
        icon: Truck,
        name: "Move-Out Cleaning",
        label: "We prepare your new home or leave your old one spotless",
        description: "Whether you're moving to a new home or leaving your current residence, our move-out cleaning service ensures everything is spotless and ready for the next chapter",
        list: [
            "Complete cleaning of the vacant property",
            "Closet and drawer cleaning",
            "Wall stain removal",
            "Deep cleaning of bathrooms and kitchens"
        ]
    },
    {
        src: "/residencial/tapiceria.webp",
        icon: Couch,
        name: "Carpet and Upholstery Cleaning",
        label: "Revitalise your carpets and furniture",
        description: "Revitalise your carpets and furniture with our specialized carpet and upholstery cleaning service, removing stains, odors, and allergens",
        list: [
            "Deep carpet cleaning",
            "Stain removal",
            "Sofa and armchair cleaning",
            "Anti - mite treatment and deodorization"
        ]
    }
]

export const residencialBenefits: Benefit[] = [
    {
        number: 1,
        name: "Consultation",
        description: "We assess your specific needs and create a personalized plan for your home"
    },
    {
        number: 2,
        name: "Quote",
        description: "We provide a detailed and transparent quote with no hidden charges"
    },
    {
        number: 3,
        name: "Cleaning",
        description: "Our professional team provides cleaning services with attention to detail and quality products"
    },
    {
        number: 4,
        name: "Follow-up",
        description: "We verify your satisfaction and schedule future services based on your needs"
    }
]