export interface HeaderLinks{
    title: string,
    url: string,
    exact: boolean,
}

export interface ProductCategories{
    img: string,
    title: string,
}

export interface breadCrumbsListInterface{
    to: string,
    text: string,
}

export interface ProductsInterface{
    name: string,
    id: number,
    price: number,
    quantity: number,
    category: string,
    discription: string,
    image: string,
}
