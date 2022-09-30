import React from 'react';
import Input from '../../Utils/Input';
import TextArea from '../../Utils/TextArea';

const ExperienceInfoForm = ({
  positionTitle, companyName, fromDate, toDate, experienceSummary, onChange, onSubmit,
}) => (
  <div className="form-container">
    <form className="experience-info-form cv-form" onSubmit={onSubmit}>
      <Input labelP="Position Title" name="positionTitle" type="text" value={positionTitle} onChange={onChange} />

      <Input labelP="Company Name" name="companyName" type="text" value={companyName} onChange={onChange} />

      <Input labelP="From" name="fromDate" type="date" value={fromDate} onChange={onChange} />

      <Input labelP="To" name="toDate" type="date" value={toDate} onChange={onChange} />

      <TextArea labelP="Experience Summary" name="experienceSummary" value={experienceSummary} onChange={onChange} />

      <input
        type="submit"
        value="Save"
        className="save-btn"
        onClick={
            (event) => {
              const experienceNode = event.target.parentNode.parentNode.parentNode;
              experienceNode.querySelector('.remove-btn').classList.add('hide');
            }
        }
      />
    </form>
  </div>
);

export default ExperienceInfoForm;
