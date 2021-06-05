import React, { Component } from 'react';

class Subject extends Component { // Subject라는 컴포넌트를 만들겠다. 
  render() { // render라는 함수가 있어야 함. 클래스 안에서는 'function' 생략
    console.log('Subject render');
    return ( // 하나의 최상위 태그로 시작해야함
     <header> 
       <h1><a href="/">{this.props.title}</a></h1>
       {this.props.sub}
     </header>
    );
  }
 }

 export default Subject;