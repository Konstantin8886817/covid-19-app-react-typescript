import styled from '@emotion/styled';
import { PropsCountries } from "../iResponseData";
import CountryItem from './CountryItem';

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const CountryList: React.FunctionComponent<PropsCountries> = ({ countries, onItemClick }) => {
    return (
        <ListWrapper>
            {countries.map((country) => (
                <CountryItem country={country} onItemClick={onItemClick} />
            ))}
        </ListWrapper>
    )
};

export default CountryList;