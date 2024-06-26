import React, { Component } from 'react'
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"

export default class Navbar extends Component {
    render() {
        state={
            navbarOpen: false
        }

        handleNavbar = () => {
            this.setState(() => {
                navbarOpen: !this.state.navbarOpen
            });
        }

        return (
            <nav>
                <NavWrapper>
                    <NavbarHeader handleNavbar={
                        this.handleNavbar
                    }/>
                    <NavbarLinks navbarOpen={
                        this.state.navbarOpen
                    }/>
                    <NavbarIcons />
                </NavWrapper>
            </nav>
        )
    }
}

const NavWrapper = styled.nav`
    @media(min-width:768px){
        display: flex;
        align-items: center;
    }
`;