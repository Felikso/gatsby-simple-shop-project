import React, { useState } from "react";
import Img from "gatsby-image/withIEPolyfill"

//Redux
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 150,
    background: 'rgb(255,255,255)',
    background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(187,187,187,1) 100%);',
  },
  media: {
    height: 200,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    objectFit:"contain!important",
  },
  typeName: {
    fontSize: '0.6rem',
  },
  spanInput:{
    marginTop: 10,
  },
  qtyInput:{
    marginTop: 10,
    width: 100,
  },
  cardActions: {
    justifyContent: 'space-between',
  },
});



const CartItem = ({ item, adjustQty, removeFromCart, merch }) => {
  const classes = useStyles();
  const [input, setInput] = useState(item.qty);



  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  const {
    type_name,
    slug,
    id,
    desc,
    price,
    alt,
  } = item

  let prodImg = []
  prodImg = merch.nodes.filter(x => x.id === id)
  const fadeInDuration = (500 + (20*id))
  const imgSrc = prodImg[0].image.childImageSharp.fluid
  return (

     <Card className={classes.root} elevation={5} variant="outlined">

          <CardActionArea>
          <Img 
                  fluid={imgSrc}
                  fadeIn={true}
                  durationFadeIn={fadeInDuration}
                  title={type_name}
                  alt={type_name}
                  loading="lazy"
                  fadeIn="true"
                  backgroundColor="rgb(255,255,255)"
                  backgroundColor="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(187,187,187,1) 100%)"
                  objectFit="contain"
                  className={classes.media}
                  />
        <CardContent className={classes.cardContent}>

        <Grid className={classes.typographyBox} >
              <Typography gutterBottom variant="h6" component="h2" className={classes.typeName}>
              {type_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {price}
              </Typography>
              <Typography gutterBottom variant="span" component="h6" className={classes.spanInput}>
              liczba produktów
              </Typography>
          <input className={classes.qtyInput}
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </Grid>
            </CardContent>
          </CardActionArea>

      <CardActions className={classes.cardActions}>
        <Button size="small" variant="contained" color="primary" onClick={() => removeFromCart(id)}>
          usuń
        </Button>
      </CardActions>
    </Card>

  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
