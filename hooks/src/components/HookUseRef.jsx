import {  useState, useRef } from "react"

const HookUseRef = () => {
    const numberRef = useRef(0);

    const [counterA, setCounterA] = useState(1);
    const [counterB, setCounterB] = useState(2);


    // useRef E DOM
    const inputRef = useRef();
    const[text, setText] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        setText("");

        inputRef.current.focus()
    }
    
  return (
    <div>
        <h2>Hook useRef</h2>
        <p>O componente renderizou: {numberRef.current}</p>
        <p>Counter A: {counterA}</p>
        <button onClick={() => setCounterA(counterA + 1)}>Adicionar ao counter A</button>
        <p>Counter B:{counterB} </p>
        <button onClick={() => setCounterB(counterB + 2)}>Adicionar ao counter B</button>
        {/* useRef e DOM */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={((e) => setText(e.target.value))} />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default HookUseRef