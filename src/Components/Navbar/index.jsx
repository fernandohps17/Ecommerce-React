// Import dependencias de React
import { NavLink } from "react-router-dom"

// Import CSS
import './style.scss';

export const Navbar = () => {

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
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/clothes'>Clothes</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/electronics'>Electronics</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/furnitures'>Furnitures</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/toys'>Toys</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/others'>Others</NavLink></li>
                    </ul>

                    <ul className="nav_section">
                        <li><b>shopi@gmail.com</b></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/my-orders'>My Orders</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/my-account'>My Account</NavLink></li>
                        <li><NavLink className='nav_section_link' style={({ isActive }) => isActive ? activeStyle : undefined} to='/sing-in'>Sing In</NavLink></li>
                        <li>🛒 0</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}