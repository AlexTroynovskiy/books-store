import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { TextField, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonComponent } from '../_shared/Button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80vh',
    transform: 'translateY(-5%)',
  },
  form: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '600px',
  },
  formField: {
    margin: '20px 0',
    width: '400px',
  },
  button: {
    marginTop: '20px',
  },
});

export const LoginForm = (props) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .matches(/^(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Password invalid')
        .required('Required'),
    }),

    onSubmit: () => {
      props.changeStatus(true);
      history.push('/books');
    },
  });

  const classes = useStyles();

  return (
    <Container component="div" className={classes.root}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.formField}
          error={formik.errors.email && formik.touched.email}
          helperText={formik.touched.email && formik.errors.email}
          id="email"
          name="email"
          type="text"
          label="Email"
          variant="outlined"
          {...formik.getFieldProps('email')}
        />
        <TextField
          className={classes.formField}
          error={formik.errors.password && formik.touched.password}
          helperText={formik.touched.password && formik.errors.password}
          id="password"
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          {...formik.getFieldProps('password')}
        />
        <ButtonComponent
          size="large"
          className={classes.button}
          type="submit"
          color="primary"
          variant="contained"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Submit
        </ButtonComponent>
      </form>
    </Container>
  );
};

LoginForm.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  changeStatus: PropTypes.func.isRequired,
};
