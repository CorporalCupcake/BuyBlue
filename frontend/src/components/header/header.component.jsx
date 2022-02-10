import React from 'react';
import './header.styles.scss';

import ShoppingCartSVG from '../SVGs/Components/shopping-cart.svg.jsx';
import UserCircleSVG from '../SVGs/Components/user.svg.jsx';
import SearchSVG from '../SVGs/Components/search.svg'

import HeaderTextButton from '../header-text-button/header-text-button.component.jsx';

const Header = () => (
    <div className="header">
        <div className="header__text-menu">
            <HeaderTextButton text='shop'/>
            <HeaderTextButton text='plant care'/>
            <HeaderTextButton text='about us'/>
            <HeaderTextButton text='contact us'/>
        </div>

        <div className="header__logo">
            Vera Frond
        </div>

        <div className="header__icon-menu">
            <SearchSVG/>
            <ShoppingCartSVG/>
            <UserCircleSVG/>
        </div>
    </div>
)

export default Header;