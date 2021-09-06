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

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: #1da1f2;
    border: none;
    height: 4.9rem;
    width: 22.8rem;
    border-radius: 5rem;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1.5rem;

    &:hover {
      background: #1da9f9;
      cursor: pointer;
    }
  `}
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  `}
`;

export const AvatarContent = styled.div`
  ${({ theme }) => css`
    color: white;
    display: flex;
    width: auto;
    height: 5rem;
    padding: ${theme.paddings.medium};

    &:hover {
      background-color: #3a444c;
      border-radius: 5rem;
    }
  `}
`;

export const AvatarIcon = styled.img`
  ${({ theme }) => css`
    width: 1.7rem;
    height: 0.9rem;
  `}
`;
