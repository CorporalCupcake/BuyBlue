import React from 'react';

import './plant-view.styles.scss'

const PlantView = ({ name, price, descriptor, imageURL }) => (
    <div className="PlantView">

        <img 
            className='PlantView__image' 
            src={require('../../images/fejka.png')} 
            alt={`${name} plant`}
        />

        <div className="PlantView__description">
            <div className="PlantView__description__name">{name}</div>
            <div className="PlantView__description__descriptor">{descriptor}</div>
            <div className="PlantView__description__price">AED {price}</div>
        </div>

    </div>
)

export default PlantView;