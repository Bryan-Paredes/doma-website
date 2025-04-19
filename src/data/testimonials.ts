export interface Testimonial {
    star: number
    description: string
    src: string
    name: string
}

export const testimonials: Testimonial[] = [
    {
        star: 5,
        description: "Doma Clean's service exceeded all my expectations. Their team was professional, punctual, and left my home spotless. I will definitely recommend them to my friends and family.",
        src: "/retrato.webp",
        name: "María Rodríguez"
    },
    {
        star: 4,
        description: "As a business owner, cleanliness is crucial to our image. Doma Clean has kept our offices spotless for years. Their attention to detail and professionalism are unparalleled.",
        src: "/retrato.webp",
        name: "Carlos Méndez"
    },
    {
        star: 3,
        description: "Doma Clean's services exceeded all my expectations. Their team was professional, punctual, and left my home spotless. I will definitely recommend them to my friends and family.",
        src: "/retrato.webp",
        name: "Laura Sánchez"
    }

]