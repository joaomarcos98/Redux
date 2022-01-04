import { useEffect, useState } from "react";

import { api } from "../services/api";
import { IProduct } from "../store/modules/cart/types";
import { CatalogItem } from "./CatalogItem";

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
                <CatalogItem key={product.id} product={product} />
            ))}
        </main>
    )
}

export { Catalog };