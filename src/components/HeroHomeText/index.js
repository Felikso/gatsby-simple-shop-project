import React from 'react'
import { Link } from 'gatsby'
import './HeroHomeText.scss'

import GradientButton from '../Buttons/GradientButton'

import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    offerButton: {
      padding: 20,
      position: 'absolute',
      right: 0,
      bottom: '-500%',
    },

   
  }));

export default function HeroHomeText() {
    const classes = useStyles()
    return (
        <>
<div class="container">
    <div class="box">

        <div class="title">
            <span class="block"></span>
            <h1>Kaio Almeida<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p>UI Dev designer</p>
        </div>

    </div>
</div>

<Link><footer>
    <div class="texto">
        <span>
            <i class="fab fa-youtube"></i>
            <GradientButton text="tekst przycisku">
    
    </GradientButton></span>
    </div>
</footer>
   </Link>
   </>
    )
}
