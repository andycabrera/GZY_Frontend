import React, { FC } from 'react'
import styled from 'styled-components'
import { products } from '../../dummy/dummyData'
import { ProductComponent } from '../pure/Product'

const Container = styled.div`
    display: flex;
`

interface ListProps {
    quantity: number
    ui: string
}

const ItemList: FC<ListProps> = ({ quantity, ui }) => {
    // TODO: Fetch data from back

    return (
        <Container>
            {products.map((product) => {
                return <ProductComponent data={product} />
            })}
        </Container>
    )
}

export default ItemList
