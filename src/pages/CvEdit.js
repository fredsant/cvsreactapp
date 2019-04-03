import React from 'react';

import './styles/CvEdit.css';
import header from '../images/robot-logo.svg';
import CvResume from '../components/CvResume';
import CvDescription from '../components/CvDescription';
import CvForm from '../components/CvForm';
import PageLoading from '../components/PageLoading';
import api from '../api';



class CvEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: '',
      twitter: '',
      linkedIn: '',
      description: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loadin: true, error: null});

    try {
      const data = await api.cvs.read (
        this.props.match.params.cvId
      );

      this.setState({loading: false, form: data });
    } catch (error) {
        this.setState({loading: false, error:error});
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null});
    try {
      await api.cvs.update(this.props.match.params.cvId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/cvs');
    } catch (error) {
      this.setState({ loading: false, error: error})
    }
  }

  render() {
    if(this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="CvEdit__batman">
          <img className="CvEdit__batman-image img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
            <CvResume
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'Email'}
                phone={this.state.form.phone || 'Phone Number'}
                linkedIn={this.state.form.linkedIn || 'LinkedIn Profile'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
              <br/>
              <CvDescription
                description={this.state.form.description || 'Description of CV Profile ...'}
              />
            </div>

            <div className="col-6">
              <h1>Edit CV</h1>
              <CvForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CvEdit;
