
export interface ICountry {
    name: {
        official: string
    },
    flags: {
        svg: string
    },
    population: string,
    region: string,
    capital: string
}

export interface ICard {
    data: ICountry;
}
