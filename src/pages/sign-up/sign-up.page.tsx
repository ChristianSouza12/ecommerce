import validator from "validator"
import CustomButton from "../../components/custom-buttom/custom-buttom.component"
import CustomInput from "../../components/custom-input/custom-input.component"
import Header from "../../components/header/header.component"
import { SignUpContainer, SignUpContent, SignUpHeadLine, SignUpInputContainer } from "./sign-up.styles"
import {useForm} from "react-hook-form"

import { FiLogIn } from "react-icons/fi"
import InputErrorMessage from "../../components/input-error-message/input-error-message.component"
import { AuthError, createUserWithEmailAndPassword , AuthErrorCodes } from "firebase/auth"
import { auth, db } from "../../config/firebase.config"
import { addDoc, collection } from "firebase/firestore"


interface SignUpForm{
    firstName:string;
    lastName: string;
    email: string;
    password:string;
    passwordConfirmation: string
}



const SignUpPage = () => {

    const {register, handleSubmit,
        formState:{errors},
        watch,
        setError,
    } = useForm<SignUpForm>()

    const watchPassword = watch("password")

    const handleSubmitPress = async (data:SignUpForm) => {
        try{
          const userCredentials= await createUserWithEmailAndPassword(auth, data.email , data.password)


           await addDoc(collection(db, "users"), {
            id: userCredentials.user.uid,
            firstName: data.firstName,
            lastName: data.lastName,
            email : userCredentials.user.email,
            provider: "firebase"

           })

        }catch(error){
            const _error = error as AuthError 

            if (_error.code === AuthErrorCodes.EMAIL_EXISTS){

                return setError("email", {type:"alreadyInUse"})

            }
        }

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
                    hasError={!!errors?.firstName}
                    
                    placeholder="Digite seu nome"  {...register("firstName", {required:true})}    />
                    {errors?.firstName?.type === "required" && (
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

{errors?.email?.type === "alreadyInUse" && (
                        <InputErrorMessage>Este e-mail ja está em uso.</InputErrorMessage>
                    )}
                     {errors?.firstName?.type === "validate" && (
                        <InputErrorMessage>Digite um e-mail válido.</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>Senha</p>
                    <CustomInput
                    hasError={!!errors?.password}
                    
                    type="password" placeholder="Digite sua senha"  {...register("password", {required:true , minLength:6})}    />
                     {errors?.password?.type === "required" && (
                        <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
                    )}

{errors?.password?.type === "minLength" && (
                        <InputErrorMessage>A senha deve conter pelo menos 6 caracteres.</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <SignUpInputContainer>
                    <p>Confirme sua senha</p>
                    <CustomInput
                    hasError={!!errors?.passwordConfirmation}
                    type="password" placeholder="Confirme sua senha"  {...register("passwordConfirmation", {required:true , minLength : 6, validate:(value) => {
                        return value === watchPassword


                    }})} 
                       />

                     {errors?.passwordConfirmation?.type === "required" && (
                        <InputErrorMessage>A confirmação de senha é obrigatória.</InputErrorMessage>
                    )}
                    {errors?.passwordConfirmation?.type === "validate" && (
                        <InputErrorMessage>A senha e a confirmação de senha precisam ser iguais.</InputErrorMessage>
                    )}

{errors?.passwordConfirmation?.type === "minLength" && (
                        <InputErrorMessage>A confirmação de senha deve conter pelo menos 6 caracteres.</InputErrorMessage>
                    )}
                </SignUpInputContainer>

                <CustomButton  onClick={() => handleSubmit(handleSubmitPress)()}    startIcon={<FiLogIn size={18}/>}>Criar Conta</CustomButton>

                
            </SignUpContent>
        </SignUpContainer>
        
        
        
        
        
        </>
    )

}



export default SignUpPage