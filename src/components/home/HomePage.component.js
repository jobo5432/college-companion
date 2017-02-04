import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';

class HomePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            selectedInstitution: null,
            institutions: this.props.institutions.map((institution)=>{
               return {value: institution.id, label: institution.name};
            })
        };

        this.logChange = this.logChange.bind(this);
        this.goToInstitution = this.goToInstitution.bind(this);
    }

    logChange(institution){
        this.setState({
            selectedInstitution: institution
        });
    }

    goToInstitution(){
        if(this.state.selectedInstitution){
            alert(`We're going to ${this.state.selectedInstitution.label}!`);
        }
    }

    render() {
        return(
            <div>
                <div className="jumbotron banner">
                    <div className="content row">
                        <div className="col-xs-3 col-xs-offset-6 call-to-action">
                            <div>
                                <h1>college is so much more than class. <span className="highlight">find all of it here.</span></h1>
                            </div>
                            <div className="row form">
                                <div className="col-xs-11 container">
                                    <h2>Get Started now...</h2>
                                    <div className="row">
                                        <div className="col-xs-10">
                                            <Select
                                                name="institutionSearchTerm"
                                                value={this.state.selectedInstitution}
                                                options={this.state.institutions}
                                                onChange={this.logChange}
                                                placeholder="Find your school..."
                                            />
                                        </div>
                                        <div className="col-xs-2 no-left-margin">
                                            <button className="btn btn-home" type="button" onClick={this.goToInstitution}>Go!</button>
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
            </div>
        );
    }
}

HomePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    institutions: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        institutions: state.institutions
    };
}

export default connect(mapStateToProps)(HomePage);