import React from 'react';

import styleContainer from '../common/styles/Container.module.css';

import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.blockFooter}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.title}>Pavel Moroziuk</h2>
        <div className={style.socialContainer}>
          <div className={style.social} />
          <div className={style.social} />
          <div className={style.social} />
          <div className={style.social} />
        </div>
        <span className={style.rights}>© All rights reserved 2022</span>
      </div>
    </div>
  );
};

export default Footer;
