import { FunctionComponent, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { UserContext } from "../contexts/user.context";
import Header from "../components/header/header.component";
import Loading from "../components/loading/loading.component";



interface AuthenticationProps {
  children: ReactNode;
}

const AuthenticationGuard: FunctionComponent<AuthenticationProps> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
        setTimeout(() => {
            navigate("/login");
        }, 3000);
      
    }
  }, [isAuthenticated]);

  if(!isAuthenticated){
    return <>
        <Header/>
        <Loading   message="Você precisa estar logado para finalizar sua compra.Você será redirecionado para a página de Login..."   />
    
    </>
  }

  return <>{children}</>;
};

export default AuthenticationGuard;
