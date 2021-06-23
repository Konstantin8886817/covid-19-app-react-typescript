export interface PropsCountries {
    countries: Country[];
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

type Country = {
    Country: string;
    CountryCode: string;
    Date: string;
    ID: string;
    NewConfirmed: number;
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