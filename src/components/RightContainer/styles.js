import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${({ theme }) => css`
    background-color: #555;
    width: 35rem;
    height: 100vh;
  `}
`;
