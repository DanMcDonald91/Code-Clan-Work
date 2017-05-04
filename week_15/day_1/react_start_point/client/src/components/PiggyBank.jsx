import React from 'react';

class PiggyBank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }

  }
  addToSavings(){
    this.setState({
      total: this.state.total + 1
    })


  

withdraw(){
  this.setState({
    total: this.state.total - 1
  })
}

depositAmount(amount){
  this.setState({
    total: this.state.total + amount
  })
}
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.owner}</h3>
        {this.props.owner}
        <p> Total: £ {this.state.total}</p>
        
        
        <button onClick={ () => {this.addToSavings()}} >Add £1
        </button>
        <button onClick={ () => {this.withdraw()}}>Withdraw funds</button>
        
        </div>

      )
  }
}

export default PiggyBank;