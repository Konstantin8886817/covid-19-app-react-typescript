import { useEffect, useState } from "react";
import GlobalInfo from "./components/GlobalInfo";
import CountryList from "./components/CountryList";
import  { IResponseData } from "./iResponseData";
import { Global, css } from "@emotion/react";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<IResponseData | undefined>(undefined);

  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary');
    const data: IResponseData = await result.json();

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Global styles={css`
        body {
          background-color: #f1f1f1;
        } 
      `}/>
      {data ? (
        <>
      <GlobalInfo 
      newConfirmed={data?.Global.NewConfirmed} 
      newDeaths={data?.Global.NewDeaths} 
      newRecovered={data?.Global.NewRecovered}/>

      <CountryList countries={data.Countries}/>
      </>
      ) : ('Loading...'
      )}
    </div>
  );
}

export default App;
