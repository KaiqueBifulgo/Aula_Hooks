import { useCallback, useState } from "react"

import BreedsList from "./BreedsList";

const HookUseCallBack = () => {
    const [counter, setCounter] = useState(0);

    const getBreedsDataBase = useCallback(() => {
        return ["Husky", "Corgi", "Samoieda"]
    }, [])

  return (
    <div>
        <h2>HookUseCallBack</h2>
        <BreedsList getBreeds={getBreedsDataBase} />
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <p>{counter}</p>
    </div>
  )
}

export default HookUseCallBack