export interface Product {
    id: BigInteger,
    price: number,
    img: BigInteger,
    description: string,
}
export interface Products {
    products: Array<Product>,
}