import React from 'react';
import Category from './Category';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
          
        this.state = {
         message : 'this is Dashboard page...'
           
           }
           
        }

        render() {
            return ( <div>
            Hi, This is {this.state.message}
            <Category/>
            </div> )
        }

}