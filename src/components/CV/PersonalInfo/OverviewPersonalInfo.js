import React from 'react';

const OverviewPersonalInfo = ({
  firstName, lastName, currentPosition, email, phoneNumber, professionalSummary, handleEdit,
}) => (
  <ul className="professionalsummary-overview">
    <p className="first-name">
      <span>
        First Name:
      </span>
      {firstName}
    </p>

    <p className="last-name">
      <span>
        Last Name:
      </span>
      {lastName}
    </p>

    <p className="current-position">
      <span>
        Current Position:
      </span>
      {currentPosition}
    </p>

    <p className="email">
      <span>
        Email:
      </span>
      {email}
    </p>

    <p className="phone-number">
      <span>
        Phone Number:
      </span>
      {phoneNumber}
    </p>

    <p className="professional-summary">
      <span>
        Professional Summary:
      </span>
      {professionalSummary}
    </p>

    <button className="edit-btn" onClick={handleEdit} type="button">Edit</button>
  </ul>
);

export default OverviewPersonalInfo;
