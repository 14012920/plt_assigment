export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";

export type Cart = {
    id: string;
    name: string;
    colour: string;
    price: number;
    img: string
    qty:number
 
};

export type CartType = {
 cart?: Cart[];
};

export interface addToCart {
    type: typeof ADD_TO_CART;
    payload:Cart
}

export interface removeToCart {
    type: typeof REMOVE_TO_CART;
    payload:Cart
}


export type CartDispatchTypes =  addToCart | removeToCart;