(async()=>{
    const database = require ('./db');
    const Exercicio = require('./exercicio')
    await database.sync();
    
    /* Aluno 1 - Rodei Node Index e depois comentei
    const novoAluno = await Exercicio.create ({
        aluno:'Peter Parker',
        email:'spiderman@avengers.com',
        matricula: 001
    })
    console.log(novoAluno);
    */
    
    /* Aluno 2 - Rodei Node Index e depois comentei
    const novoAluno = await Exercicio.create ({
        aluno:'Tony Stark',
        email:'ironman@avengers.com',
        matricula: 002
        console.log(novoAluno);
    })
    */
    
    /*EXERCICIO 5

    const exercicios = await Exercicio.findByPk(1);
    console.log(exercicios);

    exercicios.aluno = 'The Amazing Spider Man';
    await exercicios.save();

    const exerciciosdois = await Exercicio.findByPk(2);
    console.log(exerciciosdois);

    exerciciosdois.matricula = 0;
    await exerciciosdois.save();
  
    */

    const exercicios = await Exercicio.findByPk(1);
    await exercicios.destroy();
    console.log(exercicios);

    })();
