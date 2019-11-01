import React from 'react'
import styled from 'styled-components'

import { styles } from '.'

export function Title({ title, message }) {
    return(
        <TitleWrapper>

        </TitleWrapper>
    );
}

Title.defaultProps = {
    message: 'our message',
    title: 'our title',
}

const TitleWrapper = styled.div`
    text-align: center;
    h3 {
        ${styles.textSlanted};
        ${styles.letterSpacing({ spacing: '0.3rem' })};
        font-size: 2rem;
        color: ${styles.colors.mainYellow};
    }
`;