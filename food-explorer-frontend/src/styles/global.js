import { createGlobalStyle } from "styled-components";

import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
            font-size: 12px;
        }
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400}; 
    }

    body, input, button, textarea {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: ${({ theme }) => theme.COLORS.WHITE}; 
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }


`;