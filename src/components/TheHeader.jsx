import React from "react";
import styled from "styled-components";

const HeaderContiner = styled.div`
    margin: 0;
    padding: .5rem;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const HeaderContainerH2 = styled.div`
    font-size: 4rem;
    color: rgb(218, 165, 31);
`

const HeaderContainerNav = styled.div`
    padding: .5rem;
    margin-right: auto;
    margin-left: auto;
    font-size: var(--font);
    display: inline;
    position: relative;
    width: 100%;
`

const TheHeader = () => {
    return (
        <React.Fragment>
            <header>
                <HeaderContiner>
                    <HeaderContainerH2>
                        <h1 align="center">RDRX</h1>
                    </HeaderContainerH2>
                    <HeaderContainerNav>
                        <nav style={{padding: ".5rem"}}>
                            <div style={{padding: "1rem", display: "inline-block"}}>
                                <a href="./index.html">Home</a>
                            </div>
                            <div style={{padding: "1rem", display: "inline-block"}}>
                                <a href="./developmentes.html">Desarrollo</a>
                            </div>
                            <div style={{padding: "1rem", display: "inline-block"}}>
                                <a href="./productiones.html">Producción</a>
                            </div>
                        </nav>
                    </HeaderContainerNav>
                </HeaderContiner>
            </header>
        </React.Fragment>
    )
};

export { TheHeader };