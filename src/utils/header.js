import styled from 'styled-components'
import React from 'react'

export default function header  {
    return (
        <div>
            
        </div>
    )
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 68px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`;