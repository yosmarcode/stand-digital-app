export interface ICategory {
    id: string;
    name_category: string;
}


export interface ISellers {
    id?: string;
    name_sellers: string;
    descriptions: string;
    id_category: string;
    id_user: string;
    id_account: string;
    active?: boolean;
    id_contry?: string;
}