import React from 'react';

import {Link} from 'react-router-dom';

import './styles/CvsList.css';
import Gravatar from './Gravatar';

class CvsListItem extends React.Component {
  render() {
    return (
      <div className="CvsListItem">
        <Gravatar
          className="CvsListItem__avatar"
          email={this.props.cv.email}
        />

        <div>
          <strong>
            {this.props.cv.firstName} {this.props.cv.lastName}
          </strong>
          <br />@{this.props.cv.twitter}
          <br />
          {this.props.cv.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchCvs(cvs) {
  const [ query, setQuery] = React.useState('');
  const [ filteredCvs, setFilteredCvs] = React.useState(cvs);

  React.useMemo (() => {
    const result = cvs.filter(cv => {
    return `${cv.firstName} ${cv.lastName}`
    .toLowerCase()
    .includes(query.toLowerCase());
  });

  setFilteredCvs(result);
}, [ cvs, query ]);

return { query, setQuery, filteredCvs };

}

function CvsList (props) {
    const cvs = props.Cvs;
    const { query, setQuery, filteredCvs } = useSearchCvs(cvs);

    if (filteredCvs.length === 0) {
      return (
        <div>
          <div className="form-group">
            <label>Search CVs:</label>
            <input type="text" className="form-control" value={query} 
            onChange={(e) => {
              setQuery(e.target.value)
            }} />
          </div>
        </div>
      );
    }

    return (
      <div className="CvsList">
      <div className="form-group">
        <label>Search CVs:</label>
        <input type="text" className="form-control" value={query} 
        onChange={(e) => {
          setQuery(e.target.value)
        }} />
      </div>
        <ul className="list-unstyled">
          {filteredCvs.map(cv => {
            return (
              <li key={cv.id}>
                <Link className="text-reset text-decoration-none" to={`/cvs/${cv.id}`}>
                  <CvsListItem cv={cv} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default CvsList;
