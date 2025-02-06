import { useLayoutEffect, useEffect, useState } from "react"


const HookUseLayoutEffect = () => {

  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("Irineu");

    setName("Outro")
  },[])

  useLayoutEffect(() => {
    console.log("E carrega primeiro");

    setName("Primeiro carregamento");
  }, [])

  console.log(name)

  return (
    <div>HookUseLayoutEffect</div>
  )
}

export default HookUseLayoutEffect