import React from 'react'

import './offerLoader.css'

/* import DotsLoader from './dots.svg' */


export default function OfferLoader({ title }) {
    return (
  
 <div>
              <div
    key={`loader`}
              id="offer-loader-box"
           >
                         <p className='offer-text'>{title}</p>
                         <p className='offer-text dots'>• • •</p>

        </div>

        </div>


    )
}
