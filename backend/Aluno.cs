using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GestaoMediaPresenca
{
    class Aluno
    {
        public string Nome;
        public double [] Notas = new double[5];
        public double Frequencia;

        public Aluno(string nome, double [] notas, double frequencia)
        {
            Nome = nome;
            Notas = notas;
            Frequencia = frequencia;

        }
        public double mediaNotas()
        {
            double soma = 0;
            for (int i = 0; i < Notas.Length; i++)
            {
                soma += Notas[i];
            }
            return soma / Notas.Length;
        }
        public void Imprimir()
        {
            Console.WriteLine($"Aluno: {Nome}");
            Console.WriteLine($"Média: {mediaNotas():F2} ");
            Console.WriteLine($"Frequência: {Frequencia}%");
        }

        public bool frequenciaBaixa()
        {
            return Frequencia < 75;
        }
    }
}