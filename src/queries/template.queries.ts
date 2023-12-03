import { IGetTemplates, ITemplate } from '@/types';

const templates: ITemplate[] = [];

export const createTemplate = (payload: Omit<ITemplate, 'id'>) => {
  const newTemplate: ITemplate = { id: templates.length + 1, ...payload };
  templates.push(newTemplate);
};

export const fetchTemplates = ({ limit = 1000, offset = 0 }: IGetTemplates) => {
  const startIndex = offset || 0;
  const endIndex = startIndex + (limit || templates.length);

  return templates.slice(startIndex, endIndex);
};

export const cleanTemplates = () => {
  templates.length = 0;
};
