import { Router } from 'express';

// uploads de arquivos
import multer from 'multer';
import uploadConfig from './config/upload';

// controllers
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// rotas para orfanatos
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
    
export default routes;