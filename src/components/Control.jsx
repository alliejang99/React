import React, { Component } from 'react'

export default class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a 
            href="create"
            onClick={(e)=>{
              e.preventDefault();
              this.props.onClick('CREATE'); // mode 이름
            }}
          >create</a>
        </li>
        <li>
          <a 
            href="update"
            onClick={(e)=>{
              e.preventDefault();
              this.props.onClick('UPDATE'); // mode 이름
            }}
          >update</a>
        </li>
        <li>
          <input type="button" value="delete"
            onClick={(e)=>{
              e.preventDefault();
              this.props.onClick('DELETE'); // mode 이름
            }}
          />
        </li>
      </ul>
    )
  }
}
