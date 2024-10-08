import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { items } from './Data'
import { useLocation } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"

const Navbar = ({ setData, cart }) => {
    let [search, setSearch] = useState("")

    let location = useLocation()

    let filterByCategory = (category) => {
        let elements = items.filter(product => product.category == category)
        setData(elements)
    }

    let clearFilter = () => {
        setData([...items])
    }

    let filterByPrice = (price) => {
        let priceFilter = items.filter(product => product.price <= price)
        setData(priceFilter)
    }

    let searchFilter = (e) => {
        e.preventDefault()
        let filters = items.filter(pr => pr.title.toLowerCase().includes(search))
        setData(filters)
    }
    return (
        <>
            <header className='sticky-top'>
                {/* navbar */}
                <div className="nav-bar">
                    <Link onClick={e => clearFilter()} to={"/"} className="brand">E - Commerce</Link>
                    <form onSubmit={searchFilter} className="search-bar">
                        <input type="text" placeholder='Search Products' onChange={e => setSearch(e.target.value)} value={search} />
                    </form>
                    <Link to={"/cart"} className="cart">
                        <button type="button" className="btn btn-primary position-relative">
                            <FiShoppingCart style={{fontSize : "1.5rem"}} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </Link>
                </div>
                {/* navbar wrapper */}
                {
                    location.pathname == "/" && (
                        <div className="nav-bar-wrapper">
                            <div className="items">Filter by {"->"}</div>
                            <div onClick={e => clearFilter()} className="items">No Filter</div>
                            <div onClick={e => filterByCategory("mobiles")} className="items">Mobiles</div>
                            <div onClick={e => filterByCategory("laptops")} className="items">Laptops</div>
                            <div onClick={e => filterByCategory("tablets")} className="items">Tablets</div>
                            <div onClick={e => filterByPrice(29999)} className="items">{">="}29999</div>
                            <div onClick={e => filterByPrice(49999)} className="items">{">="}49999</div>
                            <div onClick={e => filterByPrice(69999)} className="items">{">="}69999</div>
                            <div onClick={e => filterByPrice(89999)} className="items">{">="}89999</div>
                        </div>
                    )
                }
            </header>
        </>
    )
}

export default Navbar
