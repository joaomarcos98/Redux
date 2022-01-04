import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { api } from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

const Catalog = () => {

    const dispath = useDispatch();
    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get("products")
            .then(resp => setCatalog(resp.data))
    }, [])

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispath(addProductToCart(product));
    }, [dispath])

    return (

        <main>meta
            <h1>
                Catalog
            </h1>
            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span> {"   "}

                    <button
                        onClick={() => handleAddProductToCart(product)}
                    >
                        Comprar
                    </button>
                </article>
            ))}
        </main>
    )
}

export { Catalog };