import axios from 'axios';
import { useEffect , useState} from 'react';
import { Header } from "../../components/Header";
import { ProductGrid } from "./ProductsGrid";


import "./HomePage.css";

type HomePageProps = {
    cart: { 
        productId: string; 
        quantity: number; 
        deliveryOptionId: string; 
    }[]

    loadCart: string;
}

export function HomePage({cart , loadCart}:HomePageProps) {

    const [products, setProducts ] = useState([])

    useEffect(()=> {
        const getHomeData = async () =>{
            const response = await axios.get('/api/products')
            setProducts(response.data);
        }

        getHomeData();
    }, []);
    
    

    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart} />

            <div className="home-page">
                <ProductGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}

// export default HomePage
