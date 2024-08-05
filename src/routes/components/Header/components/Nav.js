import { useContext, useState } from "react";
import { Li, BusTypeDropDown, BusTypeDropDownWrap, Ul } from "./NavStyle";
import { imgNumContext } from "../../../Main/Main";
import { useNavigate } from "react-router-dom";

/* - Navigation 컴포넌트 (Headers 컴포넌트 하위)
    1. 이 컴포넌트가 하는 일
        1. isMain props로 메인 페이지인지 아닌지 판단하여 버스 종류 드롭다운 메뉴 렌더링
            1. Component 기능으로 분리 →  DropDown 컴포넌트
        2. 버스 종류 클릭 시 드롭다운 메뉴 표시 및 버스 종류 선택 시 배경 이미지 변경
            1. Component 기능으로 분리 →  DropDownList 컴포넌트
        3. 소개, 문의 버튼 렌더링, 소개, 문의 버튼 클릭 시 각 페이지로 이동
            1. Component 기능으로 분리 →  NavLi 컴포넌트
*/

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
      <NavLi path={"/intro"} name={"소개"} />
      <NavLi path={"/contact"} name={"문의"} />
    </Ul>
  );
}

export default Navigation;
