import { useContext, useEffect } from 'react';
import './SignForm.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import FormButton from '../FormButton/FormButton';
import { ErrorContext } from '../../contexts/ErrorContext';

function SignForm({
  name,
  title,
  children,
  textButton,
  pathname,
  handleSubmit,
  isValid,
}) {
  const { error, setError } = useContext(ErrorContext);
  useEffect(() => {
    setError({});
  }, [setError]);
  return (
    <form
      className='form'
      name={name}
      id={name}
      onSubmit={handleSubmit}
      noValidate
    >
      <Logo />
      <h2 className='form__title'>{title}</h2>
      <fieldset
        className={`form__inputs ${
          pathname === '/signin' && 'form__inputs_margin-bottom'
        }`}
      >
        {children}
      </fieldset>
      <div className='form__button-container'>
        <FormButton
          textButton={textButton}
          isValid={isValid}
          errorMessage={error.message}
        />
        <p className='form__caption'>
          {pathname === '/signup'
            ? 'Уже зарегистрированы?'
            : pathname === '/signin' && 'Ещё не зарегистрированы?'}
          <Link
            to={
              pathname === '/signup'
                ? '/signin'
                : pathname === '/signin' && '/signup'
            }
            className='form__caption-link'
          >
            {pathname === '/signup'
              ? 'Войти'
              : pathname === '/signin' && 'Регистрация'}
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignForm;
