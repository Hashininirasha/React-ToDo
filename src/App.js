import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listitem from './Listitem';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
      
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  render(){
    return(
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
            />
            <button type="button" class="btn btn-warning">Add</button>
          </form>
        </header>
        <Listitem items={this.state.items}></Listitem>
        </div>
    );
  }
}

export default App;
