
import  {FunctionComponent} from "react"



interface AppProps{
  message?: string
}

const App: FunctionComponent <AppProps> = ({message}) =>{
  
  return <h1>Hello</h1>
}

export default App