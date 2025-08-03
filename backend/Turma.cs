using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestaoMediaPresenca
{
    class Turma
    {
        private Aluno [] alunos;
        private int qtdAlunos;

        public Turma (int capacidade) 
        {
            alunos = new Aluno[capacidade];
            qtdAlunos = 0;
        }

        public void AdicionarAluno(Aluno aluno) 
        {
            if (qtdAlunos < alunos.Length) // verificando se ainda tem espaço
            {
                alunos[qtdAlunos++] = aluno; // adiciona e incrementa o contador
            }
            else
            {
                Console.WriteLine("Capacidade máxima da turma atingida.");
            }
        }

        public double [] MediaPorDisciplina()
        {
            double [] medias = new double[5];
            for (int i = 0; i < qtdAlunos; i++) // soma todas as notas de cada disciplina
            {
                for (int j = 0; j < 5; j++)
                {
                    medias[j] += alunos[i].Notas[j]; 
                }
            }

            for (int i = 0; i < 5; i++) // divide cada soma pelo número de alunos
            {
                if (qtdAlunos > 0)
                {
                    medias[i] = medias[i] / qtdAlunos;
                }
            }

            return medias;
        }

        public void ImprimirMediaPorDisciplina()
        {
            double[] medias = MediaPorDisciplina(); // usa o método anterior
            Console.WriteLine("\nMédias da turma por disciplina:");
            for (int i = 0; i < medias.Length; i++)
            {
                Console.WriteLine($"Disciplina {i + 1}: {medias[i]:F2}");
            }
        }

        public double MediaGeral() // calcula a média geral da turma
        {
            double soma = 0;
            for (int i = 0; i < qtdAlunos; i++) // soma a média de todos os alunos
            {
                soma += alunos[i].mediaNotas();
            }
            return soma / qtdAlunos; // retorna a média geral
        }

        public void ImprimirAlunos()
        {
            for (int i = 0; i < qtdAlunos; i++)
            {
                Console.WriteLine();
                alunos[i].Imprimir();
                Console.WriteLine(); 
            }
        }

        public void MostrarAlunosAcimaDaMedia() // mostra alunos que tenham a média acima da média da turma
        {
            double mediaTurma = MediaGeral();
            Console.WriteLine($"\nAlunos com média acima da média da turma ({mediaTurma:F2}):");
            for (int i = 0; i < qtdAlunos; i++) 
            {
                double mediaAluno = alunos[i].mediaNotas();
                if (mediaAluno > mediaTurma)
                {
                    Console.WriteLine($"{alunos[i].Nome} - Média: {mediaAluno:F2}");
                }
            }
        }

        public void AlunosComFrequenciaBaixa() // mostra alunos com frequência menor de 75%
        {
            Console.WriteLine("\nAlunos com frequência abaixo de 75%:");
            for (int i = 0; i < qtdAlunos; i++)
            {
                if (alunos[i].frequenciaBaixa())
                {
                    Console.WriteLine($"{alunos[i].Nome} - Frequência: {alunos[i].Frequencia}%");
                }
            }
        }
    }
}

