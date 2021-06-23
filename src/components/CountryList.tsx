import styled from '@emotion/styled';
import { PropsCountries } from "../iResponseData";

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    list-style-type: none;
    flex: 0 0 50%;
    text-align: center;

    @media (min-width: 420px) {
        flex: 0 0 33.33%;
    }
`;

const CountryList: React.FunctionComponent<PropsCountries> = ({ countries }) => {
    return (
        <ListWrapper>
            {countries.map((country) => (
                <ListItem key={country.ID}>
                    <div>
                        <h4>{country.Country}</h4>
                        <div>New Confirmed: {country.NewConfirmed}</div>
                        <div>New Deaths: {country.NewDeaths}</div>
                        <div>New Recovered: {country.NewRecovered}</div>
                    </div>
                    
                </ListItem>
            ))}
        </ListWrapper>
    )
};

export default CountryList;