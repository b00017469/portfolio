import React from 'react';

import style from './Skill.module.css';

type SkillPropsType = {
  title: string;
  description: string;
};

const Skill = ({ title, description }: SkillPropsType) => {
  return (
    <div className={style.skill}>
      <div className={style.icon} />
      <h3>{title}</h3>
      <span className={style.description}>{description}</span>
    </div>
  );
};

export default Skill;
