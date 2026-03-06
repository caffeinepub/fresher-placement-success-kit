import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    name: string;
    description: string;
    emoji: string;
}
export interface ShopInfo {
    name: string;
    whatsapp: string;
    phone: string;
    location: string;
}
export interface backendInterface {
    getProducts(): Promise<Array<Product>>;
    getShopInfo(): Promise<ShopInfo>;
}
