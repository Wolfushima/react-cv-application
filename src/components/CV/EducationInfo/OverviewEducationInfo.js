import React from 'react';

const OverviewEducationInfo = ({
  schoolName, titleOfStudy, fromDate, toDate, handleEdit,
}) => (
  <ul>
    <p className="school-name">
      <span>
        School Name:
      </span>
      {schoolName}
    </p>

    <p className="title-of-study">
      <span>
        Title of Study:
      </span>
      {titleOfStudy}
    </p>

    <p className="from-date">
      <span>
        From Date:
      </span>
      {fromDate}
    </p>

    <p className="to-date">
      <span>
        To Date:
      </span>
      {toDate}
    </p>

    <button className="edit-btn" onClick={handleEdit} type="button">Edit</button>
  </ul>
);

export default OverviewEducationInfo;
