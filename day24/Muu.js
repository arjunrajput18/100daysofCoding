//videpo 26 
//jab bhi aap koi bhi element insert karte ho when you insert any element we called as mounting
//aap ne insert kardiya and phir aapne component may update kardiya usse bolte hai updating jo aapka dom hai usse aapne  element ko remove kardiya usse bolte hai unmounting 



//mounting 
//The Component rendered to the DOM for the first time.This is called mounting. These Method are called in the following order when an instancr of a component is being created and inserted into the dom .
//constructor()
//static getDerviedStateFromProps() rarely case use
//render()
//componentDidMount()

//Updating 
//An update can be caused by changes to props or state.These methods are called in the following order when a component is being re-rendered
//1)static getDerivedStateFromProps() rarely case use
//2)shouldComponentUpdate() rarely case use
//3)render()
//4)getSnapshotBeforeUpdate() rarely case use
//5)componentDidUpdate()

//UnMounting
//When component removed from DOM.This is called Unmounting.below methodis called in this phase
//componentWillUnmount()


import React ,{ Component } from "react";


export default class Muu extends Component {
    constructor(props){
        super(props)
        this.state={
            qty:0,
        }
    }
    
    updateQtry=()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }
    
    
        componentDidMount(){
            console.log("component did Mount called");
        }
    

        componentDidUpdate(){
            console.log("component did update");
        }
    render(){
        return (<>
            <h1>Hii I am working</h1>
            <h2>{this.state.qty}</h2>
            <button onClick={this.updateQtry}>Updating</button>
        </>)
    }
}