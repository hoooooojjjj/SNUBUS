import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_BUS_API_KEY);
    getData();
  }, []);
  // async function getData() {
  //   try {
  //     const response = await axios.get(
  //       ``
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  function getData() {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=100100118&startOrd=1&endOrd=2&resultType=json`
      )}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => console.log(JSON.parse(data.contents)));
  }

  return <div></div>;
}

export default App;
