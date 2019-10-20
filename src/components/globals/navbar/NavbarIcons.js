import React, { Component } from 'react'
import styled from "styled-components"
import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

import {styles} from "../../../utils"

export default class NavbarIcons extends Component {
    state = {
        icons: [
            {
                id : 1,
                icon: < FaFacebook className="icon facebook-icon"/>,
                path: 'https://www.facebook.com'
            },
            {
                id : 2,
                icon: < FaTwitter className="icon twitter-icon"/>,
                path: 'https://www.twitter.com'
            },
            {
                id : 3,
                icon: < FaInstagram className="icon instagram-icon"/>,
                path: 'https://www.instagram.com'
            },
        ]
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
