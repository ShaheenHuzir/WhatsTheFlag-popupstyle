import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Popup from './popup';

class ViewBox extends React.Component{
    
    constructor(props){
         super(props)
        this.state= {
                visibility : "hidden",
                changeStyle : "blur(0)",
               
        }
        
        this.classToggle = this.classToggle.bind(this)
        this.closePopup = this.closePopup.bind(this)
    }

    classToggle(){
        this.setState({
            visibility : "visible",
            changeStyle: "blur(20px)",
        })
    }
   
   

     closePopup(){
         this.setState({
             visibility: "hidden",
            changeStyle: "blur(0px)"
         })
        }
    

    render(){
        let { moreinfo,visible,name,flag,capital,currency,UTCoffset,continent} = this.props;
        console.log(flag);
        let { visibility,changeStyle} = this.state;
        return(
        <div >    
        <div className={`container`}  id="hello">
            <div className="inputBox">
                <input type="text" id="countryname"></input>
                <button onClick={()=>{moreinfo(document.getElementById("countryname").value)}}>search</button>
            </div>
            <div style={{visibility:`${visible}`}} className="viewbox">
                <div className="viewbox_container" style={{filter:`${changeStyle}`}}>
                <div className = "viewwrap">
                <h2 className="countryname">{`${name}`}</h2>
                <img src={`${flag}`}></img>
                </div>
                <div className=".btn_container">
                <button value="read-more" className="btn" onClick={this.classToggle}   >I want more Information!</button>
            </div>
            </div>
            <div>
                <Popup visibility={visibility}  closepopup={this.closePopup}
                  capitol = {capital}
                  currenci={currency}
                  flagURL={flag}
                  timezone = {UTCoffset}
                  region = {continent}  
                />
            </div>  
        </div>
        </div>
        </div>
    )
        }
}


export default ViewBox;