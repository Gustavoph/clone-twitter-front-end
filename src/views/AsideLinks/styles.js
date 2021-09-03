import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    width: auto;
    height: 5rem;
    display: flex;
    padding: ${theme.paddings.medium};
    justify-content: left;
    align-items: center;

    font-family: 1.9rem;
    color: ${theme.colors.white};

    & > img {
      margin-right: ${theme.margins.medium};
      width: 2.4rem;
    }

    &:hover {
      background-color: #3a444c;
      border-radius: 5rem;
    }
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    margin-left: ${theme.margins.medium};
    width: 3rem;
    height: 3rem;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 25.5rem;
    height: 6rem;
    display: flex;
    justify-content: left;
    align-items: center;
  `}
`;
