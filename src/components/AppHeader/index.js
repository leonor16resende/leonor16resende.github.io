import React, { Component } from 'react';
import Typical from 'react-typical';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class AppHeader extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper-header">
        <Typical loop={1} wrapper="h1" steps={["Hello, I'm Leonor!", 1000]} />

        <p className="description-text">
          I am a{' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={this.props.descriptions}
          />
        </p>
        <div className="wrapper-arrow">
          <a href={'#' + this.props.goTo}>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
      </div>
    );
  }
}

export default AppHeader;
