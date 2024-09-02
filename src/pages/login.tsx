import CustomButton from "../components/custom-buttom/custom-buttom.component"
import CustomInput from "../components/custom-input/custom-input.component"
import Header from "../components/header/header.component"
import { LoginContainer, LoginContent, LoginHeadLine, LoginInputContainer, LoginSubtitle } from "./login.styles"

import {BsGoogle} from "react-icons/bs"
import {FiLogIn} from "react-icons/fi"


const LoginPage = ( ) => {

    return (
        <>

        <Header/>

        <LoginContainer>
        <LoginContent>

            <LoginHeadLine>Entre com sua conta!</LoginHeadLine>

                <CustomButton startIcon={<BsGoogle size={18}/>} >Entrar com o Google.</CustomButton>


                <LoginSubtitle>Ou entre com seu email</LoginSubtitle>

             <LoginInputContainer>
                <CustomInput placeholder="Digite seu e-mail"  />
             </LoginInputContainer>
             <LoginInputContainer>
                <CustomInput placeholder="Digite sua senha"/>
             </LoginInputContainer>



                    <CustomButton startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>

            </LoginContent>
            
        </LoginContainer>
        
        
        
        
        </>
    )

}


export default LoginPage