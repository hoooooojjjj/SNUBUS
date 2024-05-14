import styled from "@emotion/styled";
import { flex } from "../../util/publicStyleComponets";

// article wrap
export const Article = styled.article({
  height: 600,
  ...flex("column", "center", "normal"),
});

// article header
export const H2 = styled.h2({
  paddingTop: 50,
  width: "70%",
  margin: "0 auto",
  marginBottom: 20,
});
