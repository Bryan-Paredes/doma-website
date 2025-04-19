
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import X from "@/assets/x-brand.svg";

export interface HeaderData {
    id: number
    name: string
    href: string
}

export const dataHeader: HeaderData[] = [
    {
        id: 1,
        name: "Home",
        href: "/#home"
    },
    {
        id: 2,
        name: "About",
        href: "/#about"
    },
    {
        id: 3,
        name: "Services",
        href: "/#services"
    },
    {
        id: 4,
        name: "Residential",
        href: "/residential"
    },
    {
        id: 5,
        name: "Commercial",
        href: "/commercial"
    },
]


export const socialMedia = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/domaclean",
        icon: Facebook
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/domaclean",
        icon: Instagram
    },
    {
        name: "X",
        href: "https://www.instagram.com/domaclean",
        icon: X
    }
]