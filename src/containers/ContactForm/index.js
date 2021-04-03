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
    .required('Proszę podać nazwisko.'),
  email: Yup.string()
    .email('Nieprawidłowy adres e-mail.')
    .required('Proszę podać adres e-mail.'),
  phone: Yup.number()
    .integer()
    .typeError('Proszę podać prawidłowy numer telefonu.')
    .required('Proszę podać numer telefonu.'),
  addressLine1: Yup.string()
    .required('Proszę podać adres.'),
  addressLine2: Yup.string(),
  city: Yup.string()
    .required('Proszę wybrać miasto docelowe dla zamówienia/usługi.'),
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

const ContactForm = () => {
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

                <Grid container spacing={3}>

                  <Grid item xs={12}>
                     <Typography variant="h4" content="h3">
                      Formularz zamówienia
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Dane osobowe
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Textfield
                      name="firstName"
                      label="Imię"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Textfield
                      name="lastName"
                      label="Nazwisko"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Textfield
                      name="email"
                      label="adres E-mail"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Textfield
                      name="phone"
                      label="Numer telefonu"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Docelowy adres dla zamówienia/usługi
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Textfield
                      name="addressLine1"
                      label="Adres linia 1"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Textfield
                      name="addressLine2"
                      label="Adres linia 2"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Textfield
                      name="city"
                      label="Miasto"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Select
                      name="country"
                      label="Państwo"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Przewidywany docelowy okres dla zamówienia/usługi
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <DateTimePicker
                      name="arrivealDate"
                      label="Początek"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <DateTimePicker
                      name="departureDate"
                      label="Zakończenie"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Dodatkowa wiadomość"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Regulamin przetwarzania danych osobowych."
                      label="Wyrażam zgodę na przetwarzanie swoich danych osobowych."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      Wyślij zamówienie
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

export default ContactForm;