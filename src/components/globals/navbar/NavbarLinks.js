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
        return (
            <div>
                
            </div>
        )
    }
}
