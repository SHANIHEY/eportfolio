import React from 'react';
import '../styles/SkillBadge.css';

const SkillBadge = ({ skill, icon, category }) => {
  return (
    <div className="skill-badge">
      {icon && <span className="skill-icon">{icon}</span>}
      <span className="skill-name">{skill}</span>
      {category && <span className="skill-category">{category}</span>}
    </div>
  );
};

export default SkillBadge;

