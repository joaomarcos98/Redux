import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types"

interface CatalogItemProps {
    product: IProduct
}

export const CatalogItem = ({ product }: CatalogItemProps) => {

    const dispath = useDispatch();

    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failuredStockCheck.includes(product.id)
    });

    const handleAddProductToCart = useCallback(() => {
        dispath(addProductToCartRequest(product));
    }, [dispath, product]);


    return (
        <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {"   "}

            <button
                onClick={handleAddProductToCart}
            >
                Comprar
            </button>

            {hasFailedStockCheck && <span style={{color: "red"}}> Falta de estoque</span>}
        </article>
    )
}