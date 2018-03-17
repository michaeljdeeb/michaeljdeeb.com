import React from 'react';

import styles from './index.module.css';

const NetlifyForm = () => (
  <div className={styles.NetlifyForm}>
    <h3>Email</h3>
    <form className={styles.form} name="Contact" method="POST" data-netlify="true" data-netlify-honeypot="Phone">
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor="Name">
          <input autoComplete="name" className={styles.input} type="text" name="Name" placeholder="Name" />
        </label>
        <label className={styles.phone} htmlFor="Phone">
          <input autoComplete="tel" className={styles.input} type="text" name="Phone" placeholder="Phone" />
        </label>
        <label htmlFor="Email">
          <input autoComplete="email" className={styles.input} type="text" name="Email" placeholder="Email" />
        </label>
        <label htmlFor="Subject">
          <input className={styles.input} type="text" name="Subject" placeholder="Subject" />
        </label>
        <label htmlFor="Message">
          <textarea className={styles.textarea} rows="5" name="Message" placeholder="Message" />
        </label>
      </div>
      <button className={styles.submit} type="submit">
        <span className={styles.textGradient}>Submit</span>
      </button>
    </form>
  </div>
);

export default NetlifyForm;
