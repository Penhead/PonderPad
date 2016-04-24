import React from "react";
//var logo = require("../../img/logo.png");

const styles = {
    h6:{
       display: "inline-block",
       fontSize: "40px",
       verticalAlign: "top",
       margin: "0px",
       color: "#8BC34A",
       fontWeight: "100" 
    },
    logo:{
        maxHeight: "45px",
        marginRight: "15px"
    },
    nav: {
        borderBottom: "5px solid #8BC34A"
    }
    
}
export default class NavComp extends React.Component{
    constructor(){
        super();

    }
    
    render(){
        console.log(this.state);
        return (
            <div>
                <div style={styles.nav}>
                    <img style={styles.logo} src="../../img/logo.png" />
                    <h6 style={styles.h6}>PonderPad</h6>
                </div>
                <div>
                    
                </div>                
                
            </div>
        )
    }    
}