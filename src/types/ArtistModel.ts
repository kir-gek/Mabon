export interface artistModel {
    id: number;
    name: string;
    surname: string;
    img: string | null;
}

export interface pictureModel {
    id: number;
    atristId: number
    title: string;
    price: number;
    img: string | null;
}