import React from 'react'
import { Link } from "react-router-dom"

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div style={{ width: "49%" }} className="container my-5">
        {
          cart.length == 0 ? (
            <>
              <div className='text-center'>
                <h1>Your cart is empty</h1>
                <Link to="/" className='btn btn-danger'>Continue Shopping...</Link>
              </div>
            </>
          ) : (
            cart.map((item) => (
              <>
                <div className="card mb-3" style={{ width: "700px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={item.imgSrc} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <button className='btn btn-warning'>Buy now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          )
        }
      </div>
      {
        cart.length == 0 ? (
          ""
        ) : (
          <div className="container text-center my-5">
            <button className='btn btn-warning mx-5'>CheckOut</button>
            <button onClick={e => {
              setCart([])
            }} className='btn btn-danger mx-5'>Clear Cart</button>
          </div>
        )
      }
    </>
  )
}

export default Cart
