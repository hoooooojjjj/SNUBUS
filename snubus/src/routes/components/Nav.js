import { useContext, useState } from "react";
import { Li, BusTypeDropDown, BusTypeDropDownWrap, Ul } from "./NavStyle";
import { imgNumContext } from "../Main";
import { useNavigate } from "react-router-dom";

const busType = [
  { key: "0", label: "지선 버스" },
  { key: "1", label: "마을 버스" },
];

function Navigation({ isMain }) {
  const nav = useNavigate();

  // context API -> imgNum 상태 변화 함수들 가져오기
  const [imgNum, setImgNum] = useContext(imgNumContext) || [];

  // 드롭다운 메뉴 표시 여부
  const [showDropdown, setShowDropDown] = useState(false);

  // 버스 종류 클릭 시 드롭다운 메뉴 표시
  const onClickBusType = () => {
    setShowDropDown(!showDropdown);
  };

  // 버스 종류 클릭 시 드롭다운 메뉴 표시
  const selectBusType = (bus) => {
    setImgNum(bus.key);
  };

  return (
    <Ul>
      {isMain ? (
        <Li onClick={onClickBusType}>
          버스 종류
          <BusTypeDropDownWrap>
            {busType.map((bus) => (
              <BusTypeDropDown
                key={bus.key}
                onClickCapture={() => {
                  selectBusType(bus);
                }}
                display={showDropdown ? "block" : "none"}
              >
                {bus.label}
              </BusTypeDropDown>
            ))}
          </BusTypeDropDownWrap>
        </Li>
      ) : (
        <></>
      )}
      <Li>소개</Li>
      <Li
        onClick={() => {
          nav("/contact");
        }}
      >
        문의
      </Li>
    </Ul>
  );
}

export default Navigation;
