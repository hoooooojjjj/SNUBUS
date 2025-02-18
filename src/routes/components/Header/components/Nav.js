import { useContext, useState } from "react";
import { Li, BusTypeDropDown, BusTypeDropDownWrap, Ul } from "./NavStyle";
import { imgNumContext } from "../../../Main/Main";
import { useNavigate } from "react-router-dom";

const busType = [
  { key: "0", label: "지선 버스" },
  { key: "1", label: "마을 버스" },
];

// 드롭다운 메뉴 리스트 렌더링 컴포넌트
function DropDownList({ showDropdown }) {
  // context API -> imgNum 상태 가져오기
  const [imgNum, setImgNum] = useContext(imgNumContext) || [];

  // 버스 종류 클릭 시 배경 이미지 변경
  const selectBusType = (bus) => {
    setImgNum(bus.key);
  };

  return (
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
  );
}

// 드롭다운 메뉴 렌더링 컴포넌트
function DropDown({ isMain }) {
  // 드롭다운 메뉴 표시 여부
  const [showDropdown, setShowDropDown] = useState(false);

  // 버스 종류 클릭 시 드롭다운 메뉴 표시
  const onClickBusType = () => {
    setShowDropDown(!showDropdown);
  };

  return isMain ? (
    <Li onClick={onClickBusType}>
      버스 종류
      <DropDownList showDropdown={showDropdown} />
    </Li>
  ) : (
    <></>
  );
}

// Navigation List 렌더링 컴포넌트
function NavLi({ path, name }) {
  const nav = useNavigate();

  const onNavLiClick = (path) => {
    nav(path);
  };
  return <Li onClick={() => onNavLiClick(path)}>{name}</Li>;
}

// Navigation 렌더링 컴포넌트
function Navigation({ isMain }) {
  return (
    <Ul>
      <DropDown isMain={isMain} />
      <NavLi path={"/"} name={"소개"} />
      <NavLi path={"/contact"} name={"문의"} />
    </Ul>
  );
}

export default Navigation;
