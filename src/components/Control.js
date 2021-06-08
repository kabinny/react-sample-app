import React, { Component } from 'react';

class Control extends Component { // Subject라는 컴포넌트를 만들겠다. 
  render() { // render라는 함수가 있어야 함. 클래스 안에서는 'function' 생략
    console.log('Subject render');
    return ( // 하나의 최상위 태그로 시작해야함
      <ul>
        <li><a href="/create" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
        <li><a href="/update" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
        <li><input onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)} type="button" value="delete"></input></li>
      </ul>
    );
  }
 }

 export default Control;