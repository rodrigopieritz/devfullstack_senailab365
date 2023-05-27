class Person {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }
  get nome() {
    return this._nome;
  }
  get idade() {
    return this._idade;
  }
  get altura() {
    return this._altura;
  }
  set nome(novoNome) {
    this._nome = novoNome;
  }
  set idade(novaIdade) {
    this._idade = novaIdade;
  }
  set altura(novaAltura) {
    this._altura = novaAltura;
  }
  apresentar() {
    console.log(
      `Olá me chamo ${person.nome} tenho ${person.idade} anos e tenho ${person.altura} de altura`
    );
  }
}
var person = new Person("Rodrigo", 34, 1.88);

person.apresentar();

class Professional extends Person {
  constructor(nome, idade, altura, profissao) {
    super(nome, idade, altura);
    this.profissao = profissao;
  }
  get profissao() {
    return this._profissao;
  }
  set profissao(novaProfissao) {
    this._profissao = novaProfissao;
  }
  apresentar() {
    console.log(
      `Olá me chamo ${professional.nome} tenho ${person.idade} anos e tenho ${person.altura} de altura e sou ${professional.profissao}`
    );
  }
}
var professional = new Professional("Gustavo", 54, 1.65, "Engenheiro");

professional.apresentar();

//método apresentar professional estou mostrando 2 atributos da class pai e 2 da class filha propositalmente
