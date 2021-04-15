export interface HeaderLinks{
    title: string,
    url: string,
    exact: boolean,
}

export interface ProductCategories{
    img: string,
    title: string,
    cat: string,
}

export interface breadCrumbsListInterface{
    path: string,
    to: string,
    text: string,
}

export interface ProductsInterface{
    name: string,
    id: number,
    price: number,
    quantity: number,
    category: string,
    description: string,
    image: string,
}

export interface OrderInfoInterface{
    fullName: string,
    homeAddress: string,
    phoneNumber: number,
    payMethod: string,
    deliveryMethod: string,
}
