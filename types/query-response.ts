export interface DecodedSkill {
    id: string
    proficiency_level: number;
    category: "frontend" | "backend" | "language" | "devops";
    image: {
        url: string;
    }
}

export interface DecodedProject {
    id: string;
    rank: number;
    title: string;
    small_description: string;
    description?: string;
    technologies: Array<string>;
    image: {
        url: string;
    };
    category: "mobile" | "web";
    live?: string;
    frontend_code?: string;
    backend_code?: string;
    landing_page_code?: string;
}