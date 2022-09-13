import React from "react";
import { TheHeader } from "../components/TheHeader";
import { TheFooter } from "../components/TheFooter";
import { About } from "../components/aboutComponent";
import styled from "styled-components";

const MainContainer = styled.main`
font-size: 1.8rem;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
flex-direction: column;
`

const App = () => {
    return (
        <React.Fragment>
            <MainContainer>
                <TheHeader/>
                <About />
            </MainContainer>
            <TheFooter />
        </React.Fragment>
    )
};

export { App };