import { forwardRef, useImperativeHandle, useRef } from "react"

const ComponentOfUseRef = forwardRef((props, ref) => {

  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if(localInputRef.current.value.length > 3) {
          localInputRef.current.value = ""
        }
      }
    }
  })

  return (
    <div>
        <p>Insira no maximo 3 caracteres:</p>
        <input type="text" ref={localInputRef} />
    </div>
  )
})

// Adicionando o displayName para o componente
ComponentOfUseRef.displayName = "ComponentOfUseRef";


export default ComponentOfUseRef