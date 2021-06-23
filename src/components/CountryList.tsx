import { PropsCountries } from "../iResponseData";

const CountryList: React.FunctionComponent<PropsCountries> = ({ countries }) => {
    return (
        <ul>
            {countries.map((country) => (
                <li key={country.ID}>{country.Country}</li>
            ))}
        </ul>
    )
};

export default CountryList;