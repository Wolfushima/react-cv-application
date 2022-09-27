import React from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import EducationInfo from './EducationInfo/EducationInfo';
import ExperienceInfo from './ExperienceInfo/ExperienceInfo';

const CV = () => (
  <>
    <h2>Personal Information</h2>
    <PersonalInfo />
    <h2>Education</h2>
    <EducationInfo />
    <h2>Experience</h2>
    <ExperienceInfo />
  </>
);

export default CV;
