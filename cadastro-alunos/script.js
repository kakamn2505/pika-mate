let alunos = ["João", "Maria", "Pedro", "Pietro", "Kayke", "Daniel"];

let lista = document.getElementById("listaAlunos");

for (let i = 0; i < alunos.length; i++) {
    lista.innerHTML += `<li>${alunos[i]}</li>`;
}