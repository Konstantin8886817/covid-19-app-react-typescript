import { useEffect, useState } from "react";
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
      <h1>Global Covid-19 App</h1>
    </div>
  );
}

export default App;
