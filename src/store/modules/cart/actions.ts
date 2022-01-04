import { ActionTypes, IProduct } from "./types";

export const addProductToCartRequest = (product: IProduct) => {
    return {
        type: ActionTypes.addProductToCartRequest,
        payload: {
            product
        }
    }
}

export const addProductToCartSuccess = (product: IProduct) => {
    return {
        type: ActionTypes.addProductToCartSuccess,
        payload: {
            product
        }
    }
}

export const addProductToCartFailure = (productId: number) => {
    return {
        type: ActionTypes.addProductToCartFailure,
        payload: {
            productId
        }
    }
}

