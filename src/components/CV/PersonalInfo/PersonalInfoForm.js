import React from 'react';
import Input from '../../Utils/Input';
import TextArea from '../../Utils/TextArea';

const PersonalInfoForm = ({
  firstName, lastName, currentPosition, email, phoneNumber, professionalSummary, onChange, onSubmit,
}) => (
  <div className="form-container">
    <form className="personal-info-form cv-form" onSubmit={onSubmit}>
      <Input labelP="First Name" name="firstName" type="text" value={firstName} onChange={onChange} />

      <Input labelP="Last Name" name="lastName" type="text" value={lastName} onChange={onChange} />

      <Input labelP="Current Position" name="currentPosition" type="text" value={currentPosition} onChange={onChange} />

      <Input labelP="Email" name="email" type="text" value={email} onChange={onChange} />

      <Input labelP="Phone Number" name="phoneNumber" type="text" value={phoneNumber} onChange={onChange} />

      <TextArea labelP="Professional Summary" name="professionalSummary" value={professionalSummary} onChange={onChange} />

      <input type="submit" value="Save" className="save-btn" />
    </form>
  </div>
);

export default PersonalInfoForm;
