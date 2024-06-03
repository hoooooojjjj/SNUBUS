// 폴리라인 생성 -> 해당 경로 좌표 배열, 지도 객체, 폴리라인 색상을 인자로 받음
const printPolyline = (directionsData, map, strokeColor) => {
  // 버스 노선 경로 좌표 배열
  const stationPosArray = [
    directionsData.map(
      (direction) => new window.kakao.maps.LatLng(direction[0], direction[1])
    ),
  ];

  // 버스 노선 경로 좌표 배열로 폴리라인 생성
  const polyline = new window.kakao.maps.Polyline({
    map: map,
    path: stationPosArray,
    strokeWeight: 4,
    strokeColor: strokeColor,
    strokeOpacity: 0.5,
    strokeStyle: "solid",
  });

  // 폴리라인 적용
  polyline.setMap(map);
};

export default printPolyline;
