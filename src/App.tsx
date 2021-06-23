import { useEffect, useState } from "react";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState(undefined);

  const fetchData = async () => {
    const result = await fetch('https://api.covid19api.com/summary');
    const data = await result.json();

    setData(data);
    console.log(data);
    
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
