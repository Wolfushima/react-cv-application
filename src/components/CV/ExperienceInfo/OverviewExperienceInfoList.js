import React from 'react';

const OverviewExperienceInfoList = ({ experienceList, handleRemove, handleAdd }) => (
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
    <button className="add-btn" type="button" onClick={handleAdd}>Add Experience</button>
  </ul>
);

export default OverviewExperienceInfoList;
