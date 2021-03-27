 import React, { Suspense } from "react"

 //lazy load
import loadable from '@loadable/component'

 import PropTypes from "prop-types"


 //Products providers
import { Provider } from "react-redux"
import { ProductProvider }  from "../../shoppingApp/context/context"
import store from "../../shoppingApp/redux/store"
 
 //Material UI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Page transitions
import PageTransition from 'gatsby-plugin-page-transitions';

//Components
const MenuTabs = loadable(() => import('../../components/MenuTabs'))





const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 74,
    },
  },

}));

 
 const theme = createMuiTheme({
   palette: {
 
 /*       type: 'dark', */
     
     primary: {
       main: green[800],
     },
     secondary: {
       main: deepOrange[800],
     },
   },
 });
 
 const Layout = ({ children }) => {
  const classes = useStyles();

 
   return (
     <ThemeProvider theme={theme}>
                 <Provider store={store}>
            <ProductProvider>

            <MenuTabs />
       <div
         style={{
           margin: `64px auto 0`,
 
         }}
       >  <PageTransition>
         <Grid className={classes.layoutContainer}><main>{children}</main></Grid>
         </PageTransition>
 
       </div>

     </ProductProvider>
     </Provider>
     </ThemeProvider>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 