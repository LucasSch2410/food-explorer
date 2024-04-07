import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 2rem 2rem 2rem 2rem;

    .receipt {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .admin {
        font-family: 'Roboto';
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    }

`;

export const Menu = styled.button`
    background-color: transparent;
    border: none;
    display: block;

    svg {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .requests-container {
        position: relative;
    }

    .request-number {
        position: absolute;
        top: -5px;
        right: -10px;
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
        padding: 0.2rem 0.5rem;
        border-radius: 1rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        font-size: 1.5rem;
    }

    svg {
        width: 2rem;
        height: auto;
    }
`;

