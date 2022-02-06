import React from 'react';
import './button.styles.scss'

const Button = ({ title }) => (
    <button className='button'>
        {title}
    </button>
)

export default Button;