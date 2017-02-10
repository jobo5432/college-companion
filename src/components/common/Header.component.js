import React from 'react';

import { Link, IndexLink } from 'react-router';

const Header = () => {
    return(
<<<<<<< HEAD
        <nav className="navbar front-porch-navbar">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <IndexLink to="/" className="navbar-brand" activeClassName="active-link">[College Companion]</IndexLink>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><IndexLink to="/" activeClassName="active-link">Home</IndexLink></li>
                        <li><Link to="/about" activeClassName="active-link">About</Link></li>
                        <li><Link to="/contact" activeClassName="active-link">Contact</Link></li>
                        <li><Link to="/courses" activeClassName="active-link">*Courses*</Link></li>
                    </ul>
                </div>
=======
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
>>>>>>> c9df4a5d043fc9ca5d04883fc0f347a21621c544
        </nav>
    );
};

export default Header;