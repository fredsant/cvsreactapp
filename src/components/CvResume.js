import React from 'react';

import './styles/Cv.css';
import Logo from '../images/robot-logo.svg';
import Gravatar from './Gravatar';

class CvResume extends React.Component {
  render() {
    return (
      <div className="Cv">
        <div className="Cv__headerResume">
          <img src={Logo} alt="Logo..." />
        </div>

        <div className="Cv__section-name">
          <Gravatar
            className="Cv__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Cv__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.email}</div>
          <div>{this.props.phone}</div>
          <div>{this.props.linkedIn}</div>
        </div>

        <div className="Cv__footer">@{this.props.twitter}</div>
      </div>
    );
  }
}

export default CvResume;
