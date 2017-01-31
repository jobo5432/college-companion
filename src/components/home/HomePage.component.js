import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component{
    render() {
        return(
            <div className="jumbotron">
                <h1>College Companion</h1>
                <h2>... relax. You'll see.</h2>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;