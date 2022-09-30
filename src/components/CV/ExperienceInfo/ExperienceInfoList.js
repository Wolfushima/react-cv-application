import React, { Component } from 'react';
import uniqid from 'uniqid';
import ExperienceInfo from './ExperienceInfo';
import OverviewExperienceInfoList from './OverviewExperienceInfoList';

export default class ExperienceInfoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceList: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    const { experienceList } = this.state;

    this.setState({
      experienceList: [
        ...experienceList,
        <ExperienceInfo key={uniqid()} />,
      ],
    });
  }

  handleRemove(experienceKey) {
    const { experienceList } = this.state;
    const index = experienceList.map((experience) => experience.key).indexOf(experienceKey);
    const updateExperienceList = experienceList.filter((_, i) => i !== index);

    this.setState({
      experienceList: updateExperienceList,
    });
  }

  render() {
    const { handleAdd, handleRemove } = this;
    const { experienceList } = this.state;
    return (
      <>
        <OverviewExperienceInfoList
          experienceList={experienceList}
          handleRemove={handleRemove}
        />
        <button className="add-btn" type="button" onClick={handleAdd}>Add Experience</button>
      </>
    );
  }
}
