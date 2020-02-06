import React, { Component } from 'react';
import Features from '../Features/Features';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';

class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <main>
        <form className='main__form'>
          <h2>Customize your laptop</h2>
          <div className='Features'></div>
          <Features
            features={this.props.features}
            updateFeature={this.props.updateFeature}
          />
        </form>
        <section className='main__summary'>
          <h2>Your cart</h2>
          <Summary selected={this.props.selected} />
          <Total total={this.props.total} />
        </section>
      </main>
    );
  }
}

export default Main;