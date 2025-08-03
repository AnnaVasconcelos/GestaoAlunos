import React, { useEffect, useState } from "react";

export function Dashboard() {
  const [alunos, setAlunos] = useState([]);
  const [mediaDisciplina, setMediaDisciplina] = useState([]);
  const [acimaDaMedia, setAcimaDaMedia] = useState([]);
  const [frequenciaBaixa, setFrequenciaBaixa] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7019/Alunos")
      .then(res => res.json())
      .then(data => setAlunos(data))
      .catch(console.error);

    fetch("https://localhost:7019/Alunos/media-por-disciplina")
      .then(res => res.json())
      .then(data => setMediaDisciplina(data))
      .catch(console.error);

    fetch("https://localhost:7019/Alunos/acima-da-media")
      .then(res => res.json())
      .then(data => setAcimaDaMedia(data))
      .catch(console.error);

    fetch("https://localhost:7019/Alunos/frequencia-baixa")
      .then(res => res.json())
      .then(data => setFrequenciaBaixa(data))
      .catch(console.error);
  }, []);

  const calcularMediaAluno = (notas) => {
    if (!notas || notas.length === 0) return 0;
    return (notas.reduce((acc, val) => acc + val, 0) / notas.length).toFixed(2);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Dashboard da Turma</h1>

      <section>
        <h2>Alunos</h2>
        {alunos.length === 0 ? <p>Nenhum aluno cadastrado.</p> : (
          <ul>
            {alunos.map((aluno, i) => (
              <li key={i}>
                <strong>{aluno.nome}</strong> — Média: {calcularMediaAluno(aluno.notas)} — Frequência: {aluno.frequencia}%
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Média por Disciplina</h2>
        {mediaDisciplina.length === 0 ? <p>Sem dados.</p> : (
          <ul>
            {mediaDisciplina.map((media, i) => (
              <li key={i}>Disciplina {i + 1}: {media.toFixed(2)}</li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Alunos Acima da Média</h2>
        {acimaDaMedia.length === 0 ? <p>Sem alunos acima da média.</p> : (
          <ul>
            {acimaDaMedia.map((aluno, i) => (
              <li key={i}>
                {aluno.nome} — Média: {calcularMediaAluno(aluno.notas)}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Alunos com Frequência Abaixo de 75%</h2>
        {frequenciaBaixa.length === 0 ? <p>Sem alunos com frequência baixa.</p> : (
          <ul>
            {frequenciaBaixa.map((aluno, i) => (
              <li key={i}>
                {aluno.nome} — Frequência: {aluno.frequencia}%
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
