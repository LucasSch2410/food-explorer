import styled from "styled-components"

export const Container = styled.footer`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 5rem;
    padding: 1rem 1rem;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        height: 100%;
        gap: 1rem;

    }

    p {
        text-align: justify;
        font-size: min(3vw, 1rem);
    }

`

export const Logo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    min-width: fit-content;

    h1 {
        font-size: min(1.5rem, 4vw);
    }

    svg {
        width: min(5vw, 2rem);
        height: auto;
    }
`