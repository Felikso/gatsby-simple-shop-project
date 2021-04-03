import React from 'react'

import './mainPageLoader.css'

/* import DotsLoader from './dots.svg' */


export default function MainPageLoader() {
    return (
  
        <div>
            <div
                key={`loader`}
                id="___main-loader-box"
            >
                <p className='___main-text'>tytuł</p>
                <p className='___main-text dots'>• • •</p>

            </div>

        </div>


    )
}
