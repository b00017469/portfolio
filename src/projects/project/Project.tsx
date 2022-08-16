import React from 'react';

import style from './Project.module.css';

type SkillPropsType = {
  title: string;
  description: string;
};

const Project = ({ title, description }: SkillPropsType) => {
  return (
    <div className={style.project}>
      <div className={style.image} />
      <button type="button" className={style.button}>
        Open
      </button>
      <h3>{title}</h3>
      <span className={style.description}>{description}</span>
    </div>
  );
};

export default Project;
