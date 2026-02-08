export interface Lead {
    id: string;
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
    status: 'nuevo' | 'leído' | 'respondido' | 'archivado';
    createdAt: Date;
    updatedAt: Date;
}
