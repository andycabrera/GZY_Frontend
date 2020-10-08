import { default as React, default as React, FC, ReactChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height = 100vh;
`


export default function Layout() {
  return (
    <div>
      
    </div>
  )
}


interface LayoutProps {
    children: ReactChildren
}
export const Layout: FC<LayoutProps> = ({ children }) => {
    return (<img src=""></img>)
}
