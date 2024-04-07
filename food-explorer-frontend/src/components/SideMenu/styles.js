import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    z-index: 999;

    .info-menu{
        display: flex;
        flex-direction: column;
        padding-top: 5rem;
        width: 90%;
        margin: 0 auto;
        gap: 4rem;
    }

    input {
        font-size: 1.5rem;
    }

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
        transform: translateX(0);
    }

`

export const Header = styled.header`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 6.8rem;
    width: 100%;

    > div {
        display: flex;
        align-items: end;
        width: 91%;
        height: 75%;
        margin: 0 auto;

        gap: 1rem;

        h1 {
            font-weight: 400;
            font-family: 'Roboto';
        }
    }
`


export const Exit = styled.div`

    h1 {
        font-size: 2.2rem;
        font-weight: 400;
        font-family: 'Poppins';
    }

    .end-line {
        margin-top: 1rem;
        height: 1px;
        width: 100%;
        border-top: 1px solid;
        border-color: ${({ theme }) => theme.COLORS.DARK_1000};
    }
`