import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper-contact">
        <h1>Contact Me!</h1>
        <div className="row">
          <a
            href="https://github.com/leonor16resende"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />{' '}
            github.com/leonor16resende
          </a>
        </div>
        <div className="row">
          <a
            href="https://www.linkedin.com/in/leonor-resende/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />{' '}
            linkedin.com/in/leonor-resende/
          </a>
        </div>
        <div className="row">
          <a
            href="mailto:leonor.16.resende@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faAt} className="contact-icon" />{' '}
            leonor.16.resende@gmail.com
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
