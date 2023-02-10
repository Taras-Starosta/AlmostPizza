export interface Sale {
    id: BigInteger,
    description: string,
    dueTo: string,
}
export interface Sales {
    sales: Array<Sale>,
}