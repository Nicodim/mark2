import React from 'react';
import {Links, MainLink, NavbarBox} from "./styles";
import AppLink from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export const Navbar = () => {
    return (
        <NavbarBox>
            <ThemeSwitcher/>
            <Links>
                <MainLink inverted to={'/'}>Главная</MainLink>
                <AppLink inverted to={'/about'}>О сайте</AppLink>
            </Links>
        </NavbarBox>
    );
};

