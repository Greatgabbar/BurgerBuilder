import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../BurgerBuilder/Modal/Modal';


const ErrHandle = (WrappedComp,axios)=>{
  return class extends Component{
   state={
     error: null 
   }
   
    componentWillMount(){
    axios.interceptors.request.use(req=>{
      this.setState({error : null});
      return req;
    });

    axios.interceptors.response.use(res=>res,err=>{
      console.log(err);
      this.setState({error : err.message});
    })

   }
   
   handleClick=()=>{
     this.setState({error : null});
   }

    render(){
      return(
        <Aux>
      <Modal click={this.handleClick} show={this.state.error}>
        {this.state.error ? this.state.error : null}
      </Modal>
      <WrappedComp {...this.props} />
    </Aux>
      )
    }
  }
}

export default ErrHandle;