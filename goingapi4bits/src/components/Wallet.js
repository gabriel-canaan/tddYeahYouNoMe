import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Wallet extends Component {
  constructor() {
    super()
      this.State = { balance: undefined }
  }

updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10)
})

  render() {
    return (
      <div>
        <h3 className='balance'>How much in your skyrocket!: {this.props.balance}</h3>
        <br />
        <input className='input-wallet' onChange={this.updateBalance} />
      </div>
    )
  }
}
export default connect(state => { return {balance: state} }, null)(Wallet)
