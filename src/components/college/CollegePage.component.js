import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as institutionActions from '../../actions/institutionActions';
import * as siteActions from '../../actions/siteActions';
import FullPageLoader from '../common/FullPageLoader.component';
import MainNavigation from './common/MainNavigation.component';
import SearchResults from './common/SearchResults.component';
import SearchJumbotron from './SearchJumbotron.component';

class CollegePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      institution: {},
      subdomain  : this.props.params.subdomain,
      site       : {},
      count      : 0
    };

    this.props.siteActions.showLoader();
  }

  componentWillMount() {
    this.props.institutionActions.getInstitution(this.state.subdomain).then(institution => {
      this.setState({
        institution: institution
      });
      this.props.siteActions.hideLoader();
    }).catch(error => {
      //handle error
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({site: nextProps.site});
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    if (this.state.site.showLoader)
      return <FullPageLoader/>;

    return (
      <div>
        <div className="container-fluid">
          <div className="row"><h3>Welcome to {this.state.institution.name}!</h3></div>
          <div className="row">
            <MainNavigation/>
          </div>
          <div className="row">
            <SearchJumbotron/>
            <SearchResults/>
          </div>
        </div>
      </div>
    );
  }
}

CollegePage.propTypes = {
  params            : PropTypes.object.isRequired,
  institutionActions: PropTypes.object.isRequired,
  siteActions       : PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    site: state.site
  };
}

function mapDispatchToProps(dispatch) {
  return {
    institutionActions: bindActionCreators(institutionActions, dispatch),
    siteActions       : bindActionCreators(siteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollegePage);