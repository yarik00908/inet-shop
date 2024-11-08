export interface IRegister {
    username: string,
    password: string,
    password2: string,
    email: string
}

export interface ILogin {
    username: string,
    password: string,
}

export interface IProducts {
    description: string,
    id: number,
    image: string,
    price: string,
    quantity: number,
    rating: number,
    title: string
}