import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/context"
import "./ProductsFilter.css"

//material ui
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  filtersContainer: {
    margin: 'auto',
    width: '95%',
    marginTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

}));




const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))].filter(function (el) {
    return el != "";
  });

};
const ProductsFilter = ({ products }) => {
  const classes = useStyles();
  const context = useContext(ProductContext);
  const {
    handleChange,
    alt,
    short_name,
  } = context;

  const { renderProducts, getRenderProducts } = useState(products.length)

  let alts = getUnique(products, "alt");

  alts = ["każdy rodzaj", ...alts];

  alts = alts.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));


    let short_names = getUnique(products, "short_name");
    

    short_names = ["każdy typ", ...short_names];

    short_names = short_names.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));

  
  return (
    <>
  <Grid container xs={12} className={classes.filtersContainer}>

      <Grid item xs={12} sm={6}>
        <Typography variant="h4" component="h3" >Oferta</Typography>
      </Grid>
      <Grid container  spacing={2} xs={12} sm={6} justify="flex-end">
      <Grid item  xs={12} sm={3}>
        <FormControl fullWidth variant="outlined" /* className={classes.formControl} */>
            <InputLabel htmlFor="short_name">Typ</InputLabel>
                <Select
                native
                label="Typ"
                value={short_name}
                onChange={handleChange}
                inputProps={{
                  name: "short_name",
                  id: "short_name",
                }}
              >      {/* <option aria-label="None" value="" /> */}
                      {short_names}
              </Select>
        </FormControl>
      </Grid>
      <Grid item  xs={12} sm={3}>
        <FormControl fullWidth variant="outlined" /* className={classes.formControl} */>
        <InputLabel htmlFor="alt">Rodzaj</InputLabel>
          <Select
            native
            label="Rodzaj"
            onChange={handleChange}
            value={alt}
            inputProps={{
              name: "alt",
              id: "alt",
            }}
          >     {/*  <option aria-label="None" value="" /> */}
                  {alts}
          </Select>
        </FormControl>
      </Grid>
      </Grid>
  </Grid>

    </>
  );
};

export default ProductsFilter;
