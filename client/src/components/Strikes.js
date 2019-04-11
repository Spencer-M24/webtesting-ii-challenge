// Import moduels simliar to node

import React from 'react';


// Classes
class Strikes extends React.Component {
    constructor(props) {
      super(props);



      this.state = {
      
        count: 0
      };
    }

    // On Cchange

    onChangeCount(change) {
      
      
        this.setState({
        
        count: this.state.count + change
    
        
    });
     
    }


    /// What you seen on Screen
    render() {
      
        return (
        
        <div>
          
          <button onClick={ this.onChangeCount.bind(this, 1) }style={{padding: "25px"}}>+</button>
          
          <h2>{ this.state.count }</h2>
          
          
       
          <h1>Strikes</h1>
       
        </div>
      );
    }
  }


  /// Out put
        export default Strikes; 