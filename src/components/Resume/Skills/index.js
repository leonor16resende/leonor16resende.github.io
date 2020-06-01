import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faEmptyCircle } from '@fortawesome/free-regular-svg-icons';

class Skills extends Component {
  leftSkills = [];
  rightSkills = [];

  constructor(props) {
    super(props);
    console.log('Skills', props);
    let middleIndex = Math.ceil(props.skillsData.length / 2);
    this.leftSkills = props.skillsData.slice(0, middleIndex);
    this.rightSkills = props.skillsData.slice(
      middleIndex,
      props.skillsData.length
    );
  }

  renderScore = (number) => {
    var scores = [];
    for (let i = 0; i < 5; i++) {
      if (i < number) {
        scores.push(
          <React.Fragment key={i}>
            <FontAwesomeIcon icon={faCircle} />{' '}
          </React.Fragment>
        );
      } else {
        scores.push(
          <React.Fragment key={i}>
            <FontAwesomeIcon icon={faEmptyCircle} />{' '}
          </React.Fragment>
        );
      }
    }
    return <span>{scores}</span>;
  };

  renderColumn(array) {
    return array.map((skill) => {
      return (
        <div
          className="row d-flex justify-content-between"
          key={skill.language}
        >
          <div className="col">{skill.language}</div>{' '}
          <div className="col">{this.renderScore(skill.score)}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-5 col-sm-12">
            {this.renderColumn(this.leftSkills)}
          </div>

          <div className="col-lg-5 col-sm-12">
            {this.renderColumn(this.rightSkills)}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
