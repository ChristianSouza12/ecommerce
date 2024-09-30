import { FunctionComponent } from "react";
import { LoadingContainer } from "./loading.styles";
import HashLoader from "react-spinners/HashLoader"


interface LoadingProps{
    message?:string
}


const Loading: FunctionComponent<LoadingProps> = ({message}) => {
    return (
        <LoadingContainer>
            {message && <p>{message}</p>}
            <HashLoader size={60}/>
        </LoadingContainer>

    )
}

export default Loading;