import React from 'react';
import {Links, MainLink, NavbarBox} from "./styles";
import AppLink from "shared/ui/AppLink/AppLink";

export const Navbar = () => {
    return (
        <NavbarBox>
            <Links>
                <MainLink inverted to={'/'}>Главная</MainLink>
                <AppLink inverted to={'/about'}>О сайте</AppLink>
            </Links>
        </NavbarBox>
    );
};

