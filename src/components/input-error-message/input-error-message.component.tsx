import { FunctionComponent, PropsWithChildren } from "react";
import { InputErrorMessageContainer } from "./input-error-message.style";

// Defina as props como PropsWithChildren
const InputErrorMessage: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
    );
}

export default InputErrorMessage;
