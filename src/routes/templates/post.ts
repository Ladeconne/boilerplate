import { Router } from 'express';
import * as templateController from '@/controllers/template.controller';
import { runAsyncWrapper } from '@/helpers';
import { validate } from '@/middelwares';
import { postTemplateValidation } from '../@schema';

const router = Router({ mergeParams: true });

router.post(
  '/',
  validate(postTemplateValidation),
  runAsyncWrapper(templateController.postTemplate)
);

export default router;
