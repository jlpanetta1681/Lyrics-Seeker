import React, { Component } from 'react';
const Context = React.createContext();

export class Provider extends Component {
   state = {
       track_list: [
           { track: { track_name:'abc'}},
           { track: { track_name:'123'}}
       ],
       heading: 'Top ten tracks'
   };


  render() {
      return (
       <Context.Provider>
           {this.props.children}
       </Context.Provider>

    ) 
  }
}
export const consumer = Context.Consumer;