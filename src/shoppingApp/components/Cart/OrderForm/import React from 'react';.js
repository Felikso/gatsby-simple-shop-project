import React from 'react';

//mui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

//form control
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';


//form vaidation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
        }
    },
  textField: {
    width: '100%',
    alignSelf: 'center',
  },
  inputsBox: {
    background: 'red',
    justifyContent: 'space-between',

  }
/*   inputs: {
    width: 540,
  }, */
}));


//form validation functions
const schema = yup.object().shape({
    name: yup.string().required("proszę podać swoje imię"),
    message: yup.string().required("proszę wpisać wiadomość"),
    email: yup.string('adres e-mail powinien zawierać litery').email().required('adres e-mail jest wymagany'),
  });





export default function OrderForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//form validation
const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

const submitForm = () => {

    console.log("XX")
}

const classes = useStyles();

  return (
    <form>
      <Button 
      variant="outlined" 
      color="primary" 
      onClick={handleClickOpen}
>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Formularz zamówienia</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Żeby złożyć zamówienie na wykonanie projektu oraz wyceny proszę uzupełnić swoje dane kontaktowe oraz w razie potrzeby dodać swoje uwagi.
          </DialogContentText>
          <Grid container
            direction="column"
            justify="center"
/*             alignItems="stretch" */
>
        <Grid container className={classes.inputsBox}>
            <Grid item /* xs={12} md={6} */ >
            <Grow in={true}>
            <FormControl
             variant="outlined"
             /* fullWidth */>
              <InputLabel 
              error 
                >Imię
                </InputLabel>
              <OutlinedInput

                error
                endAdornment={
                  <InputAdornment position="end">
                <AccountCircle />
                  </InputAdornment>
                }
                labelWidth={30}
              />
            </FormControl>
            </Grow>
            </Grid>

            <Grid item /* xs={12} md={6}  */>        
            <Grow in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...(true ? { timeout: 1000 } : {})}>
            <FormControl 
            variant="outlined" 
            /* fullWidth */>
              <InputLabel 
              error 
                >E-mail
                </InputLabel>
              <OutlinedInput
                error
                endAdornment={
                  <InputAdornment position="end">
                <MailOutlineIcon />
                  </InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            </Grow>
            </Grid>
        </Grid>


        <Grid item xs={12}>         
        <Grow in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 2000 } : {})}>

        <TextField 
          className={classes.textField}
          id="outlined-textarea"
          label="treść zamówienia"
          placeholder="proszę wpisać uwagi do zamówienia"
          multiline
          variant="outlined"
        />
        </Grow>
        </Grid>
        </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(submitForm)} color="primary" type="submit" id="submit" className={classes.btn}>
            Wyślij zamówienie
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
