import React, { Component } from 'react';

export class FeaturesOptions extends Component {
  render() {
    const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className='feature__item'>
          <FeatureItem
            key={itemHash}
            item={item}
            feature={this.props.features[feature]}
            selected={this.props.selected[feature]}
          />
        </div>
      );
    });
  }
}

export default FeaturesOptions;