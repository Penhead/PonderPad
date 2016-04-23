import React from "react";


const styles = {
    all: {
        fontFamily: "sans-serif",
        padding: "30px"
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
        console.log(this.state);
        return (
            <div style={styles.all}>
                <h1 style={styles.h1}>PonderPad</h1>
                <div>
                    
                </div>                
                
            </div>
        )
    }    
}