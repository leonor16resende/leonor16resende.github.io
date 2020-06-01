import React, { Component } from 'react';
import './style.css';
import TimelineItem from './TimelineItem';
import { timelineData } from './timelineData';
import { skillsData } from './skillsData';
import Skills from './Skills';

class Resume extends Component {
  state = {};
  renderTimeline() {
    return timelineData.map((item) => {
      return (
        <TimelineItem
          key={item.id}
          leftSide={item.id % 2 === 0}
          institution={item.institution}
          position={item.position}
          dates={item.dates}
          location={item.location}
          image={item.image}
        />
      );
    });
  }
  render() {
    console.log(skillsData);
    return (
      <div className="wrapper-resume">
        <h1 className="text-center mb-5">My Journey</h1>
        <ul className="timeline">
          {this.renderTimeline()}
          <li>
            <div className="item-image">
              <h4>
                <strong>Dreams</strong>
              </h4>
            </div>
          </li>
        </ul>
        <h2 className="text-center mt-5 mb-5">Programming Skills</h2>
        <Skills skillsData={skillsData} />
      </div>
    );
  }
}

export default Resume;
