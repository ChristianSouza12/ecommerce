import CustomButton from "../components/custom-buttom/custom-buttom.component"
import CustomInput from "../components/custom-input/custom-input.component"
import Header from "../components/header/header.component"
import InputErrorMessage from "../components/input-error-message/input-error-message.component"
import { LoginContainer, LoginContent, LoginHeadLine, LoginInputContainer, LoginSubtitle } from "./login.styles"
import {useForm} from "react-hook-form"
import validator from "validator"

import {BsGoogle} from "react-icons/bs"
import {FiLogIn} from "react-icons/fi"
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase.config"


interface LoginForm {
    email:string;
    password: string;
}


const LoginPage = ( ) => {

    const {register,
        formState:{errors},
        handleSubmit,
        setError,
                } = useForm<LoginForm>()



    const handleSubmitPress = async (data:LoginForm) => {

      try{
       const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email ,
        data.password
        )


       console.log({userCredentials})

      }catch(error){
        
        const _error = error as AuthError

        if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS){
            return setError("password", { type: "mismatch" })

        }
        if(_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS){
            return setError("email" , { type: "notFound"})
        }
      }

    }
    
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
                <CustomInput placeholder="Digite seu e-mail" {...register("email",{required:true , validate: (value) => {
                        return validator.isEmail(value)

                }})} hasError={!!errors?.email} />
                {errors?.email?.type === "required" && (
                    <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
                )}

{errors?.email?.type === "notFound" && (
                    <InputErrorMessage>E-mail não encontrado.</InputErrorMessage>
                )}

                {errors?.email?.type === "validate" && (
                    <InputErrorMessage>Digite um e-mail válido.</InputErrorMessage>
                ) }

             </LoginInputContainer>
             <LoginInputContainer>
                <p>Senha</p>
                <CustomInput placeholder="Digite sua senha" type="password" {...register("password",{required:true})} hasError={!!errors?.password}/>

                {errors?.password?.type === "required" && (
                    <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
                )}

{errors?.password?.type === "mismatch" && (
                    <InputErrorMessage>E-mail ou senha inválidos.</InputErrorMessage>
                )}
             </LoginInputContainer>



                    <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}   startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>

            </LoginContent>
            
        </LoginContainer>
        
        
        
        
        </>
    )

}


export default LoginPage