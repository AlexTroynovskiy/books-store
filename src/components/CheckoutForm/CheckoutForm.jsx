import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import DateFnsUtils from '@date-io/date-fns';
import { add } from 'date-fns';

import { TextField, Dialog } from '@material-ui/core';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonComponent } from '../_shared/Button';

const useStyles = makeStyles({
  form: {
    margin: '50px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formField: {
    margin: '15px',
    width: '400px',
  },
  button: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const CheckoutForm = ({ cartBooks, orderBooks, isOpen, onClose }) => {
  const classes = useStyles();
  const history = useHistory();

  const dateNow = add(Date.now(), {
    hours: 24,
    minutes: 0,
  });

  const [selectedDate, setSelectedDate] = useState(dateNow.getTime() + 60 * 1000);

  const handleClose = () => {
    onClose();
  };

  const formik = useFormik({
    initialValues: {
      city: '',
      address: '',
      phone: '',
      date: selectedDate,
    },
    validationSchema: Yup.object().shape({
      city: Yup.string()
        .required('Required')
        .matches(/^[a-zA-Z]+$/, 'Invalid city'),
      address: Yup.string().required('Required'),
      phone: Yup.string().required('Required').matches(/^\d+$/, 'Only numbers').length(10, 'Must be 10 numbers'),
      date: Yup.number().min(dateNow.getTime(), 'Must be greater than +24 hours'),
    }),

    onSubmit: (values) => {
      const info = {
        city: values.city,
        address: values.address,
        phone: values.phone,
        date: Number(selectedDate),
      };
      orderBooks(cartBooks, info);
      history.push('/books');
    },
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    formik.setFieldValue('date', date.getTime());
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog open={isOpen} onClose={handleClose}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.formField}
            error={formik.errors.city && formik.touched.city}
            helperText={formik.touched.city && formik.errors.city}
            id="city"
            name="city"
            type="text"
            label="City*"
            variant="outlined"
            {...formik.getFieldProps('city')}
          />
          <TextField
            className={classes.formField}
            error={formik.errors.address && formik.touched.address}
            helperText={formik.touched.address && formik.errors.address}
            id="address"
            name="address"
            type="text"
            label="Address*"
            variant="outlined"
            {...formik.getFieldProps('address')}
          />
          <TextField
            className={classes.formField}
            error={formik.errors.phone && formik.touched.phone}
            helperText={formik.touched.phone && formik.errors.phone}
            id="phone"
            name="phone"
            type="tel"
            label="Phone*"
            variant="outlined"
            {...formik.getFieldProps('phone')}
          />
          <KeyboardDateTimePicker
            className={classes.formField}
            id="date"
            name="date"
            value={selectedDate}
            onChange={handleDateChange}
            minDate={dateNow}
            minDateMessage="Available time is +24 hours from now"
            strictCompareDates={true}
            label="Select time"
          />
          <ButtonComponent
            type="submit"
            color="primary"
            variant="contained"
            disabled={!(formik.isValid && formik.dirty)}
            className={classes.button}
          >
            Confirm the order
          </ButtonComponent>
        </form>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

CheckoutForm.propTypes = {
  cartBooks: PropTypes.arrayOf(PropTypes.object),
  orderBooks: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

CheckoutForm.defaultProps = {
  cartBooks: [],
};
