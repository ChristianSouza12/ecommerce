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
      height: auto; 
    }

    p {
      margin-top: 10px; 
      font-size: 18px;
      font-weight: 500;
    }
  }

  @media(max-width:768px){
    display: flex;
    flex-direction: column;
        
      }
`;


export const IconContainer = styled.div`

display: flex;

&:hover{
    cursor: pointer;
    color: #78804f;
    transition: 0.3s ease ease-in-out;
}
`