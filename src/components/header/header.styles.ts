

import styled from "styled-components"

import Colors from "../../theme/theme.colors"



export const HeaderContainer = styled.div`


    width: 100%;
    background-color: ${Colors.background.dark};
    backdrop-filter: blur(10px); 
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: ${Colors.text.white};
    position: relative; 
    z-index: 1; 

`

export const HeaderTitle = styled.h2`

    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 20px; /* Espaçamento entre o título e o logo */
    
    &:hover{
        cursor: pointer;
        color: ${Colors.primary};
        transition: 0.4s ease all;
    }


`

export const HeaderItens = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;


`


export const HeaderItem = styled.div`

    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: 0.4s ease all;


    &:nth-child(1),&:nth-child(2),&:nth-child(3){
        margin-right: 40px;
    }

    &:hover{
        cursor: pointer;
        color: ${Colors.primary};
        transition: 0.4s ease all;
    }

`

export const HeaderTitleLogo = styled.div`
display: flex;
align-items: center; /* Alinha verticalmente o título e o logo */


`

export const HeaderLogo = styled.img `

    width: 100px;
    height: auto; /* Mantém a proporção da imagem */


`









