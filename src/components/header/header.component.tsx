import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";

import { HeaderContainer, HeaderItem, HeaderItens, HeaderLogo, HeaderTitle, HeaderTitleLogo } from "./header.styles";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Header = () => {
    const navigate = useNavigate()


    const {isAuthenticated} = useContext(UserContext)

    const {toggleCart , productsCount} = useContext(CartContext)


    const handleLogoCLick = () => {
        navigate("/")
    }



    const handleLoginClick = () => {
        navigate("/login")

    }

    const handleSignUpClick = () => {
        navigate("/sign-up")

    }


    const handleExploreClick = () => {
        navigate("explore")
    }


    return (
        <HeaderContainer>
            <HeaderTitleLogo>
                <HeaderTitle onClick={handleLogoCLick}>Bike Shop</HeaderTitle>
                <HeaderLogo src={Logo} alt="logo"/>
            </HeaderTitleLogo>
            
            <HeaderItens>
                <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
                {!isAuthenticated && (
                    <>
                    <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                    <HeaderItem  onClick={handleSignUpClick}>Criar Conta</HeaderItem>
                    </>
                )}
                {isAuthenticated && (
                    <>
                     <HeaderItem  onClick={() => signOut(auth)}>Sair</HeaderItem>
                    </>

                )}
               
                <HeaderItem onClick={toggleCart}  >
                    <BsCart3 size={25} />
                    <p style={{ marginLeft: 5 }}>{productsCount}</p>
                </HeaderItem>
            </HeaderItens>
        </HeaderContainer>
    );
};

export default Header;
