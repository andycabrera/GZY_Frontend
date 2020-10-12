import React, { FC } from 'react'
import styled from 'styled-components'
import Product from '../../interfaces/product'

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
const Image = styled.div`
    height: 80vh;
`

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: bold;
`
const Price = styled.span``

interface ProductProps {
    data: Product
}

export const ProductComponent: FC<ProductProps> = ({ data }) => {
    return (
        <Container>
            <Image>{data.options[0].image}</Image>
            <DetailContainer>
                <Name>{data.name}</Name>
                <Price>${data.price}</Price>
            </DetailContainer>
        </Container>
    )
}
