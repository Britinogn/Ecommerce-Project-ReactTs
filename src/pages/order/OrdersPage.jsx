import axios from 'axios';
import { useEffect , useState} from 'react';
import {OrderGrid} from './OrderGrid'

import {Header} from '../../components/Header'
import './OrdersPage.css'

export function OrdersPage({cart}){

    const [orders , setOrders ]= useState([]);

    useEffect(() => {
        axios.get('/api/orders?expand=products')

        .then((response)=>{
            setOrders(response.data);
        });
    })

    return(
        <>
            <title>Orders</title>
            <Header  cart={cart}  />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

            <OrderGrid orders={orders} />
                
            </div>
        </>
    )
}