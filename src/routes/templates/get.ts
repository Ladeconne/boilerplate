import { Router } from 'express';
import * as templateController from '@/controllers/template.controller';
import { runAsyncWrapper } from '@/helpers';
import { validate } from '@/middelwares';
import { getTemplatesValidation } from '../@schema';

const router = Router({ mergeParams: true });

router.get(
  '/',
  validate(getTemplatesValidation),
  runAsyncWrapper(templateController.getTemplates)
);

export default router;
