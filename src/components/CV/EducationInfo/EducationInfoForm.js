import React from 'react';
import Input from '../../Utils/Input';

const EducationInfoForm = ({
  schoolName, titleOfStudy, fromDate, toDate, onChange, onSubmit,
}) => (
  <form className="education-info-form" onSubmit={onSubmit}>
    <Input labelP="School Name" name="schoolName" type="text" value={schoolName} onChange={onChange} />

    <Input labelP="Title of Study" name="titleOfStudy" type="text" value={titleOfStudy} onChange={onChange} />

    <Input labelP="From" name="fromDate" type="date" value={fromDate} onChange={onChange} />

    <Input labelP="To" name="toDate" type="date" value={toDate} onChange={onChange} />

    <br />

    <input type="submit" value="Save" />
  </form>
);

export default EducationInfoForm;
