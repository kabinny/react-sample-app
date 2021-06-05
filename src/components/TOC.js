import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC render');
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      // 여러 요소를 자동으로 생성할 때는 고유의 key값이 있어야 한다. 리액트가 필요로 하는 것이니 그러려니 한다. 
      lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
      i = i + 1;
    } 
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;