import { Router } from 'express';

import * as ToWatchedController from '../controllers/towatchedController';

const router = Router();

router.get('/towatched', ToWatchedController.all);
router.post('/towatched', ToWatchedController.add);
router.put('/towatched/:id', ToWatchedController.update);
router.delete('/towatched/:id', ToWatchedController.remove);

export default router;