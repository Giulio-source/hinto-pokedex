import styled from "styled-components";

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const Logo = () => {
  return <StyledLogo src="/psyduck.png" alt="psyduck-logo" />;
};
