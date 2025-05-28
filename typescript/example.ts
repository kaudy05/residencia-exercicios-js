/**
 * Data types:
 * - string
 * - number
 * - boolean
 * - undefined
 * - null
 */

// Exercício 01: Declarar variáveis do
// Js no TypeScript
// const, let/var
// <tipo_variavel> <nome_variavel>:
// <data-type> = "";
const nome: string = "Allan";
const endereco: string = "Ceilândia";
let idade: number = 19;
let engenharia: boolean = false;
let formatura: null = null;
// Não é uma boa prática: any ou unknown
let idade2: unknown = 20;
idade2 = "Idade 2";

// Exercício 2: criar método soma e subtração
// (a: number, b: number) => number;
interface pessoaProps {
  nome: string;
  endereco: string;
  idade: number;
  formatura: null;
  mestrado: undefined;
  falar: () => void;
  somar: (a: number, b: number) => number;
  subtracao: (a: number, b: number) => number;
}

const pessoa: pessoaProps = {
  nome: "Allan",
  endereco: "Ceilândia",
  idade: 19,
  formatura: null,
  mestrado: undefined,
  falar: () => {
    // Arrow function
    console.log("Oi");
  },
  somar: (a, b) => {
    return a + b;
  },
  subtracao(a, b) {
    return a - b;
  },
};
console.log(pessoa.somar(10, 20));
console.log(pessoa.subtracao(10, 20));

// Exercício 3: definir um array de pessoas
// pessoaProps[]
// <const var/let> <nome>: <tipo> = <valor>

// npx ts-node ./example.ts
const pessoaArray: pessoaProps[] = [
  {
    nome: "",
    endereco: "",
    idade: 10,
    falar: () => {},
    formatura: null,
    mestrado: undefined,
    somar: (a, b) => a + b,
    subtracao: (a, b) => a - b,
  },
];

// type

type pessoa2Props = {
  nome: string;
  idade: number;
  peso: number;
  corOlho: "azul" | "verde" | "castanho";
};

const pessoaObj: pessoa2Props = {
  nome: "Pessoa",
  idade: 20,
  peso: 70,
  corOlho: "azul",
};

const pessoas2Array: pessoa2Props[] = [
  {
    nome: "Pessoa",
    idade: 20,
    peso: 70,
    corOlho: "azul",
  },
];
