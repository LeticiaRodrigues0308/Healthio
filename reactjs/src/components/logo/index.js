import styled from 'styled-components'

export default function Logo() {
    return(
        <ContainerLogo>
            <div class="logo">HEALTH.IO</div>
        </ContainerLogo>
    )
}


const ContainerLogo = styled.div`
     background-image: linear-gradient(to bottom, #ECAA80 , #725DE5);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
  
    /* Adicionado: */
    -webkit-text-fill-color: transparent;
`
