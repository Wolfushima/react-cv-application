import React, { Component } from 'react';
import ExperienceInfoForm from './ExperienceInfoForm';
import OverviewExperienceInfo from './OverviewExperienceInfo';

export default class ExperienceInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionTitle: '',
      companyName: '',
      fromDate: '',
      toDate: '',
      experienceSummary: '',
      edit: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const {
      handleChange, handleSubmit, handleEdit,
    } = this;

    const {
      positionTitle, companyName, fromDate, toDate, experienceSummary, edit,
    } = this.state;

    if (!edit) {
      return (
        <OverviewExperienceInfo
          positionTitle={positionTitle}
          companyName={companyName}
          fromDate={fromDate}
          toDate={toDate}
          experienceSummary={experienceSummary}
          handleEdit={handleEdit}
        />
      );
    }

    return (
      <ExperienceInfoForm
        positionTitle={positionTitle}
        companyName={companyName}
        fromDate={fromDate}
        toDate={toDate}
        experienceSummary={experienceSummary}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  }
}
