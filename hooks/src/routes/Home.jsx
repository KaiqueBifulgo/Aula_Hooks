import { useContext } from "react"

import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import { SomeContext } from "../components/HookUseContext"

const Home = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
        <h1>Home</h1>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>UseContext</h2>
        <p>Valor do context: {contextValue}</p>
        <hr />
    </div>
  )
}

export default Home