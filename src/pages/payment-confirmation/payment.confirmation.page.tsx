import { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/header/header.component";

import {PaymentConfirmationContainer,PaymentConfirmationContent} from "./payment.confirmation.styles"
import CustomButton from "../../components/custom-buttom/custom-buttom.component";
import {AiOutlineCheckCircle, AiOutlineCloseCircle , AiOutlineHome} from "react-icons/ai"
import Colors from "../../theme/theme.colors";
import { CartContext } from "../../contexts/cart.context";


const PaymentConfirmationPage : FunctionComponent = () => {

        const {clearProducts} = useContext(CartContext)

    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const handleBackToSite = () => {
        navigate("/")
    }



    const status = searchParams.get("success")

    const isCanceled = searchParams.get("canceled") === "true"

    useEffect(() => {
        if(status==="true"){
            // limpar carrinho
            clearProducts()

        }

    },[status])

    return(
        <>
        
        <Header/>
        <PaymentConfirmationContainer>
            <PaymentConfirmationContent>

                {status === "true" && (
                    <>
                    <AiOutlineCheckCircle size={120}  color={Colors.success}   />

                    <p>
                        Sua compra foi finalizada com sucesso, aproveite seus novos equipamentos!
                    </p>
                    </>
                )}
                {(status === "false" || isCanceled) &&  (
                    <>
                    <AiOutlineCloseCircle size={120} color={Colors.error}/>
                    <p>Ocorreu um erro ao finalizar sua compra, verifique os dados e tente novamente!</p>
                    
                    
                    </>

                )}
                <CustomButton startIcon={<AiOutlineHome/>}   onClick={handleBackToSite}    >Voltar para a Página Inicial </CustomButton>
            </PaymentConfirmationContent>
        </PaymentConfirmationContainer>
        
        
        </>
    )

}



export default PaymentConfirmationPage