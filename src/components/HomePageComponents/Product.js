import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { styles } from '../../utils'

export default function Product({ product }) {
    return(
        <ProductWrapper>
            <div className="text">

            </div>
        </ProductWrapper>
    )
}

export const ProductWrapper = styled.div`
    @media (min-width: 576px) {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 1rem;
    }

`;