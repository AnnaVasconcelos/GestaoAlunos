import { useState } from 'react';
import React from "react";
import Dashboard from "./Dashboard";

function App() {
  const [nome, setNome] = useState('');
  const [notas, setNotas] = useState([0, 0, 0, 0, 0]);
  const [frequencia, setFrequencia] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const aluno = { nome, notas, frequencia };
  
    fetch("https://localhost:7019/Alunos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno)
    })
    .then(response => {
      if (!response.ok) throw new Error("Erro ao cadastrar aluno");
      return response.text();
    })
    .then(mensagem => {
      alert(mensagem);
      setNome('');
      setNotas([0, 0, 0, 0, 0]);
      setFrequencia(0);
      // aqui você pode querer atualizar o dashboard após cadastro
    })
    .catch(error => {
      alert(error.message);
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Cadastro de Aluno</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Notas:</label><br />
          {notas.map((nota, index) => (
            <input
              key={index}
              type="number"
              step="0.1"
              min="0"
              max="10"
              value={nota}
              onChange={(e) => {
                const novasNotas = [...notas];
                novasNotas[index] = parseFloat(e.target.value);
                setNotas(novasNotas);
              }}
              required
              style={{ marginRight: '10px', width: '50px' }}
            />
          ))}
        </div>

        <br />

        <div>
          <label>Frequência (%):</label><br />
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            value={frequencia}
            onChange={(e) => setFrequencia(parseFloat(e.target.value))}
            required
          />
        </div>

        <br />

        <button type="submit">Cadastrar</button>
      </form>

      <hr />

      <Dashboard />
    </div>
  );
}

export default App;
