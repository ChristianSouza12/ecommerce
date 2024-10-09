import styled from "styled-components";

import Colors from "../../theme/theme.colors";

export const CheckOutContainer = styled.div`

display: flex;
align-items: center;
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
overflow: hidden;

p{
    color:${Colors.text.dark}
}

button{
    width: 650px;
    
}

@media(max-width:768px){
    button{
        width: 100%;
    }
    padding:30px;
        
    }



`
export const CheckOutTitle = styled.p`


font-weight: bold;
font-size: 1.4rem;

`

export const CheckOutProducts = styled.div`

min-width: 650px;
overflow-y: scroll;
margin-top: 15px;
margin-bottom: 15px;





::-webkit-scrollbar{
    width: 5px;
}

::-webkit-scrollbar-track{
    background: ${Colors.input.background};

}

::-webkit-scrollbar-thumb{
    background: ${Colors.text.dark};
}

::-webkit-scrollbar-thumb:hover{
    background: ${Colors.text.dark};
}

@media(max-width:768px){
    min-width: 100%;
        
    }




`




export const CheckOutTotal = styled.p `

width: 650px;
font-size: 1.2rem;
font-weight: 600;
margin-bottom: 15px;

@media(max-width:768px){
    width: 100%;
        
    }




`
