import useStore_imgNum from "../../store/imgNumStore";
import { Li, Ul } from "./NavStyle";

function Navigation() {
  // zustand -> imgNum 상태 가져오기
  const switchToZero = useStore_imgNum().ToZero;
  const switchToOne = useStore_imgNum().ToOne;
  const switchToTwo = useStore_imgNum().ToTwo;
  return (
    <Ul>
      <Li onClick={switchToZero}>지선버스</Li>
      <Li onClick={switchToOne}>마을버스</Li>
      <Li onClick={switchToTwo}>간선버스</Li>
    </Ul>
  );
}

export default Navigation;
