import { Heart, ShieldCheck, Unplug, UsersRound, type AstroComponent } from "@lucide/astro"


export interface Options {
    icon: AstroComponent
    title: string
    description: string
}


export const optionsList = [
    {
        icon: UsersRound,
        title: "Professional Staff",
        description: "Our team is made up of trained professionals with extensive experience in the sector"
    },
    {
        icon: ShieldCheck,
        title: "Organic Products",
        description: "We use eco-friendly cleaning products that are safe for your family and the environment"
    },
    {
        icon: Unplug,
        title: "Advanced Technology",
        description: "We employ cutting-edge equipment and technologies for superior results"
    },
    {
        icon: Heart,
        title: "Satisfaction Guarantee",
        description: "We offer a 100% satisfaction guarantee on all our services"
    }
] 