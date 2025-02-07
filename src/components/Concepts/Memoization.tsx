import React, { useMemo, useState } from 'react'

interface MemoiztionProps {
  financialData: {
    incomes: number[],
    outcomes: number[],
  }
}

export const Memoization: React.FC<MemoiztionProps> = ({ financialData }) => {
  const [showValues, setShowValues] = useState(false);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((acc, income) => {
      console.log("Calculando o total de receitas...");
      return acc + income;
    }, 0);
  }, [financialData.incomes]);

  // O useMemo garante que o cálculo do total de despesas seja feito apenas quando as despesas mudarem

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((acc, outcome) => {
      console.log("Calculando o total de despesas...");
      return acc + outcome;
    }, 0);
  }, [financialData.outcomes]);

  console.log('Renderização do componente')

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memoization</h1>
      <h2>useMemo</h2>

      <p>{`Total de receitas: ${showValues ? totalIncomes : '***'}`}</p>
      <br />
      <p>{`Total de despesas: ${showValues ? totalOutcomes : '***'}`}</p>
      <br />
      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? 'Ocultar valores' : 'Mostrar valores'}
      </button>
    </div>
  )
}

// Para testar, adicione o componente no App: 
// <Memoization financialData={{  incomes: [1, 27, 32], outcomes: [5, 2, 12]}} />
