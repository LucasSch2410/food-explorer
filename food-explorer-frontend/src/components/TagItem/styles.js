import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  font-family: 'Roboto';

  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.LIGHT_600};

  border: ${({ theme, isnew }) => isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 10px;
  padding-right: 8px;
  padding-left: 12px;

  > button { 
    border: none;
    background: none;

    &:hover {
        cursor: pointer;
    }
  }

  > input {
    color: ${({ theme, isnew }) => isnew ? theme.COLORS.LIGHT_300 : theme.COLORS.LIGHT_100};

    height: 36px;
    max-width: 5rem;

    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`