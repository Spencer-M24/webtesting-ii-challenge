import React from "react";

class Balls extends React.Component {
    
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

    render() {
        return (
            <div>
            
                <button
                    onClick={this.onChangeCount.bind(this, 1)}
            
                    
            
            >
            
                    +
            
                </button>
            
                <h2>{this.state.count}</h2>
            
                <h1>Balls</h1>
            
            </div>
        );

    }

}


export default Balls;
