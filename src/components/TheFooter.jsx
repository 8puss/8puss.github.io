import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    padding: 5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const FooterContainerUl = styled.div`
    display: inline;
    padding: .5rem;
`

const FooterContainerUlItem = styled.div`
    display: inline-block;
    padding: 1rem;
`


const TheFooter = () => {
    return (
        <React.Fragment>
            <footer>
                <FooterContainer>
                    <FooterContainerUl>
                        <ul>
                            <FooterContainerUlItem>
                                <li> 
                                    <a href="#">Contacto</a>
                                </li>
                            </FooterContainerUlItem>
                            <FooterContainerUlItem>
                                <li>
                                    <a href="../EN/englishversion.html">EN</a>
                                </li>
                            </FooterContainerUlItem>
                        </ul>
                    </FooterContainerUl>
                </FooterContainer>
            </footer>
        </React.Fragment>
        )
};

export { TheFooter };

