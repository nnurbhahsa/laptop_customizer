import React, { Component } from 'react';
import slugify from 'slugify';

export class FeatureItem extends Component {
  render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return (
      <div key={this.props.idx} className='feature__item'>
        <input
          type='radio'
          id={this.props.itemHash}
          className='feature__option'
          name={slugify(this.props.itemHash)}
          checked={this.props.item.name === this.props.featureName}
          onChange={e =>
            this.props.updateFeature(this.props.feature, this.props.item)
          }
        />
        <label htmlFor={this.props.itemHash} className='feature__label'>
          {this.props.item.name} (
          {USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureItem;