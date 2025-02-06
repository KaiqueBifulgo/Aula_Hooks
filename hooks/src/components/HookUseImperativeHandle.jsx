import { useRef } from "react"
import ComponentOfUseRef from "./ComponentOfUseRef";


const HookUseImperativeHandle = () => {

    const componentRef = useRef();

  return (
    <div>
        <h2>HookUseImperativeHandle</h2>
        <ComponentOfUseRef ref={componentRef}/>
        <button onClick={() => componentRef.current.validate()}>Validate</button>
    </div>
  )
}

export default HookUseImperativeHandle