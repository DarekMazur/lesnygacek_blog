import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';
import { StyledFormField } from './FormField.styles';
import axios from 'axios';
import { Link } from 'gatsby';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('imię jest wymagane')
    .min(2, 'imię jest za krótkie, podaj przynajmniej 2 znaki')
    .max(30, 'imię jest za długie, maksymalna długość to 30 znaków'),
  email: Yup.string().required('email jest wymagany').email('email jest niepoprawny'),
  message: Yup.string().required(`wiadomość nie może być pusta`),
  acceptTerms: Yup.bool().oneOf([true], 'zaakceptuj zasady prywatności'),
});

const FormField = ({ primaryText, secondaryText, loadingText, options }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const errorMessage = (message) => {
    const error = message ? <div>{message}</div> : null;
    return error;
  };

  const privacyLink = (linked, prefix, sufix) => {
    return (
      <>
        {prefix ? `${prefix} ` : 'null'}
        <a href="/privacy" target="_blank">
          {linked}
        </a>
        {sufix ? ` ${sufix}` : ''}
      </>
    );
  };

  return (
    <StyledFormField options={options}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          acceptTerms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setIsLoading(true);
          axios
            .post('/api/sendMail', values)
            .then((res) => {
              setIsSuccess(true);
              setIsLoading(false);
              setSubmitting(false);
              resetForm();
              document.querySelector('#acceptTerms').checked = false;
            })
            .then(
              setTimeout(() => {
                setIsSuccess(false);
              }, 3000)
            )
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              id="name"
              label="Imię"
              onChange={handleChange}
              value={values.name}
              errorMessage={errorMessage(errors.name)}
              isRequired
            />
            <Input
              type="email"
              name="email"
              id="email"
              label="E-mail"
              onChange={handleChange}
              value={values.email}
              errorMessage={errorMessage(errors.email)}
              isRequired
            />
            <Input
              tag="textarea"
              name="message"
              id="message"
              label="Wiadomość"
              onChange={handleChange}
              value={values.message}
              errorMessage={errorMessage(errors.message)}
              isRequired
            />
            <Input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              label={privacyLink('zasady prywatności', 'Akceptuję')}
              onChange={handleChange}
              value={values.acceptTerms}
              errorMessage={errorMessage(errors.acceptTerms)}
              isRequired
            />

            <Button
              primaryText={primaryText}
              secondaryText={secondaryText}
              loadingText={loadingText}
              type="submit"
              disabled={isSubmitting}
              isLoading={isLoading}
              isSuccess={isSuccess}
            />
          </form>
        )}
      </Formik>
    </StyledFormField>
  );
};

export default FormField;
