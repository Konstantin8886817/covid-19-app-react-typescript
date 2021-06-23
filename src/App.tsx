import { useEffect, useState } from "react";
import GlobalInfo from "./components/GlobalInfo";
import CountryList from "./components/CountryList";
import  { Country, IResponseData } from "./iResponseData";
import { Global, css } from "@emotion/react";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<IResponseData | undefined>(undefined);
  const [activeCountries, setActiveCountries] = useState<Country[]>([]);

  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary');
    const data: IResponseData = await result.json();

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCountryClick = (country: Country) => {
    const countryIndex = activeCountries.findIndex(activeCountry => activeCountry.ID === country.ID);
    if (countryIndex > -1) {
      const newActiveCountries = [...activeCountries];
      newActiveCountries.splice(countryIndex, 1);

      setActiveCountries(newActiveCountries);
    } else {
      setActiveCountries([...activeCountries, country]);
    }
  };

  return (
    <div>
      <Global styles={css`
        body {
          background-color: #f1f1f1;
        } 
      `}/>

      {activeCountries.map((aCountry) => <span>{aCountry.Country}</span>)}

      {data ? (
        <>
      <GlobalInfo 
      newConfirmed={data?.Global.NewConfirmed} 
      newDeaths={data?.Global.NewDeaths} 
      newRecovered={data?.Global.NewRecovered}/>

      <CountryList countries={data.Countries} onItemClick={onCountryClick}/>
      </>
      ) : ('Loading...'
      )}
    </div>
  );
}

export default App;
