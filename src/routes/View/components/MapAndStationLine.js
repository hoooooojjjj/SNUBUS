import { skipToken, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBSData } from "../View";
import { useState } from "react";
import { ViewWrap } from "../ViewStyle";
import Map from "../components/Map/Map";
import StationLine from "../components/Map/StationLine/StationLine";

// 버스/정류장 데이터 mutate 커스텀 훅
const useBSMutation = (busClassification, reduxProps, setIsBusInfoUpdated) => {
  const queryClient = useQueryClient();

  // useMutation로 버스 / 정류장 정보 데이터 mutate
  const mutation = useMutation({
    mutationFn: () =>
      busClassification.routeId
        ? async () => getBSData(busClassification, null, reduxProps)
        : skipToken,
    retry: 3,
    onSuccess: () => {
      // 채팅 기록 다시 fetch
      setIsBusInfoUpdated(false);
      queryClient.invalidateQueries("getBusAndStationData").then((res) => {
        setIsBusInfoUpdated(true);
      });
    },

    onError: (error) => {
      console.error("Error adding chat", error.message);
    },
  });

  return mutation;
};

// 지도와 정류장 라인을 렌더링하는 컴포넌트
const MapAndStationLine = ({ busClassification, reduxProps, isMapPrint }) => {
  // 버스 정보 업데이트 완료 유무
  const [isBusInfoUpdated, setIsBusInfoUpdated] = useState(true);

  // 업데이트 버튼 클릭 시 버스/정류장 데이터 mutate 후 redux에 저장
  const mutation = useBSMutation(
    busClassification,
    reduxProps,
    setIsBusInfoUpdated
  );

  return (
    <ViewWrap>
      <Map mutation={mutation} isBusInfoUpdated={isBusInfoUpdated}></Map>
      {isMapPrint && <StationLine />}
    </ViewWrap>
  );
};

export default MapAndStationLine;
