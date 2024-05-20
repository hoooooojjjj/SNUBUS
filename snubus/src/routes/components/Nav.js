import { useContext } from "react";
import { Li, Ul } from "./NavStyle";
import { imgNumContext } from "../Main";

function Navigation() {
  // context API -> imgNum 상태 변화 함수들 가져오기
  const [imgNum, setImgNum] = useContext(imgNumContext);
  return (
    <Ul>
      <Li
        onClick={() => {
          setImgNum(0);
        }}
      >
        지선버스
      </Li>
      <Li
        onClick={() => {
          setImgNum(1);
        }}
      >
        마을버스
      </Li>
      <Li
        onClick={() => {
          setImgNum(2);
        }}
      >
        간선버스
      </Li>
    </Ul>
  );
}

export default Navigation;
