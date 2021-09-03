import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 125.5rem;
    display: grid;
    grid-template-columns: 27.5rem 60rem 35rem;
    grid-template-areas: 'left center right';
  `}
`;
