import React, {PropTypes} from 'react';
import Header from './common/Header.component';

<<<<<<< HEAD
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
=======
class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
>>>>>>> c9df4a5d043fc9ca5d04883fc0f347a21621c544
};

export default App;