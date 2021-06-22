import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import './App.css';

// App.js에 쓰고 있는 코드는 유사자바스크립트이다. create-react-app이 js코드로 컨버트.

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3; // 마지막 컨텐트
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'world wide web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'},
      ]
    }
  } // render 함수 전에 먼저 실행하고 싶은거는 여기에...초기화 담당
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
          break;
        }
        i = i + 1;
      }
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // setState로 새로운 content값 추가 add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        ) // push는 원본 배열을 수정하기 때문에 나중을 위해 concat를 이용하자

        // // push를 쓰려면 배열을 복제해서 쓰자!
        // var newContents = Array.from(this.state.contents);
        // newContents.push({id: this.max_content_id, title: _title, desc: _desc});

        this.setState({
          contents: _contents
        })
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>;
    } else if(this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;

        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        ) 
        this.setState({
          contents: _contents
        })
        console.log(_title, _desc);
      }.bind(this)}></UpdateContent>;
    }
    return _article;
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
          >
        </Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
