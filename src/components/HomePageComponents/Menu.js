import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Section, Title, SectionButton } from '../../utils'
import Product from './Product'

export default function Menu() {
    return(
        <Section>
            <Title title="featured items" message="little taste" />
            <ProductList>
                <StaticQuery 
                    query={graphql`{

                    }`
                    }
                    render={
                        data => {
                            const { edges: sweets } = data.items;
                            return sweets.map(item => {
                                return <Product key={item.node.id} product={item.node} />
                            })
                        }
                    }
                />
            </ProductList>
        </Section>
    );
}

export const ProductList = styled.div`
    margin: 3rem 0;
    display: grid;
    grid-auto-columns: 100%;
    grid-row-gap: 3rem;
    @media (min-width: 576px) {
        display: grid;
        grid-template-columns: 95%;
    }
    @media (min-width: 776px) {
        grid-template-columns: 80%;
        justify-content: center;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`;