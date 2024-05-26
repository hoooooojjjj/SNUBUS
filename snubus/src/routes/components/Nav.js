import { useContext } from "react";
import { Li, Ul } from "./NavStyle";
import { imgNumContext } from "../Main";
import { SearchOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const busType = [
  {
    label: "버스 종류",
    key: "BusType",
    icon: <SearchOutlined />,
    children: [
      { key: "0", label: "지선 버스" },
      { key: "1", label: "마을 버스" },
      { key: "2", label: "간선 버스" },
      { key: "3", label: "공항 버스" },
      { key: "4", label: "KTX 셔틀 버스" },
    ],
  },
];

function Navigation() {
  // context API -> imgNum 상태 변화 함수들 가져오기
  const [imgNum, setImgNum] = useContext(imgNumContext);

  // 버스 종류 클릭 시 -> 해당 버스 메인 페이지로 이동
  const onClickBusType = (e) => {
    setImgNum(e.key);
  };
  return (
    <Ul>
      <Li>
        <Menu mode="vertical" onClick={onClickBusType} items={busType} />
      </Li>
      <Li>소개</Li>
      <Li>문의</Li>
    </Ul>
  );
}

export default Navigation;
