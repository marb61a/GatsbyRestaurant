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
            <FooterWrapper>
                <div className="title"> Gatsby Eatery</div>
                <div className="icons">
                    {
                        this.state.icons.map(item => (
                            <a 
                                href={item.path}
                                key={item.id}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
                <p className="copyright">
                    Copyright &copy; 2019 Gatsby Eatery
                </p>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.div`
    padding: 2rem 0;
    background: ${styles.colors.mainBlack};
    .icons {
        width: 10rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
`;