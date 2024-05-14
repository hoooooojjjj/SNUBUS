import { Li, Ul } from "./NavStyle";

function Navigation({ handleScroll }) {
  return (
    <Ul>
      <Li
        onClick={(e) => {
          handleScroll("FeederBus");
        }}
      >
        지선버스
      </Li>
      <Li
        onClick={(e) => {
          handleScroll("MainlineBus");
        }}
      >
        간선버스
      </Li>
      <Li
        onClick={(e) => {
          handleScroll("ViligeBus");
        }}
      >
        마을버스
      </Li>
    </Ul>
  );
}

export default Navigation;
