import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as institutionActions from '../../../actions/institutionActions';
import * as siteActions from '../../../actions/siteActions';
import SearchResultsList from './SearchResultsList.component';

class SearchResults extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return(
      <div className="container-fluid search-results">
        <div className="row filter-bar">[Filters]</div>
        <div className="row">
          <SearchResultsList/>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

