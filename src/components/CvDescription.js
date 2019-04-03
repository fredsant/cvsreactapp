import React from 'react';

import './styles/Cv.css';
import Logo from '../images/mongodb.svg';

class CvDescription extends React.Component {
  render() {
    return (
      <div className="Cv">
        <div className="Cv__headerDescription">
          <img src={Logo} alt="Logo..." />
        </div>

        <div className="Cv__section-name">
         <h3>Description:</h3>
        </div>

        <div className="Cv__section-info">
          <div>{this.props.description}</div>
        </div>

        <div className="Cv__footer">BatMan is great :D</div>
      </div>
    );
  }
}

export default CvDescription;
