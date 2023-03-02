import {ISmartPhone} from "./ismartphone";

export interface ITablet extends ISmartPhone {
    cellular: boolean;
    wifi: boolean;
}