import React, { Component } from 'react';
import TopbarControl from './TopbarControl';
import Problem from './Problem';
import Solution from './Solution';

class Landing extends Component {
  problemSection = React.createRef();

  scrollToProblemSection = () => {
    window.scrollTo({
      top: this.problemSection.current.offsetTop,
      behavior: 'smooth'
    });
  };
  render() {
    return (
      <div>
        <TopbarControl />
        <Title scroll={this.scrollToProblemSection} />
        <Problem refProp={this.problemSection} />
        <Solution />
      </div>
    );
  }
}

export default Landing;
