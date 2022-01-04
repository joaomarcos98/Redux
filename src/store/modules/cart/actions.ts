import { IProduct } from "./types";

export const addProductToCart = (product: IProduct) => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        payload: {
            product
        }
    }
}

