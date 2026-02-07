export interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    imageUrl: string; // Firebase Storage URL
    description: string;
    featured?: boolean; // Optional: highlight certain projects
    order?: number; // Optional: manual ordering
    createdAt?: Date;
    updatedAt?: Date;
}
