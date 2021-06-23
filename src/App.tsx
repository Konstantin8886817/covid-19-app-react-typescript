import { useEffect, useState } from "react";
import GlobalInfo from "./components/GlobalInfo";
import CountryList from "./components/CountryList";
import  { IResponseData } from "./iResponseData";

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
