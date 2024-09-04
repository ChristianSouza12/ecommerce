import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";

import { HeaderContainer, HeaderItem, HeaderItens, HeaderLogo, HeaderTitle, HeaderTitleLogo } from "./header.styles";

const Header = () => {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate("/login")

    }

    const handleSignUpClick = () => {
        navigate("/sign-up")

    }


    return (
        <HeaderContainer>
            <HeaderTitleLogo>
                <HeaderTitle>Bike Shop</HeaderTitle>
                <HeaderLogo src={Logo} alt="logo"/>
            </HeaderTitleLogo>
            
            <HeaderItens>
                <HeaderItem>Explorar</HeaderItem>
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem  onClick={handleSignUpClick}   >Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                    <p style={{ marginLeft: 5 }}>5</p>
                </HeaderItem>
            </HeaderItens>
        </HeaderContainer>
    );
};

export default Header;
