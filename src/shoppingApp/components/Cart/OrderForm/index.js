import React from 'react';

import "./OrderForm.css"

//mui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';
import Controls from "./controls/Controls";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

//form control
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';


//form vaidation
/* import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; */
import { useForm, Form } from './useForm';
import * as employeeService from "./employeeService";
//send form
import emailjs from 'emailjs-com';

//inputs transitions
import Grow from '@material-ui/core/Grow';

//make styles material ui
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiDialog-paperWidthSm': {
        width: 900,
        background: 'red',
    },

      '& .MuiFormControl-root': {
          width: '100%',
          margin: theme.spacing(1)
      }

},
  textField: {
    width: '100%',
    marginTop: 20,
  },
  dialog: {
    maxWidth: 900,
    background: 'red',
  },
  formContainer: {
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    [theme.breakpoints.down('xs')]: {

      flexDirection:'column',
    },
  }
  

}));



//form validation functions
/* const schema = yup.object().shape({
    name: yup.string().required("proszę podać swoje imię"),
    message: yup.string().required("proszę wpisać wiadomość"),
    email: yup.string('adres e-mail powinien zawierać litery').email().required('adres e-mail jest wymagany'),
  });
 */

  const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}




export default function OrderForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//form validation
/* const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

const submitForm = () => {

    console.log("XX")
}
 */
//form validation
const validate = (fieldValues = values) => {
  let temp = { ...errors }
  if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "Proszę wpisać imię."

  if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Niepoprawny adres e-mail."
  if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 8 ? "" : "Numer telefonu powinien składać się z 9 cyfr."
  if ('city' in fieldValues)
      temp.city = fieldValues.city ? "" : "Proszę wpisać nazwę miasta dla docelowej usługi."
/*   if ('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required." */
  setErrors({
      ...temp
  })

  if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
}

const {
  values,
  setValues,
  errors,
  setErrors,
  handleInputChange,
  resetForm
} = useForm(initialFValues, true, validate);

const handleSubmit = e => {
  e.preventDefault()
  if (validate()){
      employeeService.insertEmployee(values)
      resetForm()
  }
}

const classes = useStyles();

  return (
<Form>
<Button 
variant="outlined" 
color="primary" 
onClick={handleClickOpen}
>
  Open form dialog
</Button>
<Dialog 
open={open} 
onClose={handleClose} 
aria-labelledby="form-dialog-title"



 >
  <DialogTitle id="form-dialog-title">Formularz zamówienia</DialogTitle>
  <DialogContent>
  <Grid
  container
  direction="column"
  justify="center"
  alignItems="stretch"
>
    <DialogContentText>
      Żeby złożyć zamówienie na wykonanie projektu oraz wyceny proszę uzupełnić swoje dane kontaktowe oraz w razie potrzeby dodać swoje uwagi.
    </DialogContentText>

    <Grid   container
            className={classes.formContainer}>
        <Grid item  xs={12} sm={6}>
            <Controls.Input
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
                fullWidth
            />
            <Controls.Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
                fullWidth
            />
        </Grid>
        <Grid item   xs={12} sm={6}>
        <Controls.Input
                label="Telefon"
                name="mobile"
                value={values.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
                fullWidth
            />
            <Controls.Input
                label="Miasto"
                name="city"
                value={values.city}
                onChange={handleInputChange}
                error={errors.city}
                fullWidth>
                                    
                </Controls.Input>

        </Grid>
        </Grid>
        <Grid item   xs={12}>

                        <Controls.Input
                label="Treść dotycząca zamówienia"
                name="city"
                value={values.city}
                onChange={handleInputChange}
                error={errors.city}
                fullWidth
            />
            


        </Grid>
        <Controls.DatePicker
                name="hireDate"
                label="Docelowa data"
                value={values.hireDate}
                onChange={handleInputChange}
            />
        <Grid item>
        <DialogActions>
  <Controls.Button
                    type="submit"
                    text="Submit"
                    onClick={handleSubmit} />
                <Controls.Button
                    text="Reset"
                    color="default"
                    onClick={resetForm} />
  </DialogActions>
  </Grid>
  </Grid>
  </DialogContent>

</Dialog>
</Form>

  );
}
