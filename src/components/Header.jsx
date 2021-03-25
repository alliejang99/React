import React, { Component } from 'react'
import {connect} from 'react-redux'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <a href="#welcome"
            onClick={()=>{
              this.props.onClick();
            }}
          >WEB</a>
        </h1>
        World wide web
      </header>
    )
  }
}

export default connect(
  null, 
  (dispatch)=>{
    return {
      onClick: () => {
        dispatch({type: 'WELCOME'});
      }
    }
  }
)(Header);