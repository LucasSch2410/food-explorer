import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins';

    width: 100%;
    height: 3.8rem;
    padding: 1.2rem 3.3rem;
    gap: 0.3rem;
    border: 0;
    border-radius: 0.5rem;
    
    font-weight: 500;
    font-size: 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200}
    }
`;