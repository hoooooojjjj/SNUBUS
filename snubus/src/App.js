import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const response = await axios.get(
        `bus_api?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=100100118&startOrd=1&endOrd=13&resultType=json`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return <div></div>;
}

export default App;
