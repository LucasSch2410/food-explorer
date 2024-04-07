import styled from "styled-components"


export const MainContainer = styled.div`
    &[data-set-scroll="true"] {
        height: 100vh;
        overflow: hidden;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;

`