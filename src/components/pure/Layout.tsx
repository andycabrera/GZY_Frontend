import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 90vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

interface LayoutProps {
    children: any
}
const Layout: FC<LayoutProps> = ({ children }) => {
    return <Container>{children}</Container>
}

export default Layout
