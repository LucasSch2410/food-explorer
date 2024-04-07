import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints.js"

export const Container = styled.div`
    height: 100%;
    padding: 2rem 3rem;
    max-width: 600px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .quantity-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .quantity-container button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        cursor: pointer;
    }

    .buy-button {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        padding: 0;
    }

    .item-footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .image-container {
        display: flex;
        justify-content: center;
        margin: 2rem 0;

        img {
            width: 85%;
            align-self: center;
        }
    }

    .return-container {
        align-self: self-start;
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        cursor: pointer;

        h2 {
            font-family: 'Poppins';
            font-weight: 400;
            font-size: 1.8rem;
        }

        svg {
            width: 1.4rem;
            height: auto;
        }
    }

    .text-dish {
        text-align: center;
        display: flex;
        flex-direction: column;

        padding: 0 1rem;
        gap: 2.5rem;

        h2 {
            font-family: 'Poppins';
            font-weight: 400;
            font-size: 1.8rem;
        }

        p {
            font-family: 'Poppins';
        }
    }

    .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {

        max-width: 1190px;
        width: 100%;
        padding: 0 2rem;

        .image-container {
            width: 40%;
        }

        .text-dish {
            text-align: start;
            width: 60%;

            h2 {
                font-weight: 500;
                font-size: 2.5rem;
            }

            p {
                font-size: 1.8rem;
            }
        }

        .dishItem-container {
            display: flex;
        }

        .item-footer {
            justify-content: start;
            flex-direction: row;
            gap: 2rem;
        }

        .item-footer > button {
            width: fit-content;
            padding: 1rem 1.5rem;
            font-size: 1rem;
        }
    }
`