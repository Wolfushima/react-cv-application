import React, { Component } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import OverviewPersonalInfo from './OverviewPersonalInfo';

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      currentPosition: '',
      email: '',
      phoneNumber: '',
      professionalSummary: '',
      edit: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      edit: false,
    });
  }

  handleEdit() {
    this.setState({
      edit: true,
    });
  }

  render() {
    const { handleSubmit, handleChange, handleEdit } = this;
    const {
      firstName, lastName, currentPosition, email, phoneNumber, professionalSummary, edit,
    } = this.state;

    if (!edit) {
      return (
        <OverviewPersonalInfo
          firstName={firstName}
          lastName={lastName}
          currentPosition={currentPosition}
          email={email}
          phoneNumber={phoneNumber}
          professionalSummary={professionalSummary}
          handleEdit={handleEdit}
        />
      );
    }

    return (
      <PersonalInfoForm
        firstName={firstName}
        lastName={lastName}
        currentPosition={currentPosition}
        email={email}
        phoneNumber={phoneNumber}
        professionalSummary={professionalSummary}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  }
}
