import react from "react";

const TheHeader = () => {
    return (
        <react.Fragment>
            <header>
                <div class="header-conteiner">
                    <div class="header-conteiner-h2">
                        <h1 align="center">RDRX</h1>
                    </div>
                    <div class="header-conteiner-nav">
                        <nav>
                            <div class="header-conteinter-nav-item">
                                <a href="./index.html">Home</a>
                            </div>
                            <div class="header-conteinter-nav-item">
                                <a href="./developmentes.html">Desarrollo</a>
                            </div>
                            <div class="header-conteinter-nav-item">
                                <a href="./productiones.html">Producción</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </react.Fragment>
    )
};

export { TheHeader };