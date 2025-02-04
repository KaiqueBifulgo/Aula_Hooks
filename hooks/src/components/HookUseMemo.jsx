import { useMemo, useState, useEffect } from "react"

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    const specialNumbers = useMemo (() => {
        return ["30", "25", "01", "15"]
    }, [])

    useEffect(() => {
        console.log("Special number não foi acertado!")

    }, [specialNumbers])

  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {specialNumbers.includes(number) ? <p>Numero correto!!</p> : ""}
    </div>
  )
}

export default HookUseMemo