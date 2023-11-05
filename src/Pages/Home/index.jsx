// Import dependecias de React
import { useState } from "react"
import { useEffect } from "react"

// Import Component
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"

// Import CSS
import './style.scss';
import { ProductDetail } from "../../Components/ProductDetail";

export const Home = () => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>

            <Layout>
                <h1 className="title">HOME</h1>
                <div className="card_grid">
                    {
                        items?.map(item => (
                            <Card data={item} key={item.id} />
                        ))
                    }
                </div>
            </Layout>
            <ProductDetail />
        </div>
    )
}