import styled from "styled-components";

export const Container = styled.section`
  padding: 1.5em 12rem;
  min-height: 100%;

  color: ${(props) => props.theme.colors.text};
`;

export default Container;
