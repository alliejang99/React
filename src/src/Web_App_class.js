import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1><a href="/" onClick={function(ev){
          ev.preventDefault();
          this.props.onClick();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    )
  }
}

class Toc extends Component {
  render() {
    var list = [];
    var i = 0;
    while(i<this.props.data.length){
      var data = this.props.data[i];
      list.push(
        <li key={data.id}>
          <a href={data.id+".html"} onClick={function(id, e) {
            e.preventDefault();
            this.props.onSelect(id);
          }.bind(this, data.id)}>
            {data.title}
          </a>
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.data.title}</h2>
        {this.props.data.desc}
      </article>
    )
  }
}

class ContentCreate extends Component {
  state = {
    title: '',
    desc: ''
  }
  
  changeFormHandler(ev){
    this.setState({[ev.target.name]: ev.target.value}); // 이름의 값이 가변적으로 변경
  }

  render(){
    return(
      <article>
        <form onSubmit={function(ev){
          ev.preventDefault();
          this.props.onSubmit(this.state);
        }.bind(this)}>
          <p>
            <input 
              key ="1"
              type="text"
              placeholder="title" 
              name="title"
              value={this.state.title}
              onChange={this.changeFormHandler.bind(this)}
            ></input>
          </p>
          <p>
            <textarea 
              key ="2"
              placeholder="description"
              name="desc"
              value={this.state.desc}
              onChange={this.changeFormHandler.bind(this)}
            ></textarea>
          </p>
          <p>
            <input key ="3" type="submit"></input>
          </p>
        </form>
      </article>
    )
  }
}

class App extends Component {
  last_content_id = 3;
  state = {
    mode: 'read',
    selected_content_id: 1,
    contents: [
      {id: 1, title: 'HTML', desc: 'HTML is for Information'},
      {id: 2, title: 'CSS', desc: 'CSS is for Design'},
      {id: 3, title: 'JavaScript', desc: 'JavaScript is for Interaction'},
    ]
  }

  getSelectedContent(){
    var i = 0;
    while( i < this.state.contents.length){
      var data = this.state.contents[i];
      if(this.state.selected_content_id === data.id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContentComponent(){
    if(this.state.mode === 'read'){
      return <Content data={this.getSelectedContent()} />
    } else if (this.state.mode === 'Welcome') {
      return <Content data={{
        title: 'Welcome',
        desc: 'Hello, react'
      }}/>
    } else if(this.state.mode === 'create'){
      return <ContentCreate onSubmit={function(formData){
        console.log(formData);
        this.last_content_id = this.last_content_id + 1;
        formData.id = this.last_content_id;
        var newContents = Object.assign([], this.state.contents)
        newContents.push(formData);
        this.setState({
          contents: newContents,
          selected_content_id:this.last_content_id,
          mode: 'read'
        });
      }.bind(this)} />
    }
  }
  getControlComponent(){
    return [
      <a
        key="1"
        href="/create"
        onClick={function(ev){
          ev.preventDefault();
          this.setState({mode:'create'})
        }.bind(this)}>create</a>,
      <a 
        key="2"
        href="/update"
        onClick={function(ev){
        ev.preventDefault();
      }}>update</a>,  
      <form>
        <input
          key="3"
          placeholder="delete"
          type="button"
          href="/delete"
          value="delete"
          onChange={this.handleChange}
          onClick={function(){
            var newContents = this.state.contents.filter(function(el){
              if(el.id !== this.state.selected_content_id){
                return el;
              }
            }.bind(this))
            this.setState({
              contents: newContents,
              mode: 'Welcom'
            });
          }.bind(this)}></input>
        <div>{this.state.name}</div>
      </form> 
    ];
  }

  render() {
    return (
      <div className="App">
        <Subject onClick={function(){
          this.setState({mode: 'Welcome'});
        }.bind(this)} title="Web" sub="World wide web" />
        
        <Toc onSelect={function(id){
          this.setState({
            selected_content_id: id,
            mode: 'read'
          });
        }.bind(this)} data={this.state.contents} />
        
        {this.getControlComponent()}
        {this.getContentComponent()}
      </div>
    );
  }
}

export default App;
