 import styled from 'styled-components'


 const ContainerHealthio = styled.div`

    /* faixa 1 */

    .faixa2 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titulo {
        font-weight: 700;
        font-size: 1.8em;
        color: white;
        margin-top: 3em;
        line-height: 1.5em;
    }

    .box-opcoes {
        display: flex;
        padding: 5em 8em;
        justify-content: space-around;
        width: 70em;
    }

    .item {
        font-size: 1em;
        width: 15em;
        text-align: center;
        cursor: pointer;
    }

    img{
        width: 5.5em;
        margin-bottom: 1em;
    }

    .titulo-box {
        color: white;
        font-weight: 700;
        margin-bottom: 1em;
    }

    .ds-item {
        color: #92919D;
    }


    /* faixa 3 */


    .fx1 {
        position: absolute;
        background: linear-gradient(86.08deg, #ECAA80 0%, #725DE5 100%);
        padding-top: 12.4em;
        display: flex;
        width: 100vw;
        height: 100%;
    }

    .celular1 img{
        width: 15em;
        position: relative;
        left: 10em;
    }

    .celular2 img{
        width: 16em;
        position: relative;
        left: 4em;
        bottom: 4.6em;
    }

    .box-texto {
        margin-left: 12em;
    }

    .titulo {
        font-size: 2.3em;
        font-weight: 700;
        color: white;
        width: 15em;
        margin-bottom: 1em;
    }

    .descricao {
        color: #CBCBCB;
        width: 26em;
        margin-bottom: 2em;
    }

    .box-redes {
        padding: 5em 23em 0em 0em;
    }

    .redes-sociais {
        display: flex;
        justify-content: space-between;
        width: 10em;
        margin-top: 1em;
    }

    .icon {
        width: 1.8em;
        height: 1.8em;
        background-color: #725DE5;
        border-radius: 50px;
        cursor: pointer;
    }

    .icon img {
        padding: .3em;
    }

    .box-funcionalidades {
        color: #92919D;
        padding-top: 5em;
        display: flex;
    }

    .box-funcoes {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 7.5em;
        margin-right: 6em;
    }

    .titulo-box {
        margin-bottom: .5em;
        font-size: 1.1em;
    }

    .item {
        cursor: pointer;
    }

    .item:hover {
        text-decoration: underline;
    }

    .box-local {
        color: #92919D;
        margin-top: 5em;
    }

    .titulo-box {
        margin-bottom: 1.2em;
    }

    .box-contato {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 43em;
    }
 `

 export{ContainerHealthio}