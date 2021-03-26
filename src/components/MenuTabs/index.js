import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
//icons
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

//logo
import SvgVentusTradeLogo from './SvgVentusTradeLogo'

//social icons
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

//contact
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';


//btns
import Button from '@material-ui/core/Button';

//shop cart

import CartValue from "../../shoppingApp/components/CartValue"


const drawerWidth = 240;

console.log(CartValue)
console.log('CartValue')

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbarLogoBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonGroup: {
    [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
},
  relativeBox : {
  position: 'relative',
},
  anchor: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  }
}));

export default function MenuTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Grid className={classes.toolbarLogoBox}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/' className={classes.anchor}>
            <Typography variant="h6" content="h2" >
            Ventus Trade Okna 
          </Typography>
          <SvgVentusTradeLogo />
          </Link>
          </Grid>
          <ButtonGroup variant="text" color="primary" aria-label="menu button group" className={classes.buttonGroup}>
          <Button color="primary" variant="contained">
          <Link to='/' className={classes.anchor}>Stona główna</Link>
          </Button>
          <Button color="primary" variant="contained">
          <Link to='/oferta' className={classes.anchor}>oferta</Link>
          </Button>
          <Button color="primary" variant="contained" >
              <Link to='/kontakt' className={classes.anchor}>Kontakt</Link>
          </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

            <ListItem button>
              <Link to='/oferta'><ListItemIcon><LocalOfferIcon /></ListItemIcon></Link>
              <ListItemText primary="oferta" />
            </ListItem>

            <ListItem button>
            <Link to='/kontakt'><ListItemIcon className={classes.relativeBox}><PermPhoneMsgIcon /></ListItemIcon></Link>
              <ListItemText primary="kontakt" />
            </ListItem>

            <ListItem button>
            <Link to='/oferta/koszyk'><ListItemIcon><div className={classes.relativeBox}><ShoppingCartIcon  /><CartValue /></div></ListItemIcon></Link>
              <ListItemText primary="zamówienie" />
            </ListItem>

        </List>
        <Divider />
        <List>

           <ListItem button component="a"  href="tel:571-901-144">
              <ListItemIcon><ContactPhoneIcon  /></ListItemIcon>
              <ListItemText primary="zadzwoń" />
            </ListItem>

            <ListItem button component="a"  href="mailto:okna@ventus-trade.pl">
              <ListItemIcon><ContactMailIcon  /></ListItemIcon>
              <ListItemText primary="wyślij mail" />
            </ListItem>

            <ListItem button component="a"  href="/oferta/koszyk">
              <ListItemIcon><RecentActorsIcon  /></ListItemIcon>
              <ListItemText primary="formularz kontaktowy" />
            </ListItem>

          
        </List>
      </Drawer>
  
    </div>
  );
}