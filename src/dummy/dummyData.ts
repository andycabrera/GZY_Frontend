import Product from '../interfaces/product'

const faker = require('faker')

export const products: Product[] = [
    {
        id: faker.internet.ipv6(),
        type: faker.commerce.productAdjective(),
        name: faker.commerce.productName(),
        detail: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        options: [
            {
                color: faker.commerce.color(),
                talle: faker.random.number(),
                base64: faker.random.number(),
            },
        ],
    },
    {
        id: faker.internet.ipv6(),
        type: faker.commerce.productAdjective(),
        name: faker.commerce.productName(),
        detail: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        options: [
            {
                color: faker.commerce.color(),
                talle: faker.random.number(),
                base64: faker.random.number(),
            },
        ],
    },
]
