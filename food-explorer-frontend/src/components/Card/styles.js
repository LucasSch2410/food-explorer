import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints.js"

export const Container = styled.div`

    display: none;
    flex-direction: column;
    width: 18rem;
    height: 28rem;
    gap: 1.2rem;
    padding: 2rem 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 10px;

    text-align: center;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .icon {
        position: absolute;
        right: 1rem;
        top: 1rem;

        cursor: pointer;
    }

    .item-image{
        cursor: pointer;

        img {
            width: 60%;
        }
    }

    .about-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 1rem;

        cursor: pointer;

        > div {
            display: flex;
            align-items: center;
            gap: 0.2rem;
        }
    }

    .quantity-container {
        display: flex;
        gap: 1rem;
    }

    .quantity-container button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        cursor: pointer;
    }

    .price-meal {
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
        font-size: 1.3rem;
    }

    .buy-button {
        width: 80%;
        height: 3rem;
        font-size: 1.3rem;
    }

    .item-footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        
        width: 20rem;
        height: 29rem;
        gap: 1.5rem;

        .item-footer {
            flex-direction: row;
            gap: 2rem;
        }

        .item-footer > button {
            width: fit-content;
            padding: 1rem 1.5rem;
            font-size: 1rem;
        }

        .swiper-wrapper {
            margin: 0 auto;
            display: flex;
            justify-content: start;
        }

        .price-meal {
            font-size: 1.8rem;
        }
    }

`

