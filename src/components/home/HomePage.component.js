import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Select from 'react-select';
import * as institutionActions from '../../actions/institutionActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedInstitution: {},
      institutions       : this.props.institutions.map((institution) => {
        return {value: institution.id, label: institution.name};
      })
    };

    this.logChange       = this.logChange.bind(this);
    this.goToInstitution = this.goToInstitution.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      institutions: nextProps.institutions.map((institution) => {
        return {value: institution.id, label: institution.name};
      })
    });
  }

  logChange(institution) {
    this.setState({
      selectedInstitution: institution
    });
  }

  goToInstitution() {
    if (this.state.selectedInstitution) {
      let id = this.state.selectedInstitution.value;

      this.props.actions.getInstitution(id).then(institution => {
        this.context.router.push(`/college/${institution.subdomain}`);
      }).catch(error => {
        //handle error
      });
    }
  }

  render() {
    return (
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

HomePage.contextTypes = {
  router: React.PropTypes.object
};

HomePage.propTypes = {
  actions     : PropTypes.object.isRequired,
  institutions: PropTypes.array.isRequired,
  insitution  : PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(institutionActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    institutions: state.institutions
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);