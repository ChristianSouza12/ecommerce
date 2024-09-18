import { FunctionComponent } from "react";
import { LoadingContainer } from "./loading.styles";
import HashLoader from "react-spinners/HashLoader"


const Loading: FunctionComponent = () => {
    return (
        <LoadingContainer>
            <HashLoader size={60}/>
        </LoadingContainer>

    )
}

export default Loading;