

import styled from "styled-components";
import Colors from "../../theme/theme.colors"






export const CategoryItemContainer = styled.div  `

display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    grid-gap: 15px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0,0,0, 0.25);
    background-color: ${Colors.background.dark};
    
    



`

export const CategoryName = styled.div`
    color: white;
    text-align: center;
    background: rgba(76, 115, 80, 0.75); /* Verde com opacidade de 75% */
    padding: 10px 30px;
    border-radius: 10px;
    border: 1px solid ${Colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;

    &:hover {
        cursor: pointer;
        background: ${Colors.background.white}; /* Fundo sem opacidade no hover */
        color: ${Colors.text.dark};
    }

    & p :nth-child(1) {
        font-weight: 600;
    }
`;

