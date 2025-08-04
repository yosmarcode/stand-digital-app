export interface ICategory {
    id: number;
    name_category: string;
}

export interface ISeller {
    id: number;
    name: string;
    description: string;
    image_url: string;
}

export interface IFormValueFilter {
    name_seller: string;
    id_category: number | string;
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
    nickname?: string;
}

export interface ISellersList {
    id?: string;
    name_sellers: string;
    descriptions: string;
    wallpper_img: string;
    logo_sellers: string;
    tags?: string[];
    idcategory: string;
    namecategory: string;
    nickname?: string;
}
