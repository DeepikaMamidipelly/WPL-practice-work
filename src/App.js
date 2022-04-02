import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";




class App extends Component{

  state ={
    videos: []
  }

  componentDidMount(){
    fetch('videos.json',{
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    }).then(res => res.json())
  }
  render(){
    return(
       <div>
          <h1>Video List</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hamilton</h5>
              <h6 className="card-subtitle mb-2 text-muted">Musical Drama</h6>
              <p className="card-text">An American Musical is a sung-and-rapped-through musical by Lin-Manuel Miranda. It tells the story of American Founding Father Alexander Hamilton. Miranda said he was inspired to write the musical after reading the 2004 biography Alexander Hamilton by Ron Chernow.</p>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
