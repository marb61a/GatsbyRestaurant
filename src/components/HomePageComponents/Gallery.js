import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { styles, Section } from '../../utils'

export default function Gallery() {
    return(
        <StaticQuery 
            query={

            }
            render={
                
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
    }
`;