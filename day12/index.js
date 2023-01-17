//video 6 , 7 & 8
//what is react component?
//react component let you break up the user interface into separate pieces that can then be reused and handled independently.

//e.g header footer sidebar search method and etc are all called component we can used many times.
//reused
//we can used one component into another component also.

//two types of component :-functional component and second is class component.
//functional component also called stateless component after 16.8 version we can also used state in functional component
//class component also called stateful component.
//------------------------------------------------------
//Functional components:-
//1) Functional components are basic javascript functions.These are typically arrow function but can also be created with regular function keyword.

//2)React lifecycle method (for example ,componentDidMount) cannot be used in functional components.

//3)There is no render method used in functional components.

//4)These are mainly responsible for UI design and are typically presentational only(for example , a button component).

//5)functional component can accept and use props.
//props accessing attribute name and all basically it is property.

//6)functional components should be favored if you do not need to make use of React state.

//7)Functional component run from top to bottom and once the function is returned it cant be kept alive.

//eg  function App(){
//     return (
//         <></>
//     )
// }

//Class component

//1) class component make use of ES6 class and extend the component class in react.

//2)sometimes called "smart" or "stateful" components as they tends to implement logic and state.

//3)React lifecycle methods can be used inside class component example ,componentDidMount.

//4)you pass props down to class components and access that with this.props

//5)Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.

//example:
//class App extends React.component {
// render(){
// return <h1>Hello, class Component</h1>
//}
// }

//Differences between Functional Components and Class Components in React

//import React, { useState } from "react";
 
// const FunctionalComponent=()=>{
//     const [count, setCount] = useState(0);
 
//     const increase = () => {
//         setCount(count+1);
//     }
 
//     return (
//         <div style={{margin:'50px'}}>
//             <h1>Welcome to Geeks for Geeks </h1>
//             <h3>Counter App using Functional Component : </h3>
//           <h2>{count}</h2>
//             <button onClick={increase}>Add</button>
//         </div>
//     )
// } 
 
//---------------------
// import './App.css';
// import React from "react";

// class App extends React.Component{
//   constructor(){
//       super();
//       this.state={
//           count :0
//       };
//       this.increase=this.increase.bind(this);
//   }
   
//  increase(){
//      this.setState({count : this.state.count +1});
//  }

//   render(){
//       return (
//           <div style={{margin:'50px'}}>
//              <h1>Welcome to Geeks for Geeks </h1>
//              <h3>Counter App using Class Component : </h3>
//              <h2> {this.state.count}</h2> 
//              <button onClick={this.increase}> Add</button>

//           </div>
//       )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.extraclick=this.extraclick.bind(this)
//   }

//   handleClick() {
//     console.log('Click happened');
//   }

//   extraclick(){
//     console.log("extra click");
//   }

//   render() {
//     return (<><button onClick={this.handleClick}>Click Me</button>
//     <button onClick={this.extraclick}>Click Me</button>
//     </>);
//   }
// }
// export default App;



//class maintain their own private data -state


