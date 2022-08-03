export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id: 1,
        name: 'Smartphone XL',
        price: 950,
        description: 'Un Smartphone con una pantalla grande.',
    },
    {
        id: 2,
        name: 'Smartphone Mini',
        price: 530,
        description: 'Un Smartphone con buena cámara.',
    },
    {
        id: 3,
        name: 'Smartphone Stándar',
        price: 325,
        description: '',
    },
];