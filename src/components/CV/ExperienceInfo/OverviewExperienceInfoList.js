import React from 'react';

const OverviewExperienceInfoList = ({ experienceList, handleRemove }) => (
  <ul className="experience-list-container">
    {
        experienceList.map((experience) => (
          <li key={experience.key} className="experience">
            {experience}
            <button
              className="remove-btn"
              type="button"
              onClick={() => handleRemove(experience.key)}
            >
              Remove
            </button>
          </li>
        ))
    }
  </ul>
);

export default OverviewExperienceInfoList;
