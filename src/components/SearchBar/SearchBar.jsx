import { Formik, ErrorMessage, Form, Field } from 'formik';

function SearchBar({ handleSubmit }) {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            name="query"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="query" component="div" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
