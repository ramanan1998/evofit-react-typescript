import { ReactNode } from "react"

export interface BenifitsType {
    key: number,
    title: string,
    para: string,
    icon: JSX.Element,
    image: string
}

export interface TestimonialsType {
    key?: number,
    image: ReactNode,
    text: string
}