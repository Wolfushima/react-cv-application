import React, { Component } from 'react';
import EducationInfoForm from './EducationInfoForm';
import OverviewEducationInfo from './OverviewEducationInfo';

export default class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      titleOfStudy: '',
      fromDate: '',
      toDate: '',
      edit: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      edit: false,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleEdit() {
    this.setState({
      edit: true,
    });
  }

  render() {
    const { handleChange, handleSubmit, handleEdit } = this;
    const {
      schoolName, titleOfStudy, fromDate, toDate, edit,
    } = this.state;

    if (!edit) {
      return (
        <OverviewEducationInfo
          schoolName={schoolName}
          titleOfStudy={titleOfStudy}
          fromDate={fromDate}
          toDate={toDate}
          handleEdit={handleEdit}
        />
      );
    }

    return (
      <EducationInfoForm
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        fromDate={fromDate}
        toDate={toDate}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  }
}
