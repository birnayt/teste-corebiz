import React, { useState } from 'react';
import style from './newsletter.module.scss';

import { INewsletter } from '../../models';
import { postNewsletter } from '../../api';

const Newsletter = () => {
  const [fieldsNewsletter, setFieldsNewsletter] = useState<INewsletter>({
    name: '',
    email: ''
  });

  const newsletterSubmit = (e: any) => {
    e.preventDefault();
    postNewsletter({
      name: fieldsNewsletter.name,
      email: fieldsNewsletter.email
    });
  }

  return (
    <div className={style.newsletter}>
      <h2 className={style.newsletterTitle}>Paticipe de nossas news com promoções e novidades!</h2>
      <form className={style.newsletterForm} onSubmit={newsletterSubmit}>
        <input type="text" id="news-name"
          name="name"
          placeholder="Digite seu nome"
          className={style.newsletterInput}
          value={fieldsNewsletter.name}
          onChange={(e: any) => setFieldsNewsletter({ name: e.target.value, email: fieldsNewsletter.email })} />
        <input type="text" id="news-email"
          name="email"
          placeholder="Digite seu email"
          className={style.newsletterInput}
          value={fieldsNewsletter.email}
          onChange={(e: any) => setFieldsNewsletter({ name: fieldsNewsletter.name, email: e.target.value })}
        />
        <button className={style.newsletterSubmit}>Eu quero!</button>
      </form>
    </div>
  );
}

export default Newsletter;
