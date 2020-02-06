import React, { Component } from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';

class Features extends Component {
  render() {
    console.log(this.props);
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItem
            featureName={item}
            itemHash={itemHash}
            item={item}
            feature={feature}
            updateFeature={this.props.updateFeature}
          />
        );
      });

      //feture
      return (
        <fieldset className='feature' key={idx}>
          <legend className='feature__name'>
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    //Feature
    return <>{features}</>;
  }
}

export default Features;