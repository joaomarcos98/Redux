import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types"

interface CatalogItemProps {
    product: IProduct
}

export const CatalogItem = ({ product }: CatalogItemProps) => {

    const dispath = useDispatch();

    const handleAddProductToCart = useCallback(() => {
        dispath(addProductToCart(product));
    }, [dispath, product])

    return (
        <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {"   "}

            <button
                onClick={handleAddProductToCart}
            >
                Comprar
            </button>
        </article>
    )
}