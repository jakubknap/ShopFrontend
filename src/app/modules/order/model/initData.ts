import { Payment } from "./payment";
import { Shimpent } from "./shimpent";

export interface InitData {
    shipments: Array<Shimpent>,
    payments: Array<Payment>
}