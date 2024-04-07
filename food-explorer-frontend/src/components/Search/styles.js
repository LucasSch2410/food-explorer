import styled from 'styled-components';
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 52px;
    align-items: center;
    border-radius: 0.7rem;

    background: ${({ theme }) => theme.COLORS.DARK_900};

    > input {
        width: 100%;
        font-size: 1rem;

        padding: 0.5rem 0.8rem;
        border: none;


        background-color: transparent;
    }

    > svg{
        margin-left: 16px;
    }
`;