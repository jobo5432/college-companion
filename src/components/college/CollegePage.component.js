import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as institutionActions from '../../actions/institutionActions';

class CollegePage extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      institution: {},
      subdomain: this.props.params.subdomain
    };
  }

  componentWillMount(){
    this.props.actions.getInstitution(this.state.subdomain).then(institution =>{
      this.setState({
        institution: institution
      });
    }).catch(error => {
      //handle error
    });
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps = ");
    console.log(nextProps);
  }


  render(){
    return (
      <div>Welcome to {this.state.institution.name}!</div>
    );
  }
}

CollegePage.propTypes = {
  params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    institution: state.institution
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(institutionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollegePage);