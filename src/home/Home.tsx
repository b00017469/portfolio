import React from 'react';

import styleContainer from '../common/styles/Container.module.css';

import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.homeBlock}>
      <div className={styleContainer.container}>
        <div className={style.greetings}>
          <span>Hi There</span>
          <h1>I am Pavel Morozuik</h1>
          <p>Front-end developer</p>
        </div>
        <div className={style.photo} />
      </div>
    </div>
  );
};

export default Home;
