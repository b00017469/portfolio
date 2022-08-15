import React from 'react';

import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={style.nav}>
      <a href="v">Home</a>
      <a href="1">About</a>
      <a href="1">Skills</a>
      <a href="1">Projects</a>
      <a href="3">Contacts</a>
    </div>
  );
};

export default Navigation;
