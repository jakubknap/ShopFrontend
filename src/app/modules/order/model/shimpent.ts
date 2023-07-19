import { ShimpentType } from "./shimpentType";

export interface Shimpent {
    id: number,
    name: string,
    price: number,
    type: ShimpentType,
    defaultShipment: boolean
}