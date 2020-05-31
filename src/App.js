import React,{Component} from 'react';
import Login from './component/login/login';
import Register from './component/login/register';
import "./component/login/style.scss";
import "./App.scss";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLogginActive:true,
    }
  }
   changeState(){
     const {isLogginActive}=this.state;
     if(isLogginActive){
       this.rightSide.classList.remove("right");
       this.rightSide.classList.add("left");

     }
     else{
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
     }
     this.setState(prevState=>({isLogginActive :!prevState.isLogginActive}));
  }
  render(){
    const {isLogginActive}=this.state;
    const current= isLogginActive?"Resigter":"Login";
    const  currentActive=isLogginActive?"login" :"register";
    return (
      <div className="App">
        <div className="login">
           <div className="container">
           { isLogginActive && <Login containerRef={(ref)=>this.current=ref}/> }
           {! isLogginActive && <Register  containerRef={(ref)=>this.current=ref}/> }
           
           </div>
           <RightSide current={current} containerRef={ref=>this.rightSide=ref} onClick={this.changeState.bind(this)}/>
          
        </div>
         
      </div>
    );
  }
  
}
const RightSide= props=>{
    return  <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
               <div className="inner-container">
                 <div className="text">{props.current} </div>
               </div>
            </div>
}

export default App;
