export interface APIResponse<Data = any> {
  message?: string;
  data: Data | null;
  code?: string;
}

export interface IGetTemplates {
  limit?: number;
  offset?: number;
}

export interface IGetTemplatesResponse {
  id: number;
}

export interface IPostTemplate {
  name: string;
}

export * from './models';
