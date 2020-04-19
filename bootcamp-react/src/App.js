import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Community from './components/Community.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      night: false
    }
  }

  getTheme = (night) => {
    if(night){
      return {
        type: 'Night',
        background: '#222244',
        foreground: '#ddddff'
      }
    } else {
      return {
        type: 'Day',
        background: '#eeeeff',
        foreground: '#222244'
      }
    }
  }

  changeTheme = () => {
    this.setState({night: !this.state.night});
  }

  render() {
    let theme = this.getTheme(this.state.night);
    let commonStyle = {display: 'flex', flex: 1, width: '100%', height:'100%', backgroundColor: theme.background, justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirecton: 'column'};
    return (
      <Router>
        <div style={commonStyle}>
          <Route
            path=''
            render={(props) => <Home {...props} theme={theme} changeTheme={this.changeTheme} />}
          />
          <Route
            path='/community'
            render={(props) => <Community {...props} theme={theme} style={commonStyle} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
