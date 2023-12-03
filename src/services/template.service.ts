import { IGetTemplates, IGetTemplatesResponse, IPostTemplate } from '@/types';
import * as templateQueries from '@/queries/template.queries';
export const getTemplates = ({
  limit,
  offset,
}: IGetTemplates): IGetTemplatesResponse[] => {
  const templates = templateQueries.fetchTemplates({ limit, offset });
  return templates;
};

export const postTemplate = (payload: IPostTemplate): void => {
  templateQueries.createTemplate({ ...payload });
  return;
};
