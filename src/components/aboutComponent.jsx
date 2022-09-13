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
    color: rgb(0,0,0);
` 




const About = () => {
    return (
        <section class="about">
            <AboutContainer>
                <div class="item">
                    <div class="card-container">
                        <div class="card-container-img">
                            <img src="../../assets/img/mm.jpg" alt="self-portrait" />
                        </div>
                        <p>RDRX</p>
                        <p>Computer systems engineering student</p>
                    </div>
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
