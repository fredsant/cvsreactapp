import React from 'react';

class CvForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="tel"
              name="phone"
              value={this.props.formValues.phone}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <div className="form-group">
            <label>LinkedIn</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="linkedIn"
              value={this.props.formValues.linkedIn}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            
            <textarea
              onChange={this.props.onChange}
              className="form-control"
              rows="7" 
              cols="50"
              name="description"
              value={this.props.formValues.description}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        {this.props.error && ( 
          <p className="text-danger">{this.props.error.message}</p>
        )}
        </form>
      </div>
    );
  }
}

export default CvForm;
