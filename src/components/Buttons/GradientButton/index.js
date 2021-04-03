import React from 'react'

import './GradientButton.scss'

export default function GradientButton({text, className}) {
    return (
<button type="button" className={`gradient-button ${className}`}>{text}</button>
    )
}
