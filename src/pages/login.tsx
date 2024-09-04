import CustomButton from "../components/custom-buttom/custom-buttom.component"
import CustomInput from "../components/custom-input/custom-input.component"
import Header from "../components/header/header.component"
import { LoginContainer, LoginContent, LoginHeadLine, LoginInputContainer, LoginSubtitle } from "./login.styles"
import {useForm} from "react-hook-form"


import {BsGoogle} from "react-icons/bs"
import {FiLogIn} from "react-icons/fi"


const LoginPage = ( ) => {

    const {register,
        formState:{errors},
        handleSubmit
                } = useForm()



    const handleSubmitPress = (data:any) => {

        console.log({data})

    }
    console.log({errors})
    return (
        <>

        <Header/>

        <LoginContainer>
        <LoginContent>

            <LoginHeadLine>Entre com sua conta!</LoginHeadLine>

                <CustomButton startIcon={<BsGoogle size={18}/>} >Entrar com o Google.</CustomButton>


                <LoginSubtitle>Ou entre com seu email</LoginSubtitle>

             <LoginInputContainer>
                <p>E-mail</p>
                <CustomInput placeholder="Digite seu e-mail" {...register("email",{required:true})} hasError={!!errors?.email} />
             </LoginInputContainer>
             <LoginInputContainer>
                <p>Senha</p>
                <CustomInput placeholder="Digite sua senha"  {...register("password",{required:true})} hasError={!!errors?.password}/>
             </LoginInputContainer>



                    <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}   startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>

            </LoginContent>
            
        </LoginContainer>
        
        
        
        
        </>
    )

}


export default LoginPage