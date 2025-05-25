import { password } from "../config/database";
import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  //index listar
  async index(req, res) {
    try {
      const users = await User.findAll({attributes: ['id', 'nome', 'email']});
       return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }
  //show trazer apenas um user especifico
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const {id, nome, email } = user
       return res.json({id, nome, email});
    } catch (e) {
      return res.json(null);
    }
  }
  //update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      const novosDados = await user.update(req.body);
      const {id, nome, email } = novosDados
      return res.json({id, nome, email })
    } catch (e) {
      console.error(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
  //delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);


      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      await user.destroy();
        return res.json(null)
    } catch (e) {
      console.error(e);
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new UserController();
