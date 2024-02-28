import { useEffect, useState } from "react"

const useProduct =()=>{
    const [products,setProducts] =useState([])
    useEffect(()=>{
        fetch('http://localhost:7000/product')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return [products,setProducts]
}
export default useProduct;