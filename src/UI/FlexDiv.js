import styled, { css } from "styled-components";

const borderBoxStyle = css`
  box-sizing: border-box;
`;

const borderRadiusStyle = css`
  border-radius: 4px;
`;

const grayBordersStyle = css`
  border: ${({ theme: { Colors } }) => `1px solid ${Colors.gray[1]}`};
`;

const thickLeftBorderStyle = css`
  border-left-width: 8px;
`;

export const FlexDiv = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ disabled, theme: { Colors } }) =>
    disabled ? Colors.gray[0] : "inherit"};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  ::-webkit-justify-content {
    justify-content: ${({ justifyContent }) => justifyContent};
  }
  ${({ borderBox }) => borderBox && borderBoxStyle};
  ${({ grayBorders }) => grayBorders && grayBordersStyle};
  ${({ roundedBorders }) => roundedBorders && borderRadiusStyle};
  ${({ thickLeftBorder }) => thickLeftBorder && thickLeftBorderStyle};
`;

export default FlexDiv;
