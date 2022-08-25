import React from 'react';

import style from './Project.module.css';

type SkillPropsType = {
  title: string;
  description: string;
};

const Project = ({ title, description }: SkillPropsType) => {
  return (
    <div className={style.project}>
      <div className={style.image}>
        <a className={style.button} href="github.com">
          Open
        </a>
      </div>
      <h3 className={style.title}>{title}</h3>
      <span className={style.description}>{description}</span>
    </div>
  );
};

export default Project;
