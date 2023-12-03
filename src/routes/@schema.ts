import * as yup from 'yup';

export const getTemplatesValidation = yup.object({
  query: yup.object({
    offset: yup.number().optional(),
    limit: yup.number().optional(),
  }),
});

export const postTemplateValidation = yup.object({
  body: yup.object({
    name: yup.string().trim().required(),
  }),
});
