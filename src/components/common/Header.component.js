import React from 'react';

import { Link, IndexLink } from 'react-router';

const Header = () => {
    return(
        <nav className="navbar front-porch-navbar">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">[College Companion]</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><IndexLink to="/" activeClassName="active-link">Home</IndexLink></li>
                        <li><Link to="/about" activeClassName="active-link">About</Link></li>
                        <li><Link to="/contact" activeClassName="active-link">Contact</Link></li>
                    </ul>
                </div>
        </nav>
    );
};

export default Header;