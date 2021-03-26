import React from 'react'

import CartItem from "../CartItem/CartItem";

//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  cartProdContainer: {
    marginTop: 20,
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'start',
    },
  },
  cartContainer: {
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 74,
    },
  },
 
}));


export default function CartBox({ cart, merch }) {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.cartProdContainer}>

        {cart.map((item) => (
          <Grid item><CartItem key={item.id} item={item} merch={merch} /></Grid>
        ))}

    </Grid>
    )
}
