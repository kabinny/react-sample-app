import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    console.log(this.props.data);
    console.log('UpdateContent render');
    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            // debugger;
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title}
              // onChange를 쓰지 않고, props값을 직접 넣으면 readonly 상태가 된다.
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea 
              // 지금 쓰고 있는 것이 유사html임을 유의하자. 리액트님 알아듣게 쓰자.
              onChange={this.inputFormHandler}
              name="desc" 
              placeholder="description" 
              value={this.state.desc}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;