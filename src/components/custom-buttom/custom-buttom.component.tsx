import React , { FunctionComponent, ReactNode , ButtonHTMLAttributes } from "react";
import { CustomButtonContainer, IconContainer } from "./custom-button.styles";








// Define um tipo para as propriedades que o componente deve aceitar
interface CustomButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
  children: ReactNode;
  startIcon?: React.ReactNode
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({ children, startIcon, ...rest}) => {
  return <CustomButtonContainer {...rest}>
    
    {startIcon && <IconContainer>{startIcon}</IconContainer>}


    
    {children}</CustomButtonContainer>;
};

export default CustomButton;
