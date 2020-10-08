import React, { FC, ReactChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height = 100vh;
`

interface LayoutProps {
    children: ReactChildren
}
export const Layout: FC<LayoutProps> = ({ children }) => {
    return <Container />
}
