import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
    padding: 3rem;
    width: 400px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const AboutConteinerh2 = styled.div`
    color: rgb(218, 165, 31);
    font-size: 2.5rem;
    padding: 1rem;
`


const AboutConteinerText = styled.div`
    padding: 2rem;
    color: rgb(255,255,255);
` 

const CardContainer = styled.div`
    width: 30rem;
    height: 55rem;
    background: rgb(241, 189, 15);
    color: rgb(255, 255, 255);
    border-radius: 50px;
    box-shadow: whitesmoke 3px 5px 34px 2px;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
`


const About = () => {
    return (
        <section class="about">
            <AboutContainer>
                <div class="item">
                    <CardContainer>
                        <div style={{"width": "100%", "object-fit": "contain"}}>
                            <img src="https://avatars.githubusercontent.com/u/57158796?v=4" alt="self-portrait" />
                        </div>
                        <p>RDRX</p>
                        <p>Computer systems engineering student</p>
                    </CardContainer>
                </div>
                <AboutConteinerh2>
                    <h2>
                        Sobre mí
                    </h2>
                </AboutConteinerh2>
                <AboutConteinerText>
                    <p>Rodrigo Ramos Xochiteotzin. 27 años. México.</p> <br />
                    <p>Estudiante de Desarrollo de Software en Platzi. Egresado de la Licenciatura en Filosofía, UNAM. Investigo. Programo.</p>
                    <p>Me interesa el blockchain y sus posibilidades, Procesamiento de Lenguaje Natural y la Cibernética.</p>
                </AboutConteinerText>
            </AboutContainer>
        </section>
    )
};

export { About };
