

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
    z-index: 2; 

    @media(max-width:768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    

`

export const HeaderTitle = styled.h2`

    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 20px;
    
    &:hover{
        cursor: pointer;
        color: ${Colors.primary};
        transition: 0.4s ease all;
    }

    @media(max-width:768px){
       margin-bottom:16px ;
    }


`

export const HeaderItens = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width:768px){
     width :100%;
    justify-content:space-evenly   }


`


export const HeaderItem = styled.div`

    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: 0.4s ease all;


    &:nth-child(1),&:nth-child(2),&:nth-child(3){
        margin-right: 40px;
        @media(max-width:768px){
       margin-right: 0;
    }
    }

    &:hover{
        cursor: pointer;
        color: ${Colors.primary};
        transition: 0.4s ease all;
    }

`

export const HeaderTitleLogo = styled.div`
display: flex;
align-items: center; 

@media(max-width:768px){
       margin-bottom:16px ;
    }


`

export const HeaderLogo = styled.img `

    width: 100px;
    height: auto; /* Mantém a proporção da imagem */


`









