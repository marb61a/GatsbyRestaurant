import React, { Component } from 'react'
import Link from "gatsby"
import styled from "styled-components"

import {styles} from "../../../utils"

export default class NavbarLinks extends Component {
    state={
        links:[
            {
                id: 0,
                path: '/',
                name: 'home'
            },
            {
                id: 1,
                path: '/about/',
                name: 'about'
            },
            {
                id: 2,
                path: '/menu/',
                name: 'menu'
            },
            {
                id: 3,
                path: '/contact/',
                name: 'contact'
            }
        ]
    }

    render() {
        <LinkWrapper open={this.props.navbaropen}>
            {
                this.state.links.map(item => {
                    return(
                        <li key={item.id}>
                            <Link to={item.path} className="nav-link">
                                {item.name}
                            </Link>
                        </li>
                    )
                })
            }
        </LinkWrapper>
    }
}

const LinkWrapper = styled.div`
    li {
        list-style-type: none;
    }

    .nav-link {
        display: block;
        text-decoration: none;
        padding: 0.5rem 1rem;
        color: ${styles.colors.mainGrey};
        font-weight: 700;
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
            background: ${styles.colors.mainGrey};
            color: ${styles.colors.mainYellow}
        }
    }
`;