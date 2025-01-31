import { useEffect, useState } from "react"

const HookUseEffect = () => {

    // useEFFECT SEM DEPENDENCIAS
    useEffect (() => {
        console.log("Estou sendo executado");
    })

    const [number, setNumber] = useState(2);

    const changeSomething = () => {
        setNumber(number + 1);
    }

    // ARRAY VAZIO
    // SÓ VAI REPETIR UMA VEZ
    useEffect (() => {
        console.log("Só ira repetir uma vez")
    }, []);

  return (
    <div>
        <h2>useEffect</h2>
        <p>Numero: {number}</p>
        <button onClick={changeSomething}>Mudar</button>
    </div>
  )
}

export default HookUseEffect