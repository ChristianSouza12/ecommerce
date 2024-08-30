import { BsCart3 } from "react-icons/bs";

import Logo from "../../images/logo.png";

import { HeaderContainer, HeaderItem, HeaderItens, HeaderLogo, HeaderTitle, HeaderTitleLogo } from "./header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitleLogo>
                <HeaderTitle>Bike Shop</HeaderTitle>
                <HeaderLogo src={Logo} alt="logo"/>
            </HeaderTitleLogo>
            
            <HeaderItens>
                <HeaderItem>Explorar</HeaderItem>
                <HeaderItem>Login</HeaderItem>
                <HeaderItem>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                    <p style={{ marginLeft: 5 }}>5</p>
                </HeaderItem>
            </HeaderItens>
        </HeaderContainer>
    );
};

export default Header;
