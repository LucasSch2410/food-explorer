import styled from 'styled-components';
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    width: 100%;

    > input {
        width: 100%;
        height: 4rem;
        font-size: 1rem;
        margin-top: 0.6rem;

        padding: 0.5rem 0.8rem;
        border: none;

        background: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 0.7rem;

        &:focus {
            outline: 1px solid white;
        }
    }
`;