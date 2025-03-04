const data = [
  {
    category: "Easy",
    questions: [
      {
        question: "Quanto é 5 + 5?",
        options: ["2", "9.9", "7", "10"],
        answer: "10",
        
      },
      {
        question: "5 + x = 12, qual o número?",
        options: ["7", "10", "6", "5"],
        answer: "7",
      
      },
      {
        question: "10 - 8 = ?",
        options: ["2", "1", "4", "5"],
        answer: "2",
      },
      {
        question: "Se João comeu 2 maçãs tendo anteriormente 5, quantas maçãs ele tem agora?",
        options: ["5", "3", "2", "nenhuma"],
        answer: "3",
      },
      {
        question: "5 x 5 + 5 = ?",
        options: ["50", "29", "32", "30"],
        answer: "30",
      },
    ],
  },
  {
    category: "Normal",
    questions: [
      {
        question: "2 + 5 - 5 = ?",
        options: ["3", "2", "-1", "4"],
        answer: "2",
        
      },
      {
        question: "Penelope foi ao mercado tendo 5R$. Ao chegar lá, gastou 2.50R$. Quanto de dinheiro sobrou para ela?",
        options: ["R$5", "R$2.50", "R$3", "R$2.47"],
        answer: "R$2.50",
      },
      {
        question: "2 * (2 + 2) - 2 = ?",
        options: ["4", "6", "2", "0"],
        answer: "6",
      },
      {
        question: "5 * 5 + (1 + 2) - 2 = ?",
        options: ["23", "24", "26.1", "26"],
        answer: "26",
      },
      {
        question: "2 / 2 + 4 + 2 * 5 = ?",
        options: ["35", "18", "15", "13"],
        answer: "15",
      },
    ],
  },
  {
    category: "Hard",
    questions: [
      {
        question: "Fui ao mercado tendo 10 reais, cheguei lá peguei 2 maçãs e após ter comprado elas, voltei para casa com R$7 reais. Qual foi o valor que paguei em cada maçã?",
        options: [
          "R$3",
          "R$1.50",
          "R$2",
          "R$2.80",
        ],
        answer: "R$1.50",
      },
      {
        question: "Em uma corrida, você ultrapassa o segundo colocado. Em que posição você fica?",
        options: ["Primeiro colocado", "Terceiro colocado", "Segundo colocado", "Nenhum das alternativas"],
        answer: "Segundo colocado",
      },
      {
        question: "Quantos segundos há em 3 minutos?",
        options: ["180s", "120s", "150s", "165s"],
        answer: "180s",
      },
      {
        question: "Se você tem R$10 reais e compra 3 doces por R$2 reais cada, quanto dinheiro sobra?",
        options: ["R$5", "R$3", "R$4,50", "R$4"],
        answer: "R$4",
      },
      {
        question:
          "Se você tem 4 ovos e quebra 2, quantos ovos ainda estão inteiros?",
        options: ["4", "2", "1", "6"],
        answer: "2",
      },
    ],
  },
];

export default data;
