import React from "react";


export default class Billing extends React.Component {

    constructor(props){
        super(props);
       this.state = {
         message: "billing page"
        }
    }

    render(){
        return(
            <div>{this.state.message}</div>
        )
    }
}