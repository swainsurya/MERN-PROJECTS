import React from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Product = ({ items, cart, setCart }) => {
    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = { id, price, title, description, imgSrc }
        setCart([...cart, obj])
        console.log(cart)
        toast.success('Item is added successfully')
    }
    return (
        <>

            <div className="container my-5">
                <div className="row">
                    {items.map(item => (
                        <>
                            <div className="col-lg-4 col-md-6 my-3 text-center" key={item.id}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <Link to={`/product/${item.id}`} style={
                                        {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }
                                    }>
                                        <img src={item.imgSrc} className="card-img-top" alt="..." />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <button className='btn btn-primary mx-3'>{item.price}₹</button>
                                        <button onClick={e => addToCart(item.id, item.price, item.title, item.description, item.imgSrc)} className='btn btn-warning'>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <ToastContainer position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce />

        </>
    )
}

export default Product
