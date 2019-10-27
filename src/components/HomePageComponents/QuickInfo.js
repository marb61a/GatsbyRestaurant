import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'
import { Link } from 'gatsby'

export default class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message='Let us tell you' title='Our Mission'/>
                <QuickInfoWrapper>
                    <p className='text'>

                    </p>
                </QuickInfoWrapper>
            </Section>
        )
    }
}

const QuickInfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
    .text {
        line-height: 2em;
        color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
    }
`;
