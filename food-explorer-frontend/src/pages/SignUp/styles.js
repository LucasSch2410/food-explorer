import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;
    max-width: 32rem;
    height: 100vh;
    padding: 0 2rem;

    .redirect{
        font-family: 'Poppins';
        font-weight: 500;
        text-align: center;
        p {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
    
    .sign-div h1 {
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 1200px;
        padding: 0 2rem;
        gap: 1rem;

        flex-direction: row;
        max-width: 100%;

        justify-content: space-between;

        .sign-div {
            max-width: 33rem;
            width: 100%;
            padding: 5rem 5rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-self: center;

            background-color: ${({ theme }) => theme.COLORS.DARK_700};
            border-radius: 1.5rem;

            h1 {
                display: block;
                text-align: center;
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 2rem;
                margin-bottom: 2rem;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    label {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    input {
        &:focus {
            outline: 1px solid white;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-bottom: 3rem;

    h1 {
        font-size: 2.5rem;
    }

    svg {
        width: 3rem;
        height: auto;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-bottom: 0rem;

        h1 {
            font-size: 3rem;
        }

        svg {
            width: 4rem;
            height: auto;
        }
    }
`;

