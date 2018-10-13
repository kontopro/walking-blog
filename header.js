import React, { Component } from "react"
import { Link } from "@reach/router"
import logo from './logo.jpg'

class Header extends Component  {
    render() {
        return(
            <header className="header">
                <div className='logo'>
                    <img src={logo} width='450' alt='logo showing a trekker and the title walking-in-lefkada'/>
                </div>
                <div className='site-title'>
                    <h1>explore our routes from trekking in Lefkada</h1>
                </div>
                <nav className="site-navigation" role="navigation" aria-label="Main">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Return to main site</Link></li>
                        <li><Link to="/admin/create"> Log in</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header