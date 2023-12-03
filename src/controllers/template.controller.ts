import { APIResponse, IGetTemplates, IPostTemplate } from '@/types';
import { Request, Response } from 'express';
import * as templateService from '@/services/template.service';

export const getTemplates = async (
  req: Request<null, null, null, IGetTemplates>,
  res: Response<APIResponse>
) => {
  const { limit, offset } = req.query;
  const data = await templateService.getTemplates({ limit, offset });

  return res.status(200).json({
    data,
  });
};

export const postTemplate = async (
  req: Request<null, null, IPostTemplate>,
  res: Response<APIResponse>
) => {
  await templateService.postTemplate(req.body);

  return res.sendStatus(204);
};
