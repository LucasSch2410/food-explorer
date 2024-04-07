import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const MainContainer = styled.div`
    &[data-set-scroll="true"] {
        height: 100vh;
        overflow: hidden;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;

    --swiper-navigation-color: ${({ theme }) => theme.COLORS.WHITE};

    &[data-set-scroll="true"] {
        overflow: hidden;
    }
`

export const Main = styled.section`

    display: flex;
    justify-content: center;

    margin-top: 3rem;

    .container-flavor {
        display: flex;
        justify-content: center;
        align-items: end;

        max-width: 1120px;
        width: 100%;
        height: 10rem;
        margin: 0 2rem;

        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 10px;
    }

    .flavor-text{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        
        text-align: start;
        height: 100%;

        padding-right: 1rem;
    }

    .flavor-image{
        margin-left: -30px;
        margin-bottom: -3px;
    }

    h1 {
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 1.1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
        margin-top: 0.5rem;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.6rem;
    }

    img {
        width: 15rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.SM}) {
        h1 {
            font-size: 1.4rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-top: 5rem;

        .container-flavor {
            height: 20rem;
        }   

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1.5rem;
        }

        img {
            width: 30rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-top: 12rem;

        .container-flavor {
            height: 16rem;
        }      

        img {
            width: 40rem;
        }

        .flavor-image{
            margin-left: -150px;
            margin-bottom: -17px;
        }

        h1 {
            font-size: 2.7rem;
            font-weight: 500;
        }

        p {
            font-size: 1.1rem;
        }
    }
`
