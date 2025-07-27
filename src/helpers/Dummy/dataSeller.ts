export interface ICategory {
  id: number;
  description: string;
}

export interface IDataSeller {
  id: number;
  qualification: number;
  nameSeller: string;
  description: string;
  category: ICategory;
  urlLogo?: string
  tags: string[]
}

export const dataSeller: IDataSeller[] = [
  {
    id: 1,
    qualification: 4.5,
    nameSeller: "SQUARESCL SPA",
    description: "Accesorios, Lentes de sol y Ropa deportiva",
    category: {
      id: 1,
      description: "Ropa y Vestuarios",
    },
    urlLogo: '/squares-logo.png',
    tags: ['ropa', 'vestuario', 'accesorios', 'lentes de sol', 'ropa deportiva']
  },
  {
    id: 2,
    qualification: 4,
    nameSeller: "SILPATY BOUTIQUE",
    description: "Ropa de Mujer",
    category: {
      id: 1,
      description: "Ropa y Vestuarios",
    },
    urlLogo: '/silpaty-boutique.png',
    tags: ['ropa', 'vestuario', 'accesorios', 'lentes de sol', 'ropa deportiva']
  },
  {
    id: 3,
    qualification: 4,
    nameSeller: "OTAKUCRAZY",
    description: "Venta de Peluches y anime kpop pokemon",
    category: {
      id: 1,
      description: "Anime pokemon",
    },
    urlLogo: '/LOGO-OTAKU-CRAZY.png',
    tags: ['ropa', 'vestuario', 'accesorios', 'lentes de sol', 'ropa deportiva']
  },
  {
    id: 4,
    qualification: 4,
    nameSeller: "MERCADOTECNO S.A",
    description: "Venta de Peluches y anime kpop pokemon",
    category: {
      id: 1,
      description: "Servicios Informaticos",
    },
    urlLogo: '/LOGO-OTAKU-CRAZY.png',
    tags: ['Pagina Web', 'Servicios Informaticos', 'Base datos', 'Cloud']
  },

]


