import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 2rem 2rem 2rem 2rem;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1122px;
        width: 100%;
        margin: 0 auto;

        gap: 2rem;
    }

    input{
        margin-top: 0px;
        height: 50px;
    }

    .button-container {
        width: fit-content;
        white-space: nowrap;
        button {
            width: 100%;
            padding: 1.2rem 1rem;
        }
    }

    .admin {
        font-family: 'Roboto';
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    }

`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-width: 200px;
    cursor: pointer;
    text-align: end;

    h1 {
        font-size: 1.5rem;
    }

    svg {
        width: 2rem;
        height: auto;
    }
`;

export const Exit = styled.button`
    background-color: transparent;
    border: none;
    display: flex;

    svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        &:hover {
            cursor: pointer;
        }
    }
`;