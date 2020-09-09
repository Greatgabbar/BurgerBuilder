import React, { Component } from 'react'
import Aux from '../HOC/Aux/Aux'
import Header from '../Header/Header';
import classes from './Layout.module.css'
import Sidedrawer from '../Header/Sidedrawer/Sidedrawer';

class Layout extends Component{
  state={
    action:false
  }
  clickhandle=()=>{
    this.setState({action:false});
  }

  toggle=()=>{
    this.setState((prevState)=>{
      return{
        action : !prevState.action
      }
    })
  }
  
  render(){
    return(
      <Aux>
        <Header toggle={this.toggle} />
        <Sidedrawer closed={this.clickhandle} open={this.state.action} />
        <div className={classes.Content}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Layout;