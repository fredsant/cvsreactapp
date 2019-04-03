import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Cvs.css';
import cvLogo from '../images/bat-logo.svg';
import CvsList from '../components/CvsList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';

class Cvs extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount (){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null});

    try {
      const data = await api.cvs.list();
      this.setState({ loading: false, data : data});
    } catch (error) {
      this.setState({loading: false, error: error });  
    }
  };

  render() {
    if(this.state.loading === true){
      return <PageLoading />;
    }

    if (this.state.error){
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Cvs">
          <div className="Cvs__batman">
            <div className="Cvs__container">
              <img
                className="Cvs_conf-logo"
                src={cvLogo}
                alt="Logo"
              />
            </div>
          </div>
        </div>

        <div className="Cvs__container">
          <div className="Cvs__buttons">
            <Link to="/cvs/new" className="btn btn-primary">
              New CV
            </Link>
          </div>

          <CvsList Cvs={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Cvs;
