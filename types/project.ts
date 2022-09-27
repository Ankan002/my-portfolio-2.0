export interface Project {
    id: string;
    rank: number;
    title: string;
    small_description: string;
    technologies: Array<string>;
    image: string;
    category: "mobile" | "web";
    live?: string;
    frontend_code?: string;
    backend_code?: string;
    landing_page_code?: string;
}