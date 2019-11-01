import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { styles, Section } from '../../utils'

export default function Gallery() {
    return(
        <StaticQuery 
            query={
                graphql`
                
                `
            }
            render={
                data => {
                    const img1 = data.img1.childImageSharp.fluid
                    const img2 = data.img2.childImageSharp.fluid
                    const img3 = data.img3.childImageSharp.fluid

                    return(
                        <Section>
                            <GalleryWrapper>

                            </GalleryWrapper>
                        </Section>
                    )
                }
            }
        />
    )
}

const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: item;
    .item {
        position: relative;
    }
    .info {
        position: absolute;
        top: 0;
        left: 0;
        background: ${styles.colors.mainYellow};
        padding: 0.1rem 0.3rem;
        text-transform: capitalize;
    }
    @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
`;