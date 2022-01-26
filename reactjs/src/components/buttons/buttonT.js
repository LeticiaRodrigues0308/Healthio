import styled from 'styled-components'

const ButtonTransparent = styled.div`
    background-color: #3B3A4C;
    font-weight: 600;
    color: white;
    border: 0;
    border-radius: 10px;
    width: 108px;
    height: 33px;
    margin-top: -.4em;
    font-size: 16px;

    &hover {
    transform: scale(1.1);
    transition: all 1s;
}
`

export{ButtonTransparent}