import React from 'react';


export default class Header extends React.Component {

    constructor(props) {
        super(props);
          
        this.state = {
         message : 'this is HEader...'
           
           }
           
        }

        render() {
            return ( <div>
            Hi, This is {this.state.message}
            </div> )
        }

}