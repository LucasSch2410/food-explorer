import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;

`

export const MainContainer = styled.div`
    &[data-set-scroll="true"] {
        height: 100vh;
        overflow: hidden;
    }
`

export const Edit = styled.div`
    max-width: 1190px;
    width: 100%;
    margin: 3rem auto;
    padding: 0 2rem;

    .return-label {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        margin-bottom: 2rem;
        cursor: pointer;

        p {
            font-family: 'Poppins';
            font-size: 1.5rem;
        }
    }

    .title h2 {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        h3 {
            font-family: 'Roboto';
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-size: 1rem;
            margin: 2rem 0 1rem 0;
        }

        svg {
            width: 2rem;
        }
    }

                
    .container-image-dish {

        label {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 4rem;
            justify-content: center;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            border-radius: 1rem;
            margin-top: 1.5rem;


            h3 {
                margin: 0;
            }

            > div {
                display: flex;
                align-items: center;
                gap: 0.7rem;
                margin-left: 2rem;
            }

            p {
                font-family: 'Poppins';
            }
        }

    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        .first-row {
            flex-direction: row;

            gap: 2rem;
            
            .container-image-dish {
                max-width: 230px;
                width: 100%;

                label {
                    > div {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    p {
                        font-size: 0.8rem;
                    }
                }

            }

            .container-name-dish {
                max-width: 463px;
                width: 100%;
            }

            .container-category-dish {
                max-width: 364px;
                width: 100%;
            }
        }

        .second-row {
            flex-direction: row;
            gap: 2rem;

            .container-ingredients {
                width: 100%;
            }

            .container-price {
                max-width: 250px;
                width: 100%;
                input {
                    margin-top: 0;
                }
            }
        }
    }

    .third-row {
        textarea {
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            border: none;
            border-radius: 1rem;
            padding: 1rem;
            margin-bottom: 2rem;
        }
    }

    #ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        width: 100%;
        padding: 0.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 1rem;
    }

    label:hover {
        cursor: pointer;
    }

    #image {
        display: none;
    }

    button {
        display: flex;
    }

    #buttons {
        display: flex;
        flex-direction: row;
        justify-content: end;

        gap: 2rem;

        > button {
            padding: 0;
        }

        #deleteButton {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }

        #deleteButton:hover {
            background-color: ${({ theme }) => theme.COLORS.DARK_700};
        }

        #submitButton {
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
        }

        #submitButton:hover {
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};
        }
    }


    @media(min-width: ${DEVICE_BREAKPOINTS.LG}) {
        #buttons > button {
            width: 190px;
            padding: 0;

            font-size: 1rem;
        }
    }
`