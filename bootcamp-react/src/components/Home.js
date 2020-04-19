import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class TPButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let btStyle = {margin: 10, width: '90%'}
    let btContainerStyle = {
      borderStyle: 'solid', borderRadius: 10, padding: 10, fontWeight: 'bold', flex: 1, margin: 20,
      borderColor: this.props.theme.foreground
    }

    return (
      <div style={btContainerStyle}>
        <Button onClick={this.props.onClick} variant={this.props.theme.type == 'Day' ? 'dark' : 'light'} style={btStyle} size="large">
          {this.props.title}
        </Button>
      </div>
    );
  }
}

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      mainText: "Welcome to the tutorial",
      redirect: ''
    }
  }

  changeTitle = () => {
    let newText = this.state.mainText + "!"
    this.setState({mainText: newText})
  }

  redirectTo = (destination) => {
    this.setState({redirect: destination})
  }

  render() {
    let containerStyle = {
      borderStyle: 'solid', borderRadius: 10, padding: 10, fontWeight: 'bold', flex: 1,
      color: this.props.theme.foreground
    }
    if (this.state.redirect) {
      return <Redirect push to={"/"+this.state.redirect} />;
    }
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '70%'}}>
          <h2 style={containerStyle}>
            {this.state.mainText}
          </h2>
        </div>
        <div style={{flex: 1, display: 'flex', width: '70%', justifyContent: 'space-around'}}>
          <TPButton theme={this.props.theme} onClick={() => this.redirectTo("community")} title={"Community"}/>
          <TPButton theme={this.props.theme} onClick={this.changeTitle} title={"Change Title"}/>
          <TPButton theme={this.props.theme} onClick={this.props.changeTheme} title={this.props.theme.type}/>
        </div>
      </div>
    );
  }
}

export default Home;
