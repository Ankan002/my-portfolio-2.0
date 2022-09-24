export interface Skill {
    id: string;
    name: string;
    proficiency_level: number;
    category: "frontend" | "backend" | "language" | "devops";
    image: string
}