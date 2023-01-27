//video 28
//npm i axios
//// In ReactJS, Axios is external library that serves to create HTTP requests.
//Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6. It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application
import React, { Component } from "react";
import axios from "axios";

export default class AxiosMethod extends Component {
  constructor(props){
    super(props)
    this.state={
        posts:[]
    }
  }
  
//whenever you want to use thrid party data uses componentDidMount method
//after page load componentdid mount start  
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
      console.log(response.data.slice(1,5))})
    .catch(error=>{
      console.log(error);
    })
  }

    render() {
    return (
      <>
        <div>
            List Post data
        </div>
      </>
    );
  }
}
