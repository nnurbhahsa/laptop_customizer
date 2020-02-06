import React, { Component } from 'react';

export class Summary extends Component {
  render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const selectedOption = this.props.selected[feature];
      console.log(summary);

      return (
        <div className='summary__option' key={this.props.featureHash}>
          <div className='summary__option__label'>{this.props.feature} </div>
          <div className='summary__option__value'>{selectedOption.name}</div>
          <div className='summary__option__cost'>
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
    return <>{summary}</>;
  }
}

export default Summary;