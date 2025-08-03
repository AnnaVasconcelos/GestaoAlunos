using System;
using System.Diagnostics;
using System.IO;
using GestaoMediaPresenca;

namespace MediaAluno
{
    class Program
    {
        static void Main()
        {
            Turma turma = new Turma(40);

            while (true)
            {
                Console.Write("Digite o nome do aluno (digite fim para terminar): ");
                string nome = Console.ReadLine();

                if (nome == "fim")
                    break;

                double[] notas = new double[5];

                for (int i = 0; i < 5; i++)
                {
                    Console.Write($"Nota {i + 1}: ");
                    notas[i] = double.Parse(Console.ReadLine());
                }

                Console.Write("Frequência (%): ");
                double frequencia = double.Parse(Console.ReadLine());

                Aluno aluno = new Aluno(nome, notas, frequencia);
                turma.AdicionarAluno(aluno);

                Console.WriteLine();
            }
            
            turma.ImprimirAlunos();
            turma.ImprimirMediaPorDisciplina();
            turma.MostrarAlunosAcimaDaMedia();
            turma.AlunosComFrequenciaBaixa();
        }
    }
}















