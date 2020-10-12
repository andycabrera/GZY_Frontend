import React from 'react'
import ItemList from '../src/components/nonPure/ItemList'
import TypeList from '../src/components/nonPure/TypeList'
import HomeContainer from '../src/components/pure/HomeContainer'
import Layout from '../src/components/pure/Layout'
import Title from '../src/components/pure/Title'

export default function Home() {
    return (
        <Layout>
            <HomeContainer>
                <Title>Gzi Shop V1</Title>
                <TypeList />
                <br />
                <ItemList quantity={6} ui="list" />
            </HomeContainer>
        </Layout>
    )
}
