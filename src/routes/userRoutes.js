import { Router } from 'express';
import  homeController  from '../controllers/UserController';

const router = new Router();

router.post('/', homeController.store);

export default router;

/*
index => lista todos os usuarios -> GET
create/store => cria um novo usuário -> POST
delete => apaga um usuário -> DELETE
show => mostra um usuário -> GET
update => atualiza um usuário -> PATCH ou PUT

PATCH: atualiza um valor do objeto
PUT: atualiza o objeto por inteiro
*/
