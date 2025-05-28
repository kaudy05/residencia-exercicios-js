function soma(a: number, b: number) {
  return a + b;
}

// Somente um por arquivo
export default function sub(a: number, b: number) {
  return a - b;
}

function div(a: number, b: number): number | undefined {
  if (b === 0) {
    console.log("Não pode se dividir por zero");
    return;
  }

  return a / b;
}

export function mult(a: number, b: number) {
  return a * b;
}

export { soma, div };
