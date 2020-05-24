import React from 'react';
import ReactDOM from 'react-dom';
import ViewBox from './viewbox';
import axios from 'axios';
import './App.css'



class Content extends React.Component {

    constructor(props){

        super(props);

        this.state = {
                viewContent : "",
                countryname : "",
                flag : "",
                region:"",
                capital: "",
                timezone:"",
                currency : "",
                visiblity:"hidden",
}

        this.moreInfo = this.moreInfo.bind(this)
    }
    
    //handler for search
    moreInfo = async (input)=>{
            console.log(input);
        let data = await fetch(`https://restcountries.eu/rest/v2/name/${input}`)
        .then(response=>(response.json()))
        .then(data=>data)
        .catch(error=>console.log("sorry",error))
         let country = data.pop();
         this.setState({
            visiblity:"visible", 
            countryname :country.name,
            flag:country.flag,
            capital :country.capital,
            currency:country.currencies[0].code,
            region:country.region,
            timezone:country.timezones[0]
            
        });        
    }
    
    render(){
        let {visiblity,countryname,capital,flag,currency,region,timezone} = this.state
        return(
            <div>
            
            <ViewBox visible={visiblity}
            name={countryname}
            flag={flag}
            capital={capital}
            currency={currency}
            continent={region}
            UTCoffset={timezone}
            moreinfo={this.moreInfo} />
            </div>
        )
    }

}

export default Content;