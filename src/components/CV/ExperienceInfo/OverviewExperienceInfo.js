import React from 'react';

const OverviewExperienceInfo = ({
  positionTitle, companyName, fromDate, toDate, experienceSummary, handleEdit,
}) => (
  <div className="overview-container">
    <ul className="experience-info-overview cv-overview">
      <p className="position-title">
        <span>
          Position Title:
        </span>
        {positionTitle}
      </p>

      <p className="company-name">
        <span>
          Company Name:
        </span>
        {companyName}
      </p>

      <p className="from-date">
        <span>
          From:
        </span>
        {fromDate}
      </p>

      <p className="to-date">
        <span>
          To:
        </span>
        {toDate}
      </p>

      <p className="experience-summary">
        <span>
          Experience Summary:
        </span>
        {experienceSummary}
      </p>

      <button className="edit-btn" onClick={handleEdit} type="button">Edit</button>
    </ul>
  </div>
);

export default OverviewExperienceInfo;
