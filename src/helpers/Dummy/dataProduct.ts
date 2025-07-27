

export interface ISeller {
    id: number
    nameSeller: string
}

export interface IDataProduct {
    id: number
    nameProduct: string
    price: number
    seller: ISeller,
    count: number
    country: string
    image: {
        id: number
        urlImagen: string
    }
}[]

export const dataProuduct: IDataProduct[] = [
    {
        id: 1,
        nameProduct: 'LANKA SILVER – BLUE MIRROR',
        price: 59.990,
        seller: {
            id: 1,
            nameSeller: 'SQUARESCL'
        },
        count: 10,
        country: 'CL',
        image: {
            id: 1,
            urlImagen: 'https://xfirechile.cl/wp-content/uploads/2024/02/lankablue-scaled.jpg' 
        }
    },
    {
        id: 2,
        nameProduct: 'MONACO BLACK – RED MIRROR',
        price: 59.990,
        seller: {
            id: 1,
            nameSeller: 'SQUARESCL'
        },
        count: 10,
        country: 'CL',
        image: {
            id: 1,
            urlImagen: 'https://xfirechile.cl/wp-content/uploads/2024/02/milanired-scaled.jpg' 
        }
    },
    {
        id: 3,
        nameProduct: 'Polerón Con Capucha Y Cierre Ykk® Hombre Lingue Lenga®',
        price: 26.990,
        seller: {
            id: 1,
            nameSeller: 'SQUARESCL'
        },
        count: 10,
        country: 'CL',
        image: {
            id: 1,
            urlImagen: 'https://http2.mlstatic.com/D_NQ_NP_955268-MLC72196779801_102023-O.webp' 
        }
    },
    {
        id: 4,
        nameProduct: 'WALD BLACK – BLACK MIRROR',
        price: 39.990,
        seller: {
            id: 1,
            nameSeller: 'SQUARESCL'
        },
        count: 10,
        country: 'CL',
        image: {
            id: 1,
            urlImagen: 'https://xfirechile.cl/wp-content/uploads/2024/02/waldblack-scaled.jpg' 
        }
    },
    {
        id: 4,
        nameProduct: 'lente de sol filtro uv400',
        price: 39.990,
        seller: {
            id: 1,
            nameSeller: 'SQUARESCL'
        },
        count: 10,
        country: 'CL',
        image: {
            id: 1,
            urlImagen: 'https://xfirechile.cl/wp-content/uploads/2024/02/waldblack-scaled.jpg' 
        }
    },
    {
        id: 4,
        nameProduct: 'lente de sol polarizados',
        price: 49.990,
        seller: {
            id: 1,
            nameSeller: 'SQUARESCL'
        },
        count: 10,
        country: 'CL',
        image: {
            id: 1,
            urlImagen: 'https://xfirechile.cl/wp-content/uploads/2024/02/waldblack-scaled.jpg' 
        }
    }
]