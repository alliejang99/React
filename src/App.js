import React, { Component } from 'react'
import Header from './components/Header'
import NavContainer from './containers/NavCont'
import ReadContainer from './containers/ReadCont'
import ControlContainer from './containers/ControlCont'
import CreateContainer from './containers/Create'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    var article = null;
    if(this.props.mode === 'READ'){
      article = <ReadContainer />
    } else if (this.props.mode === 'WELCOME'){
      article = <ReadContainer />
    } else if (this.props.mode === 'CREATE'){
      article = <CreateContainer />
    }
    
    return (
      <div className="App">
        <Header />
        <NavContainer />
        <ControlContainer />
        {article}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      mode:state.mode
    }
  }
)(App);
