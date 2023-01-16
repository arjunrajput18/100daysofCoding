//video 1 suneja React.
//what is react js?
//reactjs is a javascript library for building user interfaces.
//component based approach & reusable.
//declarative approach.

//what is difference between framework and library?
//a framework as a collection of libraries.Faster programming, support from the community, great support for MVC (Model View Controller) pattern, etc.
//framework Developing a framework requires a lot of coding, which increases loading times and decreases performance.
//Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc.
//In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code.
//Frameworks can be used for performing a wide range of tasks. Among these are Web application systems, plug-in managers, GUI systems, and so on.
//----------
// Libraries provide developers with predefined functions and classes to make their work easier and boost the development process.	Good code quality, reusability, and control, enhanced speed and performance of the program, etc.
//libraries Less code is required to build libraries, which leads to faster loading times and better performance.
//Generally, libraries are a collection of helper modules, objects, classes, functions, message templates, pre-written code, etc
//By using a library, you can control the flow of the application and call the library.
//The purpose of libraries is to perform a defined and specific task. Eg: Image manipulation, network protocols, math operations, etc

//foundation upon which developers build applications for specific platforms.
//In general, libraries tell you what to do and frameworks let you know what to do.

//JavaScript libraries differ from frameworks in that they contain prewritten code snippets that can be used (and reused) for common JavaScript functions. Unlike JavaScript libraries, JavaScript frameworks are a full toolkit for shaping and organizing your web application. Frameworks describe how developers design applications.

//video 2 react js suneja
//NPM and Yarn are package managers that help to manage a project’s dependencies.A dependency is, as it sounds, something that a project depends on, a piece of code that is required to make the project work properly
//npm: It is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.Npm is a tool that use to install packages.
//yarn: It stands for Yet Another Resource Negotiator and it is a package manager just like npm. It was developed by Facebook and is now open-source. The intention behind developing yarn(at that time) was to fix performance and security concerns with npm.
//NPX:  Npx is a tool that use to execute packages without installing it on your computer.The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package. The npx is useful during a single time use package. If you have installed npm below 5.2.0 then npx is not installed in your system.
//npm vs npx
//What is difference between npm and NPX?
// The command npm is used to download JavaScript packages from Node Package Manager, and npx is used to execute JavaScript packages downloaded this way.
//The major difference between NPM and Yarn comes in terms of security performance. While NPM installs packages sequentially, Yarn performs parallel installation resulting in better speed and performance. NPM has tried to fix vulnerabilities, but still, Yarn is considered more secure than NPM.

//node runtime environment provide karta hai .vhahee js code execute karte hai.

//npm install -g create-react-app
//create-react-app reactproject

//npx create-react-app reactproject

//video 3
//DOM vs Virtual DOM vs Shadow DOM

//DOM :Document object model
//model is basically your complete html document.

//Document -html Document
//object -element like h1, head ,body
//model- complete Document
//it models the entire html document in an object and thus to access those properties we use method like document.querySelector()

var newelement = document.createElement("h2");
newelement.textContent = "Hello, I am H2 Tag";
document.querySelector("body").appendChild(newelement);

//The shortest example of Virtual DOM is ‘The Lightweight And Simplest React’s Copy Of HTML DOM.’
//Virtual DOM, also known as ‘Virtual DOM in React,’ is never developed by React but used by it. Virtual DOM is another copy of the DOM stored inside your browser data. This is the lightweight copy of your DOM, which is actually accessed and manipulated by you. As a result, you don’t have to render the original DOM again, which also boosts UI libraries' performance.
//virtual dom is replica of existing dom . jo aapka original dom hai uski vho copy hai.
//In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy.
//A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.
//How it helps
//When you render a JSX element, every single virtual DOM object gets updated.
// This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.

//Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

// By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”

// Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. In our example from earlier, React would be smart enough to rebuild your one checked-off list-item, and leave the rest of your list alone.

// This makes a big difference! React can update only the necessary parts of the DOM.

//:ref-  https://www.geeksforgeeks.org/what-is-the-difference-between-shadowdom-and-virtualdom/
//Virtual DOM:

// Virtual DOM, in simple terms, is nothing but the complete and full representation of an actual DOM.
// Since any changes to the DOM causes the page to re-render more often than not, Virtual DOM primarily attempts to avoid any unnecessary and expensive changes to the DOM.
// This is achieved by grouping changes and doing a single re-render instead of several small ones.
// A copy of the DOM is saved in the memory and is used to compare any changes being done anywhere in the DOM, it’s compared to find differences. Thus, only those parts of the application are re-rendered which are updated instead of re-rendering the entire DOM.
// VueJS and ReactJS both use Virtual DOM.

//shadow dom :It revolves around the concept of encapsulation.
//Encapsulation is defined as the wrapping up of data under a single unit.
// It is the mechanism that binds together code and the data it manipulates.

//In the Shadow DOM, all the elements are connected to the Shadow Root and Shadow HOST.

/// both Virtual DOM and Shadow DOM improve performance for further manipulation processes.

//In short, the shadow DOM is a browser technology whose main objective is to provide encapsulation when creating elements. On the other hand, the virtual DOM is managed by JavaScript libraries—e.g., React—and it’s mostly a strategy to optimize performance.

//video 4
//difference between package-lock.json vs package.json
//package.json is a versioning file used to install multiple packages in your project. //npm init

// a package.json file contains metadata about the project and also the functional dependencies that is required by the application.

// But the question is why package.lock.json is necessary when you have package.json in your project application. package.lock.json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json.

//Let’s say if the current version of the package is 1.3.2 then it will save the version with (^) sign. Here carot(^) means, it will support any higher version with major version 1 for eg. 1.2.2.

// Without package.lock.json, there might be some differences in installed versions in different environments. To overcome this problem, package.lock.json is created to have the same results in every environment. It should be in source control with the package.json file because if any other user will clone the project and install dependencies then it will install the exact same dependencies as in package.lock.json to avoid differences.

// package.json
// package-lock.json

// package.json contains basic information about the project.	package.lock.json describes the exact tree that was generated to allow subsequent installs to have the identical tree.
// package.json is mandatory for every project.	package.lock.json is automatically generated for those operations where npm modifies either node_modules tree or package.json.
// package.json records important metadata about the project.	package.lock.json allows future devs to install the same dependencies in the project.
// package.json contains information such as name, description, author, script, and dependencies.	package.lock.json contains the name, dependencies, and locked version of the project.


//node_modules :- it contain the dependency which will require in project.

//public->index.html <div id="root"></div>

//src->index.js-> ReactDOM.render (<App/>, document.getElementById("root"))


//video 5 jsx is a js extension 
//with jsx
//import './App.css'
//const name=<span>Hello React </span>;
//function App(){
//     return (
//         <div className="App">
//             <h1>Hello Arjun Rajput ,{name}</h1>
//         </div>
//     )
// }
//output : Hello Arjun Rajput ,Hello React

//without jsx
//const newElement=React.createElement('h2',{className:'newElement'},'Hello H2 tag')
////function App(){
//     return (
//         <div className="App">
//             <h1>Hello Arjun Rajput ,{name}</h1>
//               {newElement}
//         </div>
//     )
// 



//const age=(a)=>{
//     if(a>18){
//         return <span> you are elegible</span>
//     }else{
//         return <span> you are not elegible</span>
//     }
// }
//function App(){
//     return (
//         <div className="App">
//             <h1>Hello Arjun Rajput ,{name}</h1>
//               {newElement}
//              <button onClick={test}></button>
//              {age(19)}
//         </div>
//     )
// 