import React from 'react';

import styleContainer from '../common/styles/Container.module.css';

import style from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.title}>Contacts</h2>
        <form className={style.form}>
          <input type="text" name="userName" placeholder="Your name" />
          <input type="text" name="email" placeholder="Your email" />
          <textarea name="email" placeholder="Your massage" />
        </form>
        <button type="submit" className={style.button}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Contacts;
