import { useState } from "react"
import { useCustomHook } from "../hooks/UseCustomHook"

const HookCustom = () => {

    const [number, setNumber] = useState(0);

    const customHook = useCustomHook(number);

  return (
    <div>
        <h2>Custom Hook</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {customHook}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar</button>
    </div>
  )
}

export default HookCustom