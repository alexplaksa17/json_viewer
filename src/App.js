import React from 'react';
import Node from './Node';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
			data: {},
      url : '',
      input : ''
		}
  }
  componentDidUpdate(){
    console.log("hui");
    if(this.state.url){
      fetch(this.state.url)
			   .then(res => res.json())
			   .then(data =>{
				    if(data)
					       this.setState({data: data});
            });
    }
	}
  handleSubmit=(e)=>{
    console.log("lol");
    this.setState({url : this.state.input});
  }
  handleChange=(e) =>{

    this.setState({input: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <p>Insert your json url:</p>
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <button className='btn btn-info' onClick={this.handleSubmit}>Submit</button>
        <div className="view-field">
          <Node data = {this.state.data}/>
        </div>
      </div>
    );
  }
}
