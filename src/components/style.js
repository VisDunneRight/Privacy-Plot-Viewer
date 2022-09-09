import styled, { css } from "styled-components";
import { Image, Col } from "react-bootstrap";

export const MyImg = styled(Image)`
  padding: 0px;
  ${(props) =>
    props.selected &&
    css`
      background: cornflowerblue;
    `};
`;

export const MyCol = styled(Col)`
  padding: 0px;
`;
