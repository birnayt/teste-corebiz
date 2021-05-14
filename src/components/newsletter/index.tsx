import React, { useState } from 'react';
import style from './newsletter.module.scss';

import { INewsletter } from '../../models';
import { postNewsletter } from '../../api';

const Newsletter = () => {
  const [fieldsNewsletter, setFieldsNewsletter] = useState<INewsletter>({
    name: '',
    email: ''
  });
  const [errorNewsletter, setErrorNewsletter] = useState({ name: false, email: false, send: false });

  const validate = ({ name, email }: INewsletter) => {
    const reEmail = /^.+@.+\..{2,}$/;
    const reName = /^\S+$/;

    const testObj = {
      name: !reName.test(name),
      email: !reEmail.test(email)
    }

    setErrorNewsletter({ name: testObj.name, email: testObj.email, send: false });

    if (Object.values(testObj).some(el => el)) return false; // Verify if some value of errorNewsletter is false

    return true;
  }

  const newsletterSubmit = (e: any) => {
    e.preventDefault();

    const formFieldValues = {
      name: fieldsNewsletter.name,
      email: fieldsNewsletter.email
    };

    if (validate(formFieldValues)) {
      postNewsletter({
        name: fieldsNewsletter.name,
        email: fieldsNewsletter.email
      })
        .then(() => setErrorNewsletter({ name: errorNewsletter.name, email: errorNewsletter.email, send: true }))
    }
  };

  return (
    <div className={style.newsletter}>
      <h2 className={style.newsletterTitle}>Paticipe de nossas news com promoções e novidades!</h2>
      {!errorNewsletter.send && (
        <form className={style.newsletterForm} onSubmit={newsletterSubmit}>
          <div className={style.newsletterDiv}>
            <input type="text" id="news-name"
              name="name"
              placeholder="Digite seu nome"
              className={style.newsletterInput}
              value={fieldsNewsletter.name}
              onChange={(e: any) => setFieldsNewsletter({ name: e.target.value, email: fieldsNewsletter.email })} />
            <p className={style.error}>
              {errorNewsletter.name && 'Preencha com seu nome completo'}
            </p>
          </div>
          <div className={style.newsletterDiv}>
            <input type="text" id="news-email"
              name="email"
              placeholder="Digite seu email"
              className={style.newsletterInput}
              value={fieldsNewsletter.email}
              onChange={(e: any) => setFieldsNewsletter({ name: fieldsNewsletter.name, email: e.target.value })}
            />
            <p className={style.error}>
              {errorNewsletter.email && 'Preencha com um e-mail válido'}
            </p>
          </div>
          <button className={style.newsletterSubmit}>Eu quero!</button>
        </form>
      )}
      {errorNewsletter.send && (<div className={style.newsletterSuccess + " newsletter-succes"}>
        <p className={style.successTitle}>Seu e-mail foi cadastrado com sucesso!</p>
        <p className={style.successText}>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
        <button
          className={style.successBtn}
          onClick={() => setErrorNewsletter({ name: errorNewsletter.name, email: errorNewsletter.email, send: false })}
        >Cadastrar novo e-mail</button>
      </div>)}

    </div>
  );
}

export default Newsletter;
