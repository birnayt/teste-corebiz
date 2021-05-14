import React from 'react';
import style from './newsletter.module.scss';

const Newsletter = () => {
  return (
    <div className={style.newsletter}>
      <h2 className={style.newsletterTitle}>Paticipe de nossas news com promoções e novidades!</h2>
      <form className={style.newsletterForm}>
        <input type="text" id="news-name" name="name" placeholder="Digite seu nome" className={style.newsletterInput} />
        <input type="text" id="news-email" name="email" placeholder="Digite seu email" className={style.newsletterInput} />
        <button className={style.newsletterSubmit}>Eu quero!</button>
      </form>
    </div>
  );
}

export default Newsletter;
