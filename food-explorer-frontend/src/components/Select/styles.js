import styled from 'styled-components';
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    width: 100%;
    position: relative;

    > select {
        width: 100%;
        height: 4rem;
        font-size: 1rem;
        margin-top: 0.6rem;

        padding-left: 1rem;
        border: none;

        background: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        border-radius: 0.7rem;
        appearance: unset;
    }

    svg {
        position: absolute;
        right: 1rem;
        top: 1rem;
    }
`;