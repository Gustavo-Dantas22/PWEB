//1°
function Aluno1(primeiroNome, ultimoNome, RA, genero, idade) {
  this.nome = {
    primeiroNome,
    ultimoNome,
  };

  this.genero = genero;
  this.idade = idade;
  this.RA = RA;
}
var aluno = new Aluno1("Hugo", "Silveira", "0030481813004", "masculino", 22);

//2°
var _aluno1 = {};
aluno1.RA = "0030481813004";
aluno1.nome = {
    primeiroNome = "Hugo",
    ultimoNome = "Silveira"
}
aluno1.idade = 22;
aluno1.genero = "Masculino";

//3°
var aluno1 = new Object();
aluno1.RA = "0030481813004";
aluno1.nome = {
    primeiroNome: "Hugo",
    ultimoNome: "Silveira"
}
aluno1.idade = 22;
aluno1.genero = "Masculino";
