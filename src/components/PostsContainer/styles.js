import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    width: 60rem;
    height: 100vh;
    background-color: #c1c1c1;
    border-left: 1px solid #8899a6;
    border-right: 1px solid #8899a6;
    grid-area: center;
  `}
`;
