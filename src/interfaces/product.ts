export default interface Product {
    id: string
    type: string
    name: string
    detail: string
    price: number
    options: [
        {
            color: string
            talle: number
            image: string
        }
    ]
}
