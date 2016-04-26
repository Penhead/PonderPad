import React from "react";
import NavComp from "./Nav.js"

const styles = {
    all: {
        fontFamily: "'Montserrat', sans-serif",
    },
    h1: {
        fontSize: "150px",
    },
    person:{
        borderBottom: "1px solid black",
        width: "300px",
        float: "left",
        padding: "15px 0"
    },
    input:{
        height: "50px",
        width: "350px",
        fontSize: "25px",
        fontWeight: "bold",
        border: "orangered 1px solid",
        borderRadius: "4px",
        paddingLeft: "15px"
          
    }
}
export default class MainComponent extends React.Component{
    constructor(){
        super();

    }
    
    render(){
        return (
            <div style={styles.all}>
                <NavComp/>
                
                <div>
                    
                </div>                
            </div>
        )
    }    
}