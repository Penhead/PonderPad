import React from "react";
//var logo = require("../../img/logo.png");

const styles = {
    h6:{
       display: "inline-block",
       fontSize: "50px",
       margin: "0px",
       color: "#6ECCDA",
       fontWeight: "100" 
    },
    logo:{
        maxHeight: "45px",
        marginRight: "15px"
    },
    nav: {
        borderBottom: "3px solid #6ECCDA"
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