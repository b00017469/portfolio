import React from 'react';

import styleContainer from '../common/styles/Container.module.css';

import Skill from './skill/Skill';
import style from './Skills.module.css';

const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
