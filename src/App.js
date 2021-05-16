import React, { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello, React!
//     </div>
//   );
// }

// App.js에 쓰고 있는 코드는 유사자바스크립트이다. create-react-app이 js코드로 컨버트.

class Subject extends Component { // Subject라는 컴포넌트를 만들겠다. 
 render() { // render라는 함수가 있어야 함. 클래스 안에서는 'function' 생략
   return ( // 하나의 최상위 태그로 시작해야함
    <header> 
      <h1>WEB</h1>
      world wide web!
    </header>
   );
 }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
