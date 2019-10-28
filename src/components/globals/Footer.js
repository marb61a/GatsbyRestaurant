import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class Footer extends Component {
    state = {
        icons: [
            {
                id: 1,
                icon: <FaFacebook className="icon facebook-icon" />,
                path: `https://www.facebook.com`,
            },
            {
                id: 2,
                icon: <FaTwitter className="icon twitter-icon" />,
                path: `https://www.twitter.com`,
            },
            {
                id: 3,
                icon: <FaInstagram className="icon instagram-icon" />,
                path: `https://www.instagram.com`,
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

const FooterWrapper = styled.div`
    padding: 2rem 0;

`;