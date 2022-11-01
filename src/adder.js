import React from "react";
import img from "./image.png"
import img2 from "./Delete.png"

class Selecter extends React.Component{
    constructor(){
        super()
        this.state={
            quantity:0,
            price:119
    }
        
    }
    render(){
     let plus=()=>{
        this.setState({quantity:this.state.quantity+1})
     }
     let minus=()=>{
        this.setState({quantity:this.state.quantity-1})
     }
     
        return(
        <div className="wrapper">
        <div className="img1"><img src={img}></img></div>
        <div className="descrip"><p className="par2">Barberton Daisy</p>{this.props.desc}<p className="par">{this.props.par}</p></div>
        <div className="price"><h3>{this.props.price}</h3></div>
        <div className="quan">
           <button className="button" onClick={minus}>-</button>
          <h3>{this.state.quantity}</h3>
         <button className="button" onClick={plus}>+</button>
        </div>
        <div className="total"><h3 className="green">{"$"+this.state.price*this.state.quantity}</h3></div>
        <div className="delete" ><img src={img2}></img></div>
        </div>
        )
    }
}
export {Selecter}