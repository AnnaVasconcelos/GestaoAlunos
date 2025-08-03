# Gestão de alunos
Este projeto foi feito para ajudar o professor Carlos, que precisava organizar melhor as notas e as faltas dos alunos dele. Como ele dá aula para cinco disciplinas diferentes, ele precisava de um jeito fácil de:

Colocar as notas de cada aluno, que vão de 0 a 10;

Registrar a frequência de cada aluno, em porcentagem, mostrando quantas aulas ele participou;

Ver a média das notas de cada aluno e também a média da turma em cada disciplina;

Saber quais alunos estão com nota acima da média da turma;

E ainda identificar quem está faltando muito, com frequência menor que 75%, para poder dar uma atenção especial a esses alunos.

Com esse sistema, o professor Carlos consegue acompanhar direitinho o desempenho e a presença dos alunos, tornando seu trabalho mais simples e organizado.

---

# Separação do projeto
A proposta foi dividida em duas partes:

- **Back-end:** Desenvolvido em C#, com execução via terminal/console, contendo toda a lógica de cadastro de alunos, cálculo de médias e controle de frequência.
- **Front-end:** Criado com React apenas para fins demonstrativos de interface, sem comunicação com API.

---

## 🎯 Funcionalidades do Back-end (C# Console)

- Cadastrar alunos (nome, 5 notas e frequência).
- Calcular média individual por aluno.
- Calcular a média geral da turma.
- Mostrar média por disciplina.
- Listar alunos com média acima da média da turma.
- Listar alunos com frequência abaixo de 75%.

Toda a lógica é executada diretamente no console de forma simples e didática.

---

## 💻 Interface Front-end (React)

A interface foi criada apenas como uma simulação visual da aplicação. Ela contém:

- Formulário para adicionar alunos.
- Visualização de lista de alunos com médias e frequências.
- Seções demonstrando alunos acima da média e com frequência baixa.

⚠️ **Importante:** O front-end não está conectado com o back-end. Foi incluído apenas para representar a interface da aplicação.

---

## 📁 Estrutura de Pastas
GestaoAlunos/
├── README.md
├── backend/
│   ├── Program.cs
│   ├── Aluno.cs
│   ├── Turma.cs
│   └── (outros arquivos)
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Dashboard.jsx
│   │   └── main.jsx
│   └── vite.config.js
