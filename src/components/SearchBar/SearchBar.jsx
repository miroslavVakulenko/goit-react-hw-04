// src\components\SearchBar\SearchBar.jsx
import { Formik, ErrorMessage, Form, Field } from 'formik';
import css from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
function SearchBar({ handleSubmit, errorNotification }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === '') {
            toast.error('Please enter a search query!');
            errorNotification();
          } else {
            handleSubmit(values);
          }
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <Field
              className={css.field}
              name="query"
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
            />
            <button className={css.searchButton} type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <ErrorMessage name="query" component="div" />
          </div>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
