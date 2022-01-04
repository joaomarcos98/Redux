import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IProduct } from "../store/modules/cart/types";

const Catalog = () => {

    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get("products")
            .then(resp => setCatalog(resp.data))
    }, [])

    return (

        <main>
            <h1>
                Catalog
            </h1>
            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span> {"   "}

                    <button>Comprar</button>
                </article>
            ))}
        </main>
    )
}

export { Catalog };