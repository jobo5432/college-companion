import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component{
    render() {
        return(
            <div className="jumbotron banner">
                <div className="content row">
                    <div className="col-xs-3 col-xs-offset-6 call-to-action">
                        <div>
                            <h1>College is so much more than class. <span className="highlight">Find all of it here.</span></h1>
                        </div>
                        <div className="row form">
                            <div className="col-xs-11 container">
                                <h2>Get Started now...</h2>
                                <div className="row">
                                    <div className="col-xs-10">
                                        <input type="text" className="form-control input-lg" placeholder="Find your school..." />
                                    </div>
                                    <div className="col-xs-2 no-left-margin">
                                        <button className="btn btn-home btn-lg" type="button">Go!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="add-school-container inline">
                                <a href="#">School not listed?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;