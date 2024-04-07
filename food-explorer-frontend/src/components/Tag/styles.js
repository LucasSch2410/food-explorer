import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    width: fit-content;
    padding: 0.7rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    font-size: 1.2rem;
`;