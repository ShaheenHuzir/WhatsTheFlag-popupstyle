import React from 'react';
import './App.css'


function Popup(props){
    let { visibility,closepopup,capitol,currenci,timezone,region,flagURL } = props;
    return(
        <div className="popup_container" style={{visibility:`${visibility}`}}>
            <div className="popup_wrap">
            <div>
            <img className="popup_image" src={`${flagURL}`}></img>
            </div>
            <div>
                <h2></h2>
                <ul>
                    <li>Capital:{`${capitol}`}</li>
                    <li>Region:{`${region}`}</li>
                    <li>Timezone:{`${timezone}`}</li>
                    <li>Currency:{`${currenci}`}</li>
                </ul>
                
            </div>
            <div>
                <button className="close_button" onClick={closepopup}>&#x274C;</button>
            </div>
            </div>
        </div>
    )
}



export default Popup;