import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';

//Use form effects
import { useForm } from './Functions/UseForm';

//Components
import Textfield from './Controls/Textfield';
import Select from './Controls/Select';
import DateTimePicker from './Controls/DataTimePicker';
import Checkbox from './Controls/Checkbox';
import Button from './Controls/Button';
import countries from './data/countries.json';

//Lazy load

import loadable from '@loadable/component'

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivealDate: '',
  departureDate: '',
  message: '',
  termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .typeError('Imię powinno składać się z liter')
    .required('Proszę podać imię'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  addressLine1: Yup.string()
    .required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string()
    .required('Proszę wybrać miasto docelowe dla zamówienia/usługi.'),
  state: Yup.string()
    .required('Required'),
  country: Yup.string()
    .required('Proszę wybrać państwo docelowe dla zamówienia/usługi.'),
  arrivealDate: Yup.date()
    .required('Proszę wybrać docelowe rozpoczęcie zamówienia/usługi.'),
  departureDate: Yup.date()
    .required('Proszę wybrać docelowe zakończenie zamówienia/usługi.'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'Proszę zaakceptować warunki regulaminu.')
    .required('Warunki regulaminu muszą być zaakcetowane.'),
});

const ContactFormDefault = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      Your details
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield
                      name="lastName"
                      label="Last Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="phone"
                      label="Phone"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Address
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine1"
                      label="Address Line 1"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine2"
                      label="Address Line 2"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="city"
                      label="City"
                    />
                  </Grid>

{/*                   <Grid item xs={6}>
                    <Textfield
                      name="state"
                      label="State"
                    />
                  </Grid> */}

                  <Grid item xs={6}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Booking information
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="arrivealDate"
                      label="Arrival Date"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>


                </Grid>

              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ContactFormDefault;