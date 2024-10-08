import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const Detail = ({cart , setCart}) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [relatedProducts , setRelatedProducts] = useState([])

    useEffect(() => {
        const filterProduct = items.filter(product => product.id == id)
        console.log(filterProduct)
        setProduct(filterProduct[0])

        const filterRelated = items.filter(rP => rP.category === product.category)
        setRelatedProducts(filterRelated)
    }, [id , product.category])
    return (
        <>
            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} alt="" />
                </div>
                <div className='text-center'>
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className='btn btn-primary mx-3'>{product.price}₹</button>
                    <button className='btn btn-warning'>Add to cart</button>
                </div>
            </div>
            <h2 className='text-center my-4'>Related Products</h2>
            <Product items={relatedProducts} cart={cart} setCart={setCart}/>
        </>
    )
}

export default Detail
