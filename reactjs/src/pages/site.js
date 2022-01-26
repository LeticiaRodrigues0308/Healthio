import { ContainerHealthio } from "./styled"


export default function Healthio(){
    return(
        <ContainerHealthio>
            
            {/* faixa 1 */}

            <div className="container">
                <div class="faixa2">
                    <div class="titulo">Veja por que nos escolher</div>

                    <div class="box-opcoes">
                        <div class="item">
                            <div class="img-item"><img src="./assets/images/lamp.svg" alt=""/></div>
                            <div class="titulo-box">Ideia inovadora</div>
                            <div class="ds-item">Quando inovação e tecnologia se encontram. Foi assim que nosso produto foi criado.</div>
                        </div>

                        <div class="item">
                            <div class="img-item"><img src="./assets/images/layer.svg" alt=""/></div>
                            <div class="titulo-box">User friendly</div>
                            <div class="ds-item">Experiência do usuário é importante para nós. Nosso App é muito intuitivo, então você sabe o que fazer.</div>
                        </div>

                        <div class="item">
                            <div class="img-item"><img src="./assets/images/pencil.svg" alt=""/></div>
                            <div class="titulo-box">Design unico</div>
                            <div class="ds-item">Modo escuro e lindas cores no design como resposta à tendencia do design atual.</div>
                        </div>

                        <div class="item">
                            <div class="img-item"><img src="./assets/images/phone.svg" alt=""/></div>
                            <div class="titulo-box">Navegação intuitiva</div>
                            <div class="ds-item">Cada elemento em seu lugar! Um botão de menu e elementos ativos destacados.</div>
                        </div>
                    </div>
                </div>


                {/* // faixa 3 */}


                <div class="faixa4">
                    <div class="fx1">
                        <div class="celular1"><img src="./assets/images/cell1.svg" alt=""/></div>
                        <div class="celular2"><img src="./assets/images/cell2.svg" alt=""/></div>

                        <div class="box-texto">
                            <div class="titulo">O que você está esperando? Faça o download!</div>
                            <div class="descricao">Instale o aplicativo health.io. Comece a monitorar e cuidar da sua saúde.</div>
                            {/* botao purple */}
                        </div>
                    </div>

                    {/* rodape */}

                    </div>
            </div>
        </ContainerHealthio>
    )
}