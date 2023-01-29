//video 29
//map function
//react js is javascript libraryhere we only builds view i.e pages, here there is no concept like model and controller here we want to use api react js doesnt provide internally library. we want to import external library.
//ek client hota hai ek server hota hai  ab react kya hai react kya samjta hai uske liye data kya hai ek tho props hoga and nhi tho state hoga . react ka syntax hee is taarh se design hai data aah raha yeah vho props may aayega  yea phir hum state may set karwadenge  yeah tho hum use empty kardenge react khali yeah samjta hai

//always put axios componentDidMount() method. then it will work
//data display for that used state

import React, { Component } from "react";
import axios from "axios";
// import userEvent from "@testing-library/user-event";
export default class AxiosMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error:''
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => this.setState({ posts: resp.data }))
      .catch(error=>{
        this.setState({error :"URL Error"})
        console.log(error)
      })
  }

  render() {
    const { posts,error } = this.state; //whatever we pass in constructor you have to pass here

    return (
      <div>
        {posts.length ?
          posts.map(post => 
          <div key={post.id}>{post.name}</div>):null
        }
        {
          error ? <div>{error}</div>:null
        }
        <h1>Hi i am Working</h1>
      </div>
    );
  }
}
