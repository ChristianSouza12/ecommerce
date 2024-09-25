import styled from "styled-components";

interface ProductImageProps {
  imageUrl: string;
}

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  margin: 10px;
`;

export const ProductImage = styled.div<ProductImageProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 380px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden; /* Garante que o conteúdo dentro da imagem seja contido */

  button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    
    padding: 10px;
    background-color: rgba(120,128,79,0.5);
    color: white;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition:0.3s ease-in-out;
    
  }

 

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    background-blend-mode: color;
    cursor: pointer;
    transition:0.4s ease-in-out;

    button {
      visibility: visible;
      opacity: 1;

      &:active{
    opacity: 0.5;
  }
    }
 
  }
  
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`;
