import React, { Component } from 'react'

export default class Create extends Component {
  render() {
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();
        this.props.onSubmit(
          e.target.title.value, // title
          e.target.desc.value // name
        );
      }}>
        <p><input 
            type="text"
            name="title"
            placeholder="title"
            
          /></p>
        <p><textarea 
            type="text"
            name="desc"
            placeholder="description"
          /></p>
        <p><input value="Submit" type="submit"></input></p>
      </form>
    )
  }
}
