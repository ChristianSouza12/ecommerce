import validator from "validator"
import CustomButton from "../../components/custom-buttom/custom-buttom.component"
import CustomInput from "../../components/custom-input/custom-input.component"
import Header from "../../components/header/header.component"
import { SignUpContainer, SignUpContent, SignUpHeadLine, SignUpInputContainer } from "./sign-up.styles"
import {useForm} from "react-hook-form"

import { FiLogIn } from "react-icons/fi"
import InputErrorMessage from "../../components/input-error-message/input-error-message.component"


interface SignUpForm{
    name:string;
    lastName: string;
    email: string;
    password:string;
    passwordConfirmation: string
}



const SignUpPage = () => {

    const {register, handleSubmit,
        formState:{errors},
        watch,
    } = useForm<SignUpForm>()

    const watchPassword = watch("password")

    const handleSubmitPress = (data:SignUpForm) => {
        console.log({data})

    }

    

    return (
        <>

        <Header/>
        <SignUpContainer>
            <SignUpContent>
                <SignUpHeadLine>Crie sua conta</SignUpHeadLine>
                <SignUpInputContainer>
                    <p>Nome</p>
                    <CustomInput
                    hasError={!!errors?.name}
                    
                    placeholder="Digite seu nome"  {...register("name", {required:true})}    />
                    {errors?.name?.type === "required" && (
                        <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>Sobrenome</p>
                    <CustomInput 
                    hasError={!!errors?.lastName} 
                    placeholder="Digite seu sobrenome"  {...register("lastName", {required:true})}    />
                     {errors?.lastName?.type === "required" && (
                        <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>E-mail</p>
                    <CustomInput 
                    hasError={!!errors?.email}
                    placeholder="Digite seu e-mail"   {...register("email" , {required:true , validate: (value) => {
                        return validator.isEmail(value)
                    }
})}  />
 {errors?.email?.type === "required" && (
                        <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
                    )}
                     {errors?.name?.type === "validate" && (
                        <InputErrorMessage>Digite um e-mail válido.</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>Senha</p>
                    <CustomInput
                    hasError={!!errors?.password}
                    
                    type="password" placeholder="Digite sua senha"  {...register("password", {required:true})}    />
                     {errors?.password?.type === "required" && (
                        <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>Confirme sua senha</p>
                    <CustomInput
                    hasError={!!errors?.passwordConfirmation}
                    type="password" placeholder="Confirme sua senha"  {...register("passwordConfirmation", {required:true , validate:(value) => {
                        return value === watchPassword


                    }})} 
                       />

                     {errors?.passwordConfirmation?.type === "required" && (
                        <InputErrorMessage>A confirmação de senha é obrigatória.</InputErrorMessage>
                    )}
                    {errors?.passwordConfirmation?.type === "validate" && (
                        <InputErrorMessage>A senha e a confirmação de senha precisam ser iguais.</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <CustomButton  onClick={() => handleSubmit(handleSubmitPress)()}    startIcon={<FiLogIn size={18}/>}>Criar Conta</CustomButton>

                
            </SignUpContent>
        </SignUpContainer>
        
        
        
        
        
        </>
    )

}



export default SignUpPage