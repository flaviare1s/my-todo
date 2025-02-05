import React, { FormEvent, useRef } from 'react'

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputSenhaRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(inputNameRef.current?.value)
    console.log(inputEmailRef.current?.value)
    console.log(inputSenhaRef.current?.value);
    
  }

  return (
    <form style={{ padding: "2rem" }} onSubmit={handleOnSubmit}>
      <h1>useRef</h1>
      <input type="text" placeholder="Nome completo" ref={inputNameRef} />
      <input type="email" placeholder="E-mail" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputSenhaRef} />
      <br />
      <button style={{ marginTop: "1rem", padding: "0 1rem" }} type='submit'>Submit</button>
    </form>
  );
}
