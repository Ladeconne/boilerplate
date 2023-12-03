import { Router } from 'express';
import templates from './templates';
const router: Router = Router({ mergeParams: true });

router.use('/templates', templates);

export default router;
