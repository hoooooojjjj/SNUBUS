import { useEffect, useState } from "react";
import Map from "./util/Map";
import { useQuery } from "react-query";
function App() {
  const { data, isLoading, error, refetch } = useQuery(["busPos"], getData, {
    // refetchIntervalInBackground: true,
    // refetchInterval: 10000,
    // cacheTime: 10000,
    // staleTime: 10000,
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refetch();
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [refetch]);
  if (data) {
    console.log(
      JSON.parse(data.contents).msgBody.itemList[0].dataTm,
      JSON.parse(data.contents).msgBody.itemList[1].dataTm,
      JSON.parse(data.contents).msgBody.itemList[2].dataTm,
      JSON.parse(data.contents).msgBody.itemList[3].dataTm
    );
  }

  async function getData() {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=100100250&resultType=json`
      )}`
    );
    const jsonData = await response.json();
    return jsonData;
  }

  return (
    <div>
      {isLoading && !data ? (
        <> </>
      ) : (
        <Map
          position={[
            JSON.parse(data.contents).msgBody.itemList[2].gpsY,
            JSON.parse(data.contents).msgBody.itemList[2].gpsX,
          ]}
        ></Map>
      )}
    </div>
  );
}

export default App;
