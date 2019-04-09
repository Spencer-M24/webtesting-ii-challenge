
// imports modules
import React from "react";
import Strikes from "./Strikes";

import Balls from "./Balls";

import Hits from "./Hits"; 


// classes 
class Dashboard extends React.Component {

    constructor(props) {

        super(props);


    this.state = {
    
        count: 0
    
    };
  }




  
  onChangeCount(change) {
  
    this.setState({
      count: this.state.count + change
  
  
    });
 

  }


  // What seen on screen
  render() {
    
    return (
      <div>


        <Balls />

        <Strikes />
        <Hits />

      </div>

);

}
}

export default Dashboard;