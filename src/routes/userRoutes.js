import { Router } from 'express';
import  homeController  from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, homeController.index);
//router.post('/', homeController.store);

router.get('/:id', homeController.show);
router.put('/:id', homeController.update);
router.delete('/:id', homeController.delete);




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
