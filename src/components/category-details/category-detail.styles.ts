import styled from "styled-components";


export const Container = styled.div`

padding:0px 40px 20px 40px;



`

export const CategoryTitle = styled.div`

display: flex;
align-items: center;
margin-top: 20px;

p{
    font-size: 21px;
    font-weight: 500;
}


`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: start;
  margin-top: 5px;
  grid-row-gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 100%;
      height: auto; /* Garante que a imagem não fique distorcida */
    }

    p {
      margin-top: 10px; /* Adiciona espaçamento entre a imagem e o nome */
      font-size: 18px;
      font-weight: 500;
    }
  }
`;


export const IconContainer = styled.div`

display: flex;

&:hover{
    cursor: pointer;
}
`