import Aluno from "../models/Aluno";

class HomeController{
  async index(req,res){
    const novoAluno = await Aluno.create({
      nome: 'Thawan',
      sobrenome: 'kadson',
      email:'tknunes@gmail.com',
      idade: 22,
      peso:68,
      altura:170
    })

    res.json(novoAluno);
  }
}
export default new HomeController();
