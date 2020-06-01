import React, { Component } from 'react';
import profile from '../../images/profile.jpg';
import './style.css';
import Map from './Map';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.interests = props.interests.join(' • ');
  }

  render() {
    return (
      <div id="about" className="wrapper-about-me">
        <h2>About Me</h2>
        <div className="profile-wrapper">
          <div className="profile-image">
            <img id="profile-image" src={profile} alt="Profile" />
          </div>
          <h3>
            <strong>Leonor Resende</strong>
          </h3>
          <p>
            Made in Lisbon, Portugal{' '}
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              🇵🇹
            </span>
            <br />
            <br />
            Studying Computer Science with Human Computer Interaction at the
            University of Manchester{' '}
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              🐝
            </span>
            <br />
            <br />
            Incoming Software Engineering Placement Year Intern @ Bloomberg
          </p>
        </div>

        <div className="interests-wrapper mt-5">
          <h3>Interests</h3>
          <p className="interests-text">{this.interests}</p>
        </div>

        <div className="places-wrapper mt-5">
          <h3>Places I've been to</h3>
          <Map id="map" lat={38} lng={-30} zoom={2} />
        </div>
      </div>
    );
  }
}

export default AboutMe;
