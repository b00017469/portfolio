import React from 'react';

import styleContainer from '../common/styles/Container.module.css';

import Project from './project/Project';
import style from './Projects.module.css';

const Projects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <h2 className={style.title}>My projects</h2>
        <div className={style.projects}>
          <Project title="Social network" description="Description of social network" />
          <Project title="Todolist" description="Description of todolist" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
