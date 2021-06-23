import styled from '@emotion/styled';
import { Props } from "../iResponseData";

const StyleGlobal = styled.div`
    background-color: #d1efef;
    padding: 15px;
    text-align: center;
`;

const GlobalInfo: React.FunctionComponent<Props> = ({ newConfirmed, newDeaths, newRecovered }) => {
    return <StyleGlobal>
        <h1>Global Covid-19 App</h1>
        <h3>New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}</h3>
        <h3>New Deaths: {new Intl.NumberFormat().format(newDeaths)}</h3>
        <h3>New Recovered: {new Intl.NumberFormat().format(newRecovered)}</h3>
    </StyleGlobal>
};

export default GlobalInfo;