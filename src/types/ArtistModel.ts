export interface artistModel {
    id: number;
    name: string;
    surname: string;
    img: string | null;
}

export interface pictureModel {
    id: number;
    atrist: artistModel
    title: string;
    price: number;
    img: string | null;
}