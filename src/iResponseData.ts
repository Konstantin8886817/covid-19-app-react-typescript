export interface BarChartProps {
    countries: Country[];
}

export interface ContentPropsItem {
    isActive: boolean;
}

export interface PropsItem {
    country: Country;
    onItemClick: (country: Country) => void;
}
export interface PropsCountries {
    countries: Country[];
    onItemClick: (country: Country) => void;
}
export interface Props {
    newConfirmed: number;
    newDeaths: number;
    newRecovered: number;
};

export type IResponseData = {
    Countries: Country[];
    Date: string;
    Global: GlobalData;
    ID: string;
    Message: string;
};

export type Country = {
    Country: string;
    CountryCode: string;
    Date: string;
    ID: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    Premium: unknown;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
};

type GlobalData = {
    Date: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
};