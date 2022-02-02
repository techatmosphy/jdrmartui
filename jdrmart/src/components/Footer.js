import React from 'react';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
          
        this.state = {
         message : 'this is Footer...'
           
           }
           
        }

        render() {
            return ( <div>
            Hi, This is {this.state.message}
            </div> )
        }

}