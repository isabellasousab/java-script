let nome = "Isabella";
let idade = 16;
let curso = "Desenvolvimento de Sistemas";

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let faltas = 4;
let matriculado = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Primeira nota:", nota1);
console.log("Segunda nota:", nota2);
console.log("Terceira nota:", nota3);
console.log("Faltas:", faltas);
console.log("Matriculado:", matriculado);

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media);

let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5 && media < 7) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Situação acadêmica:", situacao);

const totalAulas = 40;
let aulasFrequentadas = totalAulas - faltas;
let frequencia = (aulasFrequentadas / totalAulas) * 100;

console.log("Aulas frequentadas:", aulasFrequentadas);
console.log("Frequência:", frequencia + "%");

if (frequencia >= 75) {
    console.log("Frequência mínima atingida!");
} else {
    console.log("Frequência mínima não atingida.");
}

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    console.log("Aluno aprovado nos critérios finais!");
} else {
    console.log("Aluno não aprovado nos critérios finais.");
}

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Média calculada:", media);
console.log("Percentual de frequência:", frequencia + "%");
console.log("Situação acadêmica:", situacao);

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    console.log("Resultado final: Aprovado nos critérios finais.");
} else {
    console.log("Resultado final: Não aprovado nos critérios finais.");
}


console.log("------ TESTE 1 ------");

nome = "Ana";
idade = 18;
curso = "Desenvolvimento de Sistemas";
nota1 = 8;
nota2 = 9;
nota3 = 10;
faltas = 2;
matriculado = true;

media = (nota1 + nota2 + nota3) / 3;
aulasFrequentadas = totalAulas - faltas;
frequencia = (aulasFrequentadas / totalAulas) * 100;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5 && media < 7) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Nome:", nome);
console.log("Média:", media);
console.log("Frequência:", frequencia + "%");
console.log("Situação acadêmica:", situacao);

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    console.log("Resultado final: Aprovado nos critérios finais.");
} else {
    console.log("Resultado final: Não aprovado nos critérios finais.");
}

console.log("------ TESTE 2 ------");

nome = "Bruno";
idade = 16;
curso = "Informática";
nota1 = 6;
nota2 = 5;
nota3 = 6;
faltas = 4;
matriculado = true;

media = (nota1 + nota2 + nota3) / 3;
aulasFrequentadas = totalAulas - faltas;
frequencia = (aulasFrequentadas / totalAulas) * 100;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5 && media < 7) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Nome:", nome);
console.log("Média:", media);
console.log("Frequência:", frequencia + "%");
console.log("Situação acadêmica:", situacao);

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    console.log("Resultado final: Aprovado nos critérios finais.");
} else {
    console.log("Resultado final: Não aprovado nos critérios finais.");
}

console.log("------ TESTE 3 ------");

nome = "Carla";
idade = 18;
curso = "Administração";
nota1 = 3;
nota2 = 4;
nota3 = 2;
faltas = 4;
matriculado = true;

media = (nota1 + nota2 + nota3) / 3;
aulasFrequentadas = totalAulas - faltas;
frequencia = (aulasFrequentadas / totalAulas) * 100;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5 && media < 7) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Nome:", nome);
console.log("Média:", media);
console.log("Frequência:", frequencia + "%");
console.log("Situação acadêmica:", situacao);

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    console.log("Resultado final: Aprovado nos critérios finais.");
} else {
    console.log("Resultado final: Não aprovado nos critérios finais.");
}

console.log("------ TESTE 4 -------");

nome = "Diego";
idade = 17;
curso = "Desenvolvimento de Sistemas";
nota1 = 8;
nota2 = 8;
nota3 = 9;
faltas = 12;
matriculado = true;

media = (nota1 + nota2 + nota3) / 3;
aulasFrequentadas = totalAulas - faltas;
frequencia = (aulasFrequentadas / totalAulas) * 100;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5 && media < 7) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Nome:", nome);
console.log("Média:", media);
console.log("Frequência:", frequencia + "%");
console.log("Situação acadêmica:", situacao);

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    console.log("Resultado final: Aprovado nos critérios finais.");
} else {
    console.log("Resultado final: Não aprovado nos critérios finais.");
}