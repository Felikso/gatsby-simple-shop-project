import React, { useState, useEffect } from "react";

import { connect } from "react-redux";


import ContactFormDialog from "../ContactForm/ContactFormDialog"



//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cartOrderInfo: {
    padding: 20,
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      paddingTop: 20,
    },
  },
  cardContentContainer: {
    padding: 20,
  },
  summaryContainer: {

    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: '1fr',
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
      },
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
      },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  gtyText: {
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2em',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.5em',
      },
  }
 
}));

const FormSummary = ({ cart, merch }) => {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const {
    type_name,
    slug,
    id,
    desc,
    price,
    alt,
    qty,
  } = cart

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  let summaryPrice
  if(!totalPrice){
    summaryPrice = "wycena zostanie przygotowania po złożeniu zamówienia"
  } else {
    summaryPrice = totalPrice
  }


  return (
    <>

    <Grid item className={classes.cartOrderInfo} >
      <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.cardContentContainer}>
          <Typography gutterBottom variant="h5" component="h3">
          Liczba produktów: {totalItems} 
          </Typography>
          <Typography gutterBottom variant="h6" component="h4" className={classes.gtyText}>
          Cena: {summaryPrice} 
          </Typography>
            <Grid container xs={12} className={classes.summaryContainer}>
            {cart.map(item => (
                          <Typography xs={12} md={6} variant="body2" color="textSecondary" component="p"><span>{item.alt === 'drzwi' ? item.alt : (item.alt === 'okna')&&(item.qty === 1 ) ? 'okno' : (item.alt === 'okna') ? 'okna' : (item.alt === 'rolety')&&(item.qty === 1 ) ? 'roleta' : 'rolety'}</span> rodzaj : {item.type_name} x {item.qty} </Typography>
            ))}
                </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ContactFormDialog />
      </CardActions>
    </Card>
    </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(FormSummary);
