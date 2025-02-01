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


    // ARRAY COM VALOR
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect (() => {
        if (anotherNumber > 0) {
            console.log("Executa apenas quando muda o anotherNumber")
        }
    }, [anotherNumber])

    // CLEANUP do useEFFECT
    useEffect (() => {
        const timer = setTimeout(() => {
            console.log("Hello-world");
            setAnotherNumber(anotherNumber + 1);
        }, 2000);
        return () => clearTimeout(timer);
    }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Numero: {number}</p>
        <button onClick={changeSomething}>Mudar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={(() => setAnotherNumber(anotherNumber + 2))}>Mudar another</button>
    </div>
  )
}

export default HookUseEffect