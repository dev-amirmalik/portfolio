export interface PortfolioData {
  mainImageUrl: string;
  images: string[];
  title: string;
  shortDescription: string;
  mainDescription: string;
  url?: string;
  tech: string | string[] | TechData[];
  projectRole: string;
  date: string;
  projectType: "Web App" | "Mobile App" | "Template Image" | "Library";
}

export interface TechData {
  name: string;
  url: string;
}

export const PORTFOLIO_LIST: PortfolioData[] = (window as any).portfolio.projects;
