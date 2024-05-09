import { useEffect, useState } from "react";
import Map from "./util/Map";
import { useQuery } from "react-query";
function App() {
  const [d, setD] = useState();
  useEffect(() => {
    getData();
  }, []);
  // const { data, isLoading, error } = useQuery("busPos", getData, {
  //   refetchIntervalInBackground: true,
  //   refetchInterval: 5000,
  // });
  // if (data) {
  //   console.log(
  //     JSON.parse(data.contents).msgBody.itemList[0].dataTm,
  //     JSON.parse(data.contents).msgBody.itemList[1].dataTm,
  //     JSON.parse(data.contents).msgBody.itemList[2].dataTm,
  //     JSON.parse(data.contents).msgBody.itemList[3].dataTm
  //   );
  // }

  async function getData() {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=100100250&resultType=json`
      )}`
    );
    const jsonData = await response.json();
    setD(jsonData);
  }
  if (d) {
    console.log(
      JSON.parse(d.contents).msgBody.itemList[0].dataTm,
      JSON.parse(d.contents).msgBody.itemList[1].dataTm,
      JSON.parse(d.contents).msgBody.itemList[2].dataTm,
      JSON.parse(d.contents).msgBody.itemList[3].dataTm
    );
  }
  return (
    <div>
      {!d ? (
        <> </>
      ) : (
        <Map
          position={[
            JSON.parse(d.contents).msgBody.itemList[2].gpsY,
            JSON.parse(d.contents).msgBody.itemList[2].gpsX,
          ]}
        ></Map>
      )}
    </div>
  );
}

export default App;
