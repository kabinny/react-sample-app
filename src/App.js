import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

// App.js에 쓰고 있는 코드는 유사자바스크립트이다. create-react-app이 js코드로 컨버트.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: {title: 'WEB', sub: 'world wide web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'},
      ]
    }
  } // render 함수 전에 먼저 실행하고 싶은거는 여기에...초기화 담당
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}></Subject> */}
        <header> 
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault(); // a tag의 기본 동작 막는다.
            // this.state.mode = 'welcome'; 
            // 윗 줄은 문제가 있다. this가 자신을 가리키도록 끝에 .bind(this)를 추가한다.(그러지 않으면 undefind) 그리고 state변경을 리액트가 알 수 있게 setState를 사용한다. 
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
