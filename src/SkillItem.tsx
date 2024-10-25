// SkillItem.tsx
import React from 'react';

interface SkillItemProps {
  skill: string;
  value: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, value }) => {
  return (
    <div className="progress">
      <span className="skill">
        <span>{skill}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
