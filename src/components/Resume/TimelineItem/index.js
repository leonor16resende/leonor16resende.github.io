/*
  This React Component was adapted from this source: 
  https://github.com/BlackrockDigital/startbootstrap-agency
  All the credits belong to the above source
*/

import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.itemClass = props.leftSide ? 'item-left' : 'item-right';
  }

  render() {
    return (
      <li className={this.itemClass}>
        <div className="item-image">
          <img
            className="rounded-image img-fluid"
            src={this.props.image}
            alt={`${this.props.institution} logo/building`}
          />
        </div>
        <div className="item-panel">
          <div className="item-heading">
            <h5 className="item-dates">{this.props.dates}</h5>
            <h4 className="item-institution">{this.props.institution}</h4>
            <h4 className="item-position">{this.props.position}</h4>
          </div>
          <div className="item-body">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {this.props.location}
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default TimelineItem;
