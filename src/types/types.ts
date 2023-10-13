export interface Employee {
    fullname: string;
    login: string;
    email: string;
}
export interface Project {
    id: number;
    title: string;
    icon?: any;
    shortDescription: string;
    fullDescription: string;
    developers: Employee[];
    businessAnalytics: Employee[];
    gitlabLink: string;
    swaggerLink: string;
    pageLink: string;
    technologies: string[];
}
