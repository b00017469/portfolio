import React from 'react';

import styleContainer from '../common/styles/Container.module.css';

import style from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <form className={style.form}>
          <h2 className={style.title}>Contacts</h2>
          <div className={style.contacts}>
            <div>
              <input type="text" name="userName" placeholder="Your name" />
            </div>
            <div>
              <input type="text" name="email" placeholder="Your email" />
            </div>
            <div>
              <textarea name="email" placeholder="Your massage" />
            </div>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
