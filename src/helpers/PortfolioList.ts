export interface PortfolioData {
    mainImageUrl: string,
    images: string[],
    title: string
    shortDescription: string
    mainDescription: string
    url?: string
    tech: string | string[] | TechData[],
    projectRole: string
    date: string,
    projectType: "Web App" | "Mobile App"
}

export interface TechData{
    name: string
    url: string
}

export const PORTFOLIO_LIST : PortfolioData[] = [{
    mainImageUrl: "/assets/img/portfolio/xtremax-revamp/1.png",
    images: ["/assets/img/portfolio/xtremax-revamp/1.png", "/assets/img/portfolio/xtremax-revamp/2.png"],
    title: "Xtremax Revamp",
    shortDescription: "Revamp the company profile of xtremax.",
    mainDescription: "Revamp the company profile of xtremax. The base of the project is nuxt2 and using nimvio as headless CMS. This website includes several css animation such as GSAP and slick slider.",
    url: "https://www.xtremax.com/",
    tech: "Vuejs, Nuxt2, Vuex, Nimvio, HTML5, CSS3, SCSS, javascript",
    projectRole: "Frontend Developer",
    date: "2024-04-24T00:00:00Z",
    projectType: "Web App"
}]