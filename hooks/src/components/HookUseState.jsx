import { useState } from "react"

const HookUseState = () => {
    // USESTATE
    const [breed, setBreed] = useState("Pug")

    const changeBreed = () => {
        setBreed("Malamute")
    }

    // INPUT E useState
    const [amount, setAmount] = useState(5)

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(amount);
    }

  return (
    <div>
        {/* useSTATE */}
        <h2>useState</h2>
        <p>useState: {breed}</p>
        <button onClick={changeBreed}>Mudar raça</button>
        {/* INPUT E useState */}
        <form onSubmit={handleSubmit}>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <p>Voce tem {amount} pets</p>
        <hr />
    </div>
  )
}

export default HookUseState