// Import dependencias de React
import { NavLink } from "react-router-dom"
import { useContext } from "react";

// Import Estado global
import { ShoppingCartContext } from "../../Context";

// Import CSS
import './style.scss';

export const Navbar = () => {

    const context = useContext(ShoppingCartContext)

    // const activeStyle = 'line'
    const activeStyle = {
        textDecoration: 'underline',
        color: '#f59b1e',
    }

    return (
        <div className="container">
            <div className="content">
                <nav className="nav">
                    <ul className="nav_section">
                        <li><NavLink className='nav_section_link_logo' to='/'><b>Shopi</b></NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/'>All</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/clothes' onClick={() => context.setSearchByCategory('clothes')}>Clothes</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/electronics' onClick={() => context.setSearchByCategory('electronics')}>Electronics</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/furnitures' onClick={() => context.setSearchByCategory('Furnitures')}>Furnitures</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/toys' onClick={() => context.setSearchByCategory('toys')}>Toys</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/others' onClick={() => context.setSearchByCategory('others')}>Others</NavLink></li>
                    </ul>

                    <ul className="nav_section">
                        <li><b>shopi@gmail.com</b></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/my-orders'>My Orders</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/my-account'>My Account</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/sing-in'>Sing In</NavLink></li>
                        <li>🛒 {context.count}</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}