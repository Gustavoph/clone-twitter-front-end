import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${({ theme }) => css`
    width: 27.5rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.paddings.xlarge};
    padding-top: 0;
  `}
`;
