import { useEffect, useState } from "react"



const useOrder =()=>{
    const [orders,setOrders] =useState([])
    useEffect(()=>{
        fetch('http://localhost:7000/orders')
        .then(res =>res.json())
        .then(data =>setOrders(data))
    },[])
    return [orders,setOrders]
}

export default useOrder