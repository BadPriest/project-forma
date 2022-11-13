import styled from 'styled-components';

const ResetButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;
  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
`;

export const BaseButton = styled(ResetButton)`
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-weight: bold;
  font-size: 0.9rem;

  cursor: pointer;

  text-transform: uppercase;
  padding: 0.5em 1.4em;

  color: ${({ theme }) => theme.colors.interactive.surface};
  border: 1px solid ${({ theme }) => theme.colors.interactive.surface};

  &:hover {
    color: ${({ theme }) => theme.colors.interactive.textActive};
    background-color: ${({ theme }) => theme.colors.interactive.surfaceActive};
  }
`;

export const CircleButton = styled(BaseButton)`
  padding: 1em;
  border-radius: 50%;
`;

export default ResetButton;
