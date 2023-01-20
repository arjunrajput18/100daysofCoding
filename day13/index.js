//props -property jo attribute or value we pass in app.js  we used that attribute in component js that is basically props.
//They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
//Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties
// We use props in React to pass data from one component to another (from a parent component to a child component(s)). Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic.

//Step 1 - Pass in props as an argument

//function Tool(props){}

//Step 2 - Declare props variable(s)

// const name = props.name;
// const tool = props.tool;

//As you can see above, these variables are different from regular variables because the data in them has to do with props.

//If you do not want to create variables for your props, you can go ahead and pass them directly into your template like this: <h1> My name is {props.name} </h1>

// Step 3 - Use variable(s) in JSX template
// return (
//     <div>
//     <h1>My name is {name}.</h1>
//     <p>My favorite design tool is {tool}.</p>
//   </div>
// );

//Step 4 - Pass data to props in the App component

// import Tool from "./Tool"

// function App() {
//   return (
//     <div className="App">
//       <Tool name="Ihechikara" tool="Figma"/>
//     </div>
//   )
// }

// export default App


//How to use props with destructuring

//function Tool({name, tool}) {
  
// return (
//     <div>
//       <h1>My name is {name}.</h1>
//       <p>My favorite design tool is {tool}.</p>
//     </div>
//   );
// }

// export default Tool

// //How to set default values for props


//Just at the end of the code before the component was exported, we declared default values for our props. To do that, we started with the component's name and a dot/period connecting it with defaultProps which is built in when you create a React app.
//Now, wherever we import this component, those values will be the initial values instead of being blank. When you pass in data to the child component like we did in previous sections, it overrides the default values.

// function Tool({name, tool}) {

//     return (
//       <div>
//         <h1>My name is {name}.</h1>
//         <p>My favorite design tool is {tool}.</p>
//       </div>
//     );

//   }
  
//   Tool.defaultProps = {
//     name: "Designer",
//     tool: "Adobe XD"
//   }
// export default Tool

//---------app.js there is some tags
//{props.children}



//****props are immutable means cannot change value */




//ref https://www.freecodecamp.org/news/how-to-use-props-in-react/


//class component props we dont need to pass props in parameter.

//props & state.

//props
// props get passed to the component 
//props are immutable
//props -functional component.
//this.props -class component.

// state 
// state is managed with in the component
//state can be changed
//useSate hook ->functional components
//this.state - class component


example


import './App.css';
import React from "react";
import Header from './Header';
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
//    this.extraclick=this.extraclick.bind(this);
//     this.newclick=this.newclick.bind(this)
//   }

//   handleClick() {
//     console.log('Click happened');
//   }

//   extraclick(){
//     console.log("extra click");
//   }


//   newclick(){
//     console.log("new click me");
//   }
//   render() {
//     return (<><button onClick={this.handleClick}>Click Me</button>
//     <button onClick={this.extraclick}>Click Me</button>
//     <button onClick={this.newclick}>new click me</button>
//     </>);
//   }
// }
// export default App;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
   this.extraclick=this.extraclick.bind(this);
    this.newclick=this.newclick.bind(this)
  }

  handleClick() {
    console.log('Click happened');
  }

  extraclick(){
    console.log("extra click");
  }


  newclick(){
    console.log("new click me");
  }
  render() {
    return (<>
    <Header name="Arjun">
      <p>abc</p>
      <h1>abcd</h1>
    </Header>
    </>);
  }
}
export default App;




// import React from 'react';

// function Header({name}) {
//     return (
//         <div>
//            <h1>hello functional component {name}</h1> 
//         </div>
//     );
// }

// export default Header;

// import React from 'react';

// function Header(props) {
//     return (
//         <div>
//            <h1>hello functional component {props.name}</h1> 
//         </div>
//     );
// }

// export default Header;

// import React from 'react';

// function Header({name}) {
//     return (
//         <div>
//            <h1>hello functional component {name}</h1> 
           
//         </div>
//     );
// }

// export default Header;

// import React from 'react';

// function Header(props) {
//     return (
//         <div>
//            <h1>hello functional component {props.name}</h1> 
//         {props.children}
//         </div>
//     );
// }

// export default Header;


import React from 'react';

function Header(props) {
    return (
        <div>
           <h1>hello functional component {props.name}</h1> 
        </div>
    );
}



Header.defaultProps={
    name:'mahesh'
}
export default Header;