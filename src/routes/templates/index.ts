import { Router } from 'express';

import get from './get';
import post from './post';

const router: Router = Router({ mergeParams: true });

router.use('/', get);
router.use('/', post);

export default router;
