import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
    font-size: 2em;
    display: flex;
    color: #676161;
    place-content: center;
    li {
        margin: 0px 10px 0px 11px;
        &:hover {
            color: #2b2626;
        }
    }
`
const Item = styled.li`
    list-style-type: none;
`

export default function TypeList() {
    return (
        <List>
            <Item>ALL</Item>
            <Item>SHIRTS</Item>
            <Item>FACE MASKS</Item>
        </List>
    )
}
